// src/server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import urlRoutes from "./routes/urlRoutes.js";
import { config, connectDB } from "./config/config.js";

const app = express();

// ESM xử lý __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MongoDB
connectDB();

// Routes
app.use("/", urlRoutes);

// Start server
app.listen(config.port, () =>
  console.log(`🚀 Server running on port ${config.port}`)
);
