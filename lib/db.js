import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ali-dev';

let cached = globalThis.mongoose || { promise: null, connection: null };

// Ensure caching only happens in the server-side environment
if (process.env.NODE_ENV === 'development') {
  globalThis.mongoose = cached;
}

const dbConnect = async () => {
  // Check if the connection is already established
  if (cached.connection) {
    return cached.connection;
  }

  // Otherwise, start a new connection
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false })
      .then((mongooseInstance) => mongooseInstance);
  }

  // Wait for the promise to resolve and cache the connection
  cached.connection = await cached.promise;
  return cached.connection;
};

export default dbConnect;
