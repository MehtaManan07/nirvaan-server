import { Comment } from "./Comment";
import { asyncHandler } from "../../middlewares/async";
import ErrorResponse from "../../middlewares/ErrorResponse";
import { deleteImage } from "../../middlewares/imageUpload";
import {
  downVoteDocument,
  generalGetOne,
  upVoteDocument,
  reportDocument,
} from "../../utils/factoryFunctions";
import { IUserReq } from "../../types/ExpressTypes";
import Post from "../Posts/Post";
import { notifyAfterComment } from "../Notifications/notification.helpers";

export const checkCommentOwner = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  const comment = await Comment.findById(req.params.id);
  const post = await Post.findById(req.body.postID);
  if (req.user.id.toString() !== post.author.id.toString()) {
    if (comment.user.id.toString() !== req.user.id.toString())
      return next(
        new ErrorResponse(`You cannot touch someone else's comment.`, 403)
      );
  }
  next();
});

export const newComment = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  req.body.author = req.user._id;
  let comment = await Comment.create(req.body);
  comment = await comment.populate([
    { path: "author", select: "name profileImage username" },
    // { path: "post", select: "author" },
  ]);
  res.status(201).json({ success: true, data: comment });
  setTimeout(async () => {
    await notifyAfterComment(req, comment);
  }, 0);
});

export const getCommentsForAPost = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ post: req.params.postID });
  if (!comments) {
    return next(new ErrorResponse("No post found with that id", 404));
  }
  res.status(200).json({ success: true, data: comments });
});
export const reportComment = reportDocument(Comment);
export const getComment = generalGetOne(Comment);
export const upvoteComment = upVoteDocument(Comment);
export const downvoteComment = downVoteDocument(Comment);

export const deleteComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) {
    return next(
      new ErrorResponse(`No comment found with id ${req.params.id}`, 404)
    );
  }
  await comment.remove();

  res.status(204).json({
    success: true,
    data: null,
  });
});
