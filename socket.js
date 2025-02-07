const { Server } = require("socket.io");
const fetch = require("node-fetch"); // Use fetch for API requests

let io;

function initializeSocket(server) {
  if (!io) {
    io = new Server(server, {
      path: "/api/socket",
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log("New client connected:", socket.id);

      socket.on("join_room", (roomId) => {
        socket.join(roomId);
        console.log(`User joined room: ${roomId}`);
      });

      socket.on("send_message", async (data) => {
        try {
          console.log("📩 Message Data to Send:", data); // Log the data
      
          const response = await fetch("http://localhost:3000/api/saveMessage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              senderId: data.senderId,
              receiverId: data.receiverId,
              message: data.message,
              roomId: data.roomId,
            }),
          });
      
          const result = await response.json();
          console.log("📝 API Response:", result);
      
          // Emit message to chat room
          io.to(data.roomId).emit("receive_message", data);
        } catch (error) {
          console.error("❌ Error sending message:", error);
        }
      });
      
      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
      });
    });
  }
  return io;
}

module.exports = initializeSocket;
