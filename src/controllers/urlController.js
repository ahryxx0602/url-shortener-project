import Url from "../models/Url.js";
import { nanoid } from "nanoid";
import validator from "validator";

export const showForm = async (req, res) => {
  const urls = await Url.find().sort({ createdAt: -1 });
  res.render("index", { urls, baseUrl: process.env.BASE_URL });
};

export const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  if (!validator.isURL(originalUrl, { require_protocol: true })) {
    return res
      .status(400)
      .send("URL không hợp lệ. Phải bắt đầu bằng http:// hoặc https://");
  }

  let url = await Url.findOne({ originalUrl });
  if (!url) {
    const shortCode = nanoid(7);
    url = await Url.create({ originalUrl, shortCode });
  }

  res.redirect("/");
};

export const redirect = async (req, res) => {
  const { shortCode } = req.params;
  const url = await Url.findOne({ shortCode });
  if (!url) {
    return res.status(404).send("Link không tồn tại hoặc đã hết hạn.");
  }
  url.clicks++;
  await url.save();
  res.redirect(url.originalUrl);
};

export const showStats = async (req, res) => {
  const { shortCode } = req.params;
  const url = await Url.findOne({ shortCode });
  if (!url) {
    return res.status(404).send("Không tìm thấy thống kê cho link này.");
  }
  res.render("stats", {
    url,
    baseUrl: process.env.BASE_URL,
  });
};
