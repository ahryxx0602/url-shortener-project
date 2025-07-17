// routes/urlRoutes.js
const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

// Trang chính + form tạo
router.get("/", urlController.showForm);

// Xử lý tạo link ngắn
router.post("/shorten", urlController.createShortUrl);

// Chuyển hướng
router.get("/:shortCode", urlController.redirect);

// Thống kê click
router.get("/:shortCode/stats", urlController.showStats);

module.exports = router;
