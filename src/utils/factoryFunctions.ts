import { notifyAfterUpvotes } from "./../Components/Notifications/notification.helpers";
import { asyncHandler } from "../middlewares/async";
import ErrorResponse from "../middlewares/ErrorResponse";
import { IUserReq } from "../types/ExpressTypes";
import { calculateActionReputation } from "./maths/reputationFunctions";
import User from "../Components/User/User";

export const generalGetOne = (Model: any, populate?: any) =>
  asyncHandler(async (req, res, next) => {
    let doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new ErrorResponse("No doc found with that id", 404));
    }
    if (populate) {
      doc = await doc.populate(populate);
    }
    res.status(200).json({ success: true, data: doc });
  });

export const upVoteDocument = (Model: any) =>
  asyncHandler(async (request, res, next) => {
    const req = request as IUserReq;
    let userDelta = 0;
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new ErrorResponse("No document found with that id", 404));
    }
    if (doc.downvotes.includes(req.user._id)) {
      doc.downvotes = doc.downvotes.filter(
        (id: any) => id.toString() !== req.user._id.toString()
      );
      const responseOne = await calculateActionReputation(
        req.user.reputation,
        "upvote"
      );
      doc.reputation += responseOne.RxDelta;
      doc.normalizedReputation += responseOne.RxNormDelta;
      userDelta += responseOne.UserRxDelta;
    }
    if (doc.upvotes.includes(req.user._id)) {
      doc.upvotes = doc.upvotes.filter(
        (id: any) => id.toString() !== req.user._id.toString()
      );
      const responseTwo = await calculateActionReputation(
        req.user.reputation,
        "downvote"
      );
      doc.reputation += responseTwo.RxDelta;
      doc.normalizedReputation += responseTwo.RxNormDelta;
      userDelta += responseTwo.UserRxDelta;
    } else {
      doc.upvotes = doc.upvotes.push(req.user._id);
      const responseThree = await calculateActionReputation(
        req.user.reputation,
        "upvote"
      );
      doc.reputation += responseThree.RxDelta;
      doc.normalizedReputation += responseThree.RxNormDelta;
      userDelta += responseThree.UserRxDelta;
    }
    doc.voteCount = doc.upvotes.length - doc.downvotes.length;
    res.status(200).json({ success: true, data: doc });
    setTimeout(async () => {
      await doc.save({ validateBeforeSave: false });
      await notifyAfterUpvotes(req, doc);
      const user = await User.findById(doc.author._id);
      if (user) {
        user.reputation += userDelta as any;
        user?.save();
      }
    }, 0);
  });

export const downVoteDocument = (Model: any) =>
  asyncHandler(async (request, res, next) => {
    const req = request as IUserReq;
    let userDelta = 0;
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new ErrorResponse("No doc found with that id", 404));
    }
    if (doc.upvotes.includes(req.user._id)) {
      doc.upvotes = doc.upvotes.filter(
        (id: any) => id.toString() !== req.user._id.toString()
      );
      const responseOne = await calculateActionReputation(
        req.user.reputation,
        "downvote"
      );
      doc.reputation += responseOne.RxDelta;
      doc.normalizedReputation += responseOne.RxNormDelta;
      userDelta += responseOne.UserRxDelta;
    }
    if (doc.downvotes.includes(req.user._id)) {
      doc.downvotes = doc.downvotes.filter(
        (id: any) => id.toString() !== req.user._id.toString()
      );
      const responseTwo = await calculateActionReputation(
        req.user.reputation,
        "upvote"
      );
      doc.reputation += responseTwo.RxDelta;
      doc.normalizedReputation += responseTwo.RxNormDelta;
      userDelta += responseTwo.UserRxDelta;
    } else {
      doc.downvotes = doc.downvotes.push(req.user._id);
      const responseThree = await calculateActionReputation(
        req.user.reputation,
        "downvote"
      );
      doc.reputation += responseThree.RxDelta;
      doc.normalizedReputation += responseThree.RxNormDelta;
      userDelta += responseThree.UserRxDelta;
    }

    doc.voteCount = doc.upvotes.length - doc.downvotes.length;
    res.status(200).json({ success: true, data: doc });
    setTimeout(async () => {
      await doc.save({ validateBeforeSave: false });
      await notifyAfterUpvotes(req, doc);
      const user = await User.findById(doc.author._id);
      if (user) {
        user.reputation += userDelta as any;
        user?.save();
      }
    }, 0);
  });

export const reportDocument = (Model: any) =>
  asyncHandler(async (request, res, next) => {
    const req = request as IUserReq;
    let doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new ErrorResponse(`Error while reporting the document`, 400));
    }
    if (doc.reports.includes(req.user._id)) {
      doc.reports.pull(req.user._id);
      const { RxDelta, RxNormDelta, UserRxDelta } =
        await calculateActionReputation(req.user.reputation, "unreport");
      doc.reputation += RxDelta;
      doc.normalizedReputation += RxNormDelta;
    } else {
      doc.reports.push(req.user._id);
      const { RxDelta, RxNormDelta, UserRxDelta } =
        await calculateActionReputation(req.user.reputation, "report");
      doc.reputation += RxDelta;
      doc.normalizedReputation += RxNormDelta;
    }
    res.status(200).json({ success: true, data: doc });
    setTimeout(async () => {
      await doc.save();
      const user = await User.findById(doc.author._id);
      // @ts-ignore
      user?.reputation += UserRxDelta;
      user?.save();
    }, 0);
  });
