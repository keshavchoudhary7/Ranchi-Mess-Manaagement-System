import express from "express";
import { loginUser, registerUser } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);

export default router;
