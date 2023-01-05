import { asyncHandler } from "../../middlewares/async";
import ErrorResponse from "../../middlewares/ErrorResponse";
import { deleteImage } from "../../middlewares/imageUpload";
import { IAdvacedResultsRes, IUserReq } from "../../types/ExpressTypes";
import { generalGetOne } from "../../utils/factoryFunctions";
import Community from "./Community";
import { updateUserAfterJoin, updateUserAfterLeave } from "./helpers";

export const adminCheck = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  const community = await Community.findById(req.params.id);
  if (!community.admins.includes(req.user._id)) {
    return new ErrorResponse(`This is an admin only feature`, 400);
  }
  next();
});

export const createCommunity = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  if (req.file) {
    // improve later
    let file: any = req.file;
    req.body.coverImage = file.location;
  }
  req.body.createdBy = req.user._id;
  req.body.admins = [req.user._id];
  req.body.members = [req.user._id];
  const community = await Community.create(req.body);
  res.status(201).json({ success: true, data: community });
});

export const getCommunities = asyncHandler(async (req, response, next) => {
  const res = response as IAdvacedResultsRes;
  res.status(200).json(res.advancedResults);
});

export const getOneCommunity = generalGetOne(Community, [
  { path: "createdBy", select: "name profileImage username" },
  { path: "posts" },
]);

export const updateCommunity = asyncHandler(async (req, res, net) => {
  let community = await Community.findById(req.params.id);
  if (!community) {
    return new ErrorResponse(`No such community found`, 404);
  }
  if (req.file) {
    await deleteImage(community.coverImage);
    // improve later
    let file: any = req.file;
    req.body.coverImage = file.location;
  }
  community = await Community.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: community });
});

export const deleteCommunity = asyncHandler(
  async (req: any, res: any, next: any) => {
    const doc = await Community.findById(req.params.id);
    if (!doc) {
      return next(new ErrorResponse("No document found with that ID", 404));
    }
    await deleteImage(doc.coverImage.imageId);
    await doc.remove();

    res.status(204).json({
      status: "success",
      data: null,
    });
  }
);

export const joinCommunity = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  let community;
  community = await Community.findByIdAndUpdate(
    req.params.id,
    {
      $addToSet: { members: req.user._id },
    },
    { new: true }
  );
  if (!community) {
    return next(new ErrorResponse("No such community exists", 404));
  }
  community = await community.populate([
    { path: "createdBy", select: "name username" },
  ]);
  res.status(200).json({ success: true, data: community });
  setTimeout(async () => updateUserAfterJoin(req), 0);
});

export const leaveCommunity = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  const community = await Community.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { members: req.user._id },
    },
    { new: true }
  );
  if (!community) {
    return next(new ErrorResponse("No such community exists", 404));
  }
  res.status(200).json({ success: true, data: community });
  setTimeout(async () => updateUserAfterLeave(req), 0);
});
