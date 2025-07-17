// src/config/config.js
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  mongoUrl: process.env.MONGO_URL,
  baseUrl: process.env.BASE_URL,
  expirationDays: process.env.EXPIRATION_DAYS || 30,
};

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};
