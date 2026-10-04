import mongoose from "mongoose";
const { Schema, model } = mongoose;

const WebhookEventSchema = new Schema({
  eventId: { type: String, required: true, unique: true },
  event: { type: String, required: true },
  processedAt: { type: Date, default: Date.now },
});

export default mongoose.models.WebhookEvent || model("WebhookEvent", WebhookEventSchema);