import mongoose from "mongoose";
import User from "../models/User.js";
import Payment from "../models/Payment.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function apply() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
  
  await User.syncIndexes();
  console.log("✅ User indexes synced");
  
  await Payment.syncIndexes();
  console.log("✅ Payment indexes synced");
  
  console.log("\nUser indexes:", await User.collection.getIndexes());
  console.log("\nPayment indexes:", await Payment.collection.getIndexes());
  
  process.exit();
}

apply().catch(err => {
  console.error("❌ Failed:", err);
  process.exit(1);
});