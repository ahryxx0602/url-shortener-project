import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: `${process.env.EXPIRATION_DAYS}d`,
  },
});

const Url = mongoose.model("Url", urlSchema);
export default Url;
