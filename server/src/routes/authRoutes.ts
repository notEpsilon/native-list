import express from "express";
import { authController } from "../controllers/authController";

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/verify_token", authController.verifyToken);

router.post("/safe_info_from_token", authController.safeInfoFromValidToken);

export default router;
