import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI||"mongodb+srv://nextgendev3:CAd2rl1t4qwAxqaj@ali.7vy0l.mongodb.net/ali-dev?retryWrites=true&w=majority"; // Ensure this is defined in your environment variables

// nextgendev3
// CAd2rl1t4qwAxqaj

// Cache object to store the connection and promise
const cached = {
  connection: null,
  promise: null,
};

const dbConnect = async () => {
  // If a connection already exists, return it
  if (cached.connection) {
    return cached.connection;
  }

  // If no connection exists, create a new one
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false, // Disable buffering of commands
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    }).then((mongooseInstance) => mongooseInstance);
  }

  try {
    // Wait for the connection to be established
    cached.connection = await cached.promise;
    console.log('Connected to MongoDB'); // Log success
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error; // Rethrow the error for debugging
  }

  return cached.connection;
};

export default dbConnect;