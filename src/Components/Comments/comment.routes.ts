import express from "express";
import {
  deleteComment,
  downvoteComment,
  getComment,
  getCommentsForAPost,
  newComment,
  reportComment,
  upvoteComment,
} from "./comment.controllers";
import { protect } from "../../middlewares/auth";
const router = express.Router();

router.use(protect);
router.post("/create", newComment);
router.get("/:postID", getCommentsForAPost);
router.put("/upvote/:id", upvoteComment);
router.put("/downvote/:id", downvoteComment);
router.post("/report/:id", reportComment);
router.delete("/:id", deleteComment);
export { router as CommentRoutes };
