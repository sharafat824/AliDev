import { Webhook } from "svix";
import { headers } from "next/headers";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  console.log("🔹 Webhook Received:", WEBHOOK_SECRET);

  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response(JSON.stringify({ error: "Missing webhook headers" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  let payload;
  try {
    payload = await req.json();
    console.log("🔹 Payload received:", JSON.stringify(payload, null, 2));
  } catch (error) {
    console.error("❌ Invalid JSON payload:", error);
    return new Response(JSON.stringify({ error: "Invalid JSON payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    evt = wh.verify(JSON.stringify(payload), {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
    console.log("🔹 Webhook verified successfully!");
  } catch (err) {
    console.error("❌ Webhook verification failed:", err);
    return new Response(JSON.stringify({ error: "Invalid webhook signature" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await dbConnect();
    console.log("✅ Connected to database.");

    if (evt.type === "user.created" || evt.type === "user.updated") {
      const userData = {
        clerkUserId: evt.data.id,
        email: evt.data.email_addresses?.[0]?.email_address || "no-email",
        role: "USER",
      };

      const updatedUser = await User.findOneAndUpdate(
        { clerkUserId: evt.data.id },
        userData,
        { upsert: true, new: true }
      );

      console.log("✅ User updated:", updatedUser);
    }

    return new Response(JSON.stringify({ message: "Webhook processed" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error updating user:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
