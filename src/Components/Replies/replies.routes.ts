import express from "express";
import {
  deleteReply,
  downvoteReply,
  getReply,
  getReplysForAComment,
  newReply,
  reportReply,
  upvoteReply,
} from "./replies.controllers";
import { protect } from "../../middlewares/auth";
const router = express.Router();

router.use(protect);
router.post("/create", newReply);
router.get("/:commentID", getReplysForAComment);
router.put("/upvote/:id", upvoteReply);
router.put("/downvote/:id", downvoteReply);
router.post("/report/:id", reportReply);
router.delete("/:id", deleteReply);
export { router as ReplyRoutes };
