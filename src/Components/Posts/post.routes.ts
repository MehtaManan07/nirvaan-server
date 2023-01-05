import express from "express";
import { protect } from "../../middlewares/auth";
import { upload } from "../../middlewares/imageUpload";
import { advancedResults } from "../../utils/filterFeatures";
import Post from "./Post";
import {
  createPost,
  deletePost,
  downvotePost,
  getAllPosts,
  getSinglePost,
  insertTags,
  reportPost,
  savePost,
  unsavePost,
  upvotePost,
} from "./post.controllers";
const router = express.Router();
router.get("/tags", insertTags);
router.use(protect);
router.get("/", advancedResults(Post), getAllPosts);
router.post("/create", upload.single("image"), createPost);
router.route("/:id").get(getSinglePost).delete(deletePost);
//   .put(multer.single('file'),updatePost);
router.put("/upvote/:id", upvotePost);
router.put("/downvote/:id", downvotePost);
router.post("/report/:id", reportPost);
router.get("/save/:id", savePost);
router.get("/unsave/:id", unsavePost);

export { router as PostRoutes };
