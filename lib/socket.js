import { Server } from "socket.io";
import dbConnect from "@/lib/dbConnect"; // Ensure DB connection before using models
import Message from "@/models/Message"; // Import the model at the top level

export default async function SocketHandler(req, res) {
  // Ensure DB connection
  await dbConnect();

  // Check if Socket.io server is already initialized
  if (res.socket.server.io) {
    console.log("✅ Socket.io already running");
  } else {
    console.log("🚀 Setting up new Socket.io server...");

    // Attach new WebSocket server
    const io = new Server(res.socket.server, {
      path: "/api/socket",
      addTrailingSlash: false,
    });

    // Handle WebSocket connections
    io.on("connection", (socket) => {
      console.log("🟢 A user connected:", socket.id);

      // Join room
      socket.on("join_room", (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room ${roomId}`);
      });

      // Handle sending messages
      socket.on("send_message", async (data) => {
        console.log("📩 Message received:", data);

        try {
          // Save message to MongoDB
          const newMessage = new Message(data);
          await newMessage.save();

          // Broadcast message to the room
          io.to(data.roomId).emit("receive_message", data);
        } catch (error) {
          console.error("❌ Error saving message:", error);
        }
      });

      // Handle disconnection
      socket.on("disconnect", () => {
        console.log(`🔴 User disconnected: ${socket.id}`);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}
