import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// connectDB();


app.get("/", (req, res) => {
  res.json({ message: "Server is Up and Running..." });
});


app.get("/api/getData", (req, res) => {
  res.json({ message: "API is live" });
});


app.listen(PORT, () => {
  console.log('Server running ...')
});
