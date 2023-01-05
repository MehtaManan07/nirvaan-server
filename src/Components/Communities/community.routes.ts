import { advancedResults } from "./../../utils/filterFeatures";
import {
  getCommunities,
  createCommunity,
  getOneCommunity,
  adminCheck,
  deleteCommunity,
  updateCommunity,
  joinCommunity,
  leaveCommunity,
} from "./community.controllers";
import { protect } from "./../../middlewares/auth";
import Community from "./Community";
import { upload } from "../../middlewares/imageUpload";
import { Router } from "express";
const router = Router();
router.use(protect);
router.get("/", advancedResults(Community), getCommunities);
router.post("/create", upload.single("file"), createCommunity);
router
  .route("/:id")
  .get(getOneCommunity)
  .delete(adminCheck, deleteCommunity)
  .put(upload.single("file"), adminCheck, updateCommunity);
router.put("/join/:id", joinCommunity);
router.put("/leave/:id", leaveCommunity);
export default router;

export { router as CommunityRoutes };
