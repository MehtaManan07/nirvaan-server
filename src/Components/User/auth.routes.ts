import express from "express";
import { upload } from "../../middlewares/imageUpload";
import {
  generateOTP,
  verifyOtpAndLogin,
  registerUser,
  verifyOTP,
} from "./auth.controllers";
const router = express.Router();
router.post("/generateOTP", generateOTP);
router.post("/verifyOTP", verifyOTP);
router.post("/login", verifyOtpAndLogin);
router.post("/register", upload.single("profileImage"), registerUser);

export { router as AuthRoutes };
