import mongoose from 'mongoose';

let isConnected = false;

export async function dbConnect() {
  if (isConnected) {
    console.log("✅ Already connected to MongoDB");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "your-db-name", // optional: specify if needed
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error); // 👈 actual error log
    throw error; // optional: rethrow to handle in calling function
  }
}
