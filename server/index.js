import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDb from "./config/db.js";

dotenv.config();
const app = express();
// Set up CORS options
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;
// Connect to MongoDB
connectDb();
// Middleware
app.use(express.json());
app.use("/api/auth", authRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
