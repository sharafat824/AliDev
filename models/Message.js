import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: { type: String, required: true }, // Clerk user ID
  receiverId: { type: String, required: true }, // Clerk user ID
  message: { type: String, required: true },
  roomId: { type: String, required: true }, // Unique room ID for user-admin chat
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;