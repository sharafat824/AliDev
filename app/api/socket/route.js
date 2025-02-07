import { NextResponse } from "next/server";
import { Server } from "socket.io";

let io;

export async function GET() {
  if (!io) {
    io = new Server({
      addTrailingSlash: false,
    });

    io.on("connection", (socket) => {
      console.log("A user connected:", socket.id);

      // Join a room (user-admin chat room)
      socket.on("join_room", (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room ${roomId}`);
      });

      // Handle sending messages
      socket.on("send_message", async (data) => {
        console.log("Message received:", data);

        // Broadcast the message to the room
        io.to(data.roomId).emit("receive_message", data);
      });

      // Handle disconnection
      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }

  return NextResponse.json({ message: "Socket.IO connected" });
}