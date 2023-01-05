import Post from "./Post";
import { asyncHandler } from "../../middlewares/async";
import ErrorResponse from "../../middlewares/ErrorResponse";
import { deleteImage } from "../../middlewares/imageUpload";
import {
  downVoteDocument,
  generalGetOne,
  upVoteDocument,
  reportDocument,
} from "../../utils/factoryFunctions";
import { IAdvacedResultsRes, IUserReq } from "../../types/ExpressTypes";
import User from "../User/User";
import { calculateActionReputation } from "../../utils/maths/reputationFunctions";
import { Tags } from "./Tags";
import { tags } from "../../config/tags";
export const createPost = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  req.body.author = req.user._id;
  if (req.file) {
    // improve later
    let file: any = req.file;
    req.body.image = file.location;
  }
  if (!req.body.community) {
    //   return next(new ErrorResponse("Please select a community", 400));
    // need to come up with something
  }
  if (!req.file && !req.body.description) {
    return next(new ErrorResponse("Both image and Text can't be empty", 400));
  }
  if (req.body.description) {
    if (req.body.description.length < 5) {
      return next(new ErrorResponse("Text cannot be this short", 400));
    }
  }
  let post = await Post.create(req.body);
  if (!post) {
    await deleteImage(req.body.image);
  }
  post = await post.populate([
    { path: "community", select: "name" },
    { path: "author", select: "username profileImage name" },
  ]);
  res.status(201).json({ success: true, data: post });
});
export const insertTags = asyncHandler(async (request, res, next) => {
  const newTags = await Tags.find();
  res.json({ success: true, data: newTags });
});
export const getSinglePost = generalGetOne(Post, [
  { path: "comments" },
  { path: "community", select: "-members" },
  { path: "author" },
]);

export const getAllPosts = asyncHandler(async (req, response, next) => {
  const res = response as IAdvacedResultsRes;
  res.status(200).json(res.advancedResults);
});

export const savePost = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  let user = await User.findByIdAndUpdate(req.user._id);
  let post = await Post.findByIdAndUpdate(req.params.id);
  // @ts-ignore
  user?.savedPosts.push(req.params.id);
  const { RxDelta, RxNormDelta, UserRxDelta } = await calculateActionReputation(
    req.user.reputation,
    "save"
  );
  post.reputation += RxDelta;
  post.normalizedReputation += RxNormDelta;
  res.status(200).json({ success: true, data: post });
  setTimeout(async () => {
    await post.save();
    const user = await User.findById(post.author._id);
    // @ts-ignore
    user?.reputation += UserRxDelta;
    user?.save();
  }, 0);
});

export const unsavePost = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  let user = await User.findByIdAndUpdate(req.user._id);
  let post = await Post.findByIdAndUpdate(req.params.id);
  // @ts-ignore
  user?.savedPosts.pull(req.params.id);
  const { RxDelta, RxNormDelta, UserRxDelta } = await calculateActionReputation(
    req.user.reputation,
    "unsave"
  );
  post.reputation += RxDelta;
  post.normalizedReputation += RxNormDelta;
  res.status(200).json({ success: true, data: post });
  setTimeout(async () => {
    await post.save();
    const user = await User.findById(post.author._id);
    // @ts-ignore
    user?.reputation += UserRxDelta;
    user?.save();
  }, 0);
});

export const reportPost = reportDocument(Post);
export const upvotePost = upVoteDocument(Post);

export const downvotePost = downVoteDocument(Post);

export const deletePost = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new ErrorResponse("No post found with that id", 404));
  }
  if (post.image) {
    await deleteImage(post.image);
  }

  //this check is going to explicitely handled on client side
  if (post.author._id.toString() !== req.user._id.toString()) {
    return next(new ErrorResponse("You cannot touch someone else's post", 400));
  }

  await post.remove();
  res.status(204).json({ succes: true });
});
