// controllers/urlController.js
const Url = require("../models/Url");
const { nanoid } = require("nanoid");
const validator = require("validator");

exports.showForm = async (req, res) => {
  // Lấy toàn bộ URL để hiển thị
  const urls = await Url.find().sort({ createdAt: -1 });
  res.render("index", { urls, baseUrl: process.env.BASE_URL });
};

exports.createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  // Validate URL
  if (!validator.isURL(originalUrl, { require_protocol: true })) {
    return res
      .status(400)
      .send("URL không hợp lệ. Phải bắt đầu bằng http:// hoặc https://");
  }
  // Nếu đã tồn tại, không tạo mới
  let url = await Url.findOne({ originalUrl });
  if (!url) {
    const shortCode = nanoid(7);
    url = await Url.create({ originalUrl, shortCode });
  }
  res.redirect("/");
};

exports.redirect = async (req, res) => {
  const { shortCode } = req.params;
  const url = await Url.findOne({ shortCode });
  if (!url) {
    return res.status(404).send("Link không tồn tại hoặc đã hết hạn.");
  }
  url.clicks++;
  await url.save();
  res.redirect(url.originalUrl);
};

exports.showStats = async (req, res) => {
  const { shortCode } = req.params;
  const url = await Url.findOne({ shortCode });
  if (!url) {
    return res.status(404).send("Không tìm thấy thống kê cho link này.");
  }
  res.render("stats", {
    url,
    baseUrl: process.env.BASE_URL, // thêm dòng này
  });
};
