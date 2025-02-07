import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // Ensure this connects to MongoDB
import Message from "@/models/Message"; // Import Message model

export async function GET(req) {
  await dbConnect();

  const url = new URL(req.url);
  const roomId = url.searchParams.get("roomId"); // Get roomId from URL query

  if (!roomId) {
    return NextResponse.json({ error: "Room ID is required" }, { status: 400 });
  }

  try {
    console.log("room id",roomId);
 
    const messages = await Message.find({roomId: roomId});
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
