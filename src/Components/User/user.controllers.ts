import { IUserReq } from "./../../types/ExpressTypes";
import { asyncHandler } from "./../../middlewares/async";
import ErrorResponse from "../../middlewares/ErrorResponse";
import User from "./User";
import { deleteImage } from "../../middlewares/imageUpload";

export const getMe = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  let user = await User.findById(req.user._id);
  if (!user) {
    return next(new ErrorResponse(`No user found with that id`, 404));
  }
  user = await user.populate([
    { path: "communities", select: "-id" },
    { path: "posts", select: "-id" },
  ]);
  res.status(200).json({ success: true, data: user });
});

export const getUser = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  let user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorResponse(`No user found with that id`, 404));
  }
  user = await user.populate([
    { path: "communities", select: "-id" },
    { path: "posts", select: "-id" },
  ]);
  res.status(200).json({ success: true, data: user });
});

export const updateProfile = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  if (req.params.id.toString() !== req.user._id.toString()) {
    return next(
      new ErrorResponse(`You cannot touch anyone else's profile`, 400)
    );
  }
  if (req.file) {
    let file: any = req.file;
    req.body.profileImage = file.location;
  }
  const user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(
      new ErrorResponse(`No document found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: user });
});

export const deactivateUser = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  if (req.params.id.toString() !== req.user._id.toString()) {
    return next(
      new ErrorResponse(`You cannot touch anyone else's profile`, 400)
    );
  }
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { active: false },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!user) {
    return next(
      new ErrorResponse(`No document found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: user });
});
