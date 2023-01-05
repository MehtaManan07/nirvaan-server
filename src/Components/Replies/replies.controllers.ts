import { Reply } from "./Reply";
import { asyncHandler } from "../../middlewares/async";
import ErrorResponse from "../../middlewares/ErrorResponse";
import {
  downVoteDocument,
  generalGetOne,
  upVoteDocument,
  reportDocument,
} from "../../utils/factoryFunctions";
import { IUserReq } from "../../types/ExpressTypes";
import { notifyAfterReply } from "../Notifications/notification.helpers";

export const newReply = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  req.body.author = req.user._id;
  let reply = await Reply.create(req.body);
  reply = await reply.populate([
    { path: "author", select: "name profileImage username" },
    // { path: "post", select: "author" },
  ]);
  res.status(201).json({ success: true, data: reply });
  setTimeout(async () => {
    await notifyAfterReply(req, reply);
  }, 0);
});

export const getReplysForAComment = asyncHandler(async (req, res, next) => {
  const replies = await Reply.find({ comment: req.params.commentID });
  if (!replies) {
    return next(new ErrorResponse("No comment found with that id", 404));
  }
  res.status(200).json({ success: true, data: replies });
});
export const reportReply = reportDocument(Reply);
export const getReply = generalGetOne(Reply);
export const upvoteReply = upVoteDocument(Reply);
export const downvoteReply = downVoteDocument(Reply);

export const deleteReply = asyncHandler(async (req, res, next) => {
  const reply = await Reply.findById(req.params.id);
  if (!reply) {
    return next(
      new ErrorResponse(`No reply found with id ${req.params.id}`, 404)
    );
  }
  await reply.remove();

  res.status(204).json({
    success: true,
    data: null,
  });
});
