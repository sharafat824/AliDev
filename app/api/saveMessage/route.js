import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // Ensure MongoDB is connected
import Message from "@/models/Message"; // Import Message model

export async function POST(req) {
  try {
    await dbConnect();
    const { senderId, receiverId, message, roomId } = await req.json();

    if (!senderId || !receiverId || !message || !roomId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
      roomId,
      timestamp: new Date(),
    });

    await newMessage.save();

    return NextResponse.json({ success: true, message: "Message saved!" });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
