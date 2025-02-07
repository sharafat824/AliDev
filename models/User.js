// models/User.js
import mongoose from 'mongoose';

// Define user schema
const userSchema = new mongoose.Schema({
  clerkUserId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Safe check for existing models in Next.js Edge environment
let User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.models.User;  // Reuse the existing model
} else {
  User = mongoose.model("User", userSchema);  // Create the model if not already registered
}

export default User;
