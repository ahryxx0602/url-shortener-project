// models/Url.js
const mongoose = require("mongoose");

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

// Khi thêm `expires` trên createdAt, MongoDB sẽ tự xóa document sau X ngày
module.exports = mongoose.model("Url", urlSchema);
