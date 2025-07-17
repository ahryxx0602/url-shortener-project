import express from "express";
import {
  showForm,
  createShortUrl,
  redirect,
  showStats,
} from "../controllers/urlController.js";

const router = express.Router();

router.get("/", showForm);
router.post("/shorten", createShortUrl);
router.get("/:shortCode", redirect);
router.get("/:shortCode/stats", showStats);

export default router;
