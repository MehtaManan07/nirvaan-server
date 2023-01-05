import express from "express";
import { protect } from "./../../middlewares/auth";
import { upload } from "../../middlewares/imageUpload";
import {
  deactivateUser,
  getMe,
  getUser,
  updateProfile,
} from "./user.controllers";
const router = express.Router();
router.use(protect);
router.get("/me", getMe);
router.get("/:id", getUser);
router.put("/deactivate/:id", deactivateUser);
router.put("/update/profile/:id", upload.single("profileImage"), updateProfile);

export { router as UserRoutes };
