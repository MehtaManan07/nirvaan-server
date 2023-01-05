import { notifySingleUser } from "./../../utils/firebase";
import Notification from "./Notification";
import { IUserReq } from "../../types/ExpressTypes";

export const notifyAfterComment = async (req: IUserReq, comment: any) => {
  const navigate = {
    screen: "Post",
    options: {},
  };
  // notifySingleUser(
  //     req.body.fbToken,
  //     {
  //         type: "comment",
  //         // navigate: JSON.stringify(navigate),
  //     },
  //     "People are commenting on your post",
  //     "Checkout now!"
  // );
  await Notification.create({
    message: `${req.user.username} commented on your post`,
    to: comment.post.author,
    from: req.user._id,
    // navigate: JSON.stringify(navigate),
  });
};

export const notifyAfterReply = async (req: IUserReq, reply: any) => {
  const navigate = {
    screen: "Post",
    options: {},
  };
  // notifySingleUser(
  //     req.body.fbToken,
  //     {
  //         type: "comment",
  //         // navigate: JSON.stringify(navigate),
  //     },
  //     "People are commenting on your post",
  //     "Checkout now!"
  // );
  await Notification.create({
    message: `${req.user.username} replied on your post`,
    to: reply.comment.author,
    from: req.user._id,
    // navigate: JSON.stringify(navigate),
  });
};

export const notifyAfterUpvotes = async (req: IUserReq, doc: any) => {
  if (doc.upvotes.length % 5 === 0 || doc.upvotes.length < 5) {
    // notifySingleUser(
    //     req.body.fbToken,
    //     {
    //         type: "vote",
    //         // navigate: JSON.stringify(navigate),
    //     },
    //     "People are upvoting on your post",
    //     "Have a look!"
    // );
    await Notification.create({
      message: `${req.user.username} upVoted your post`,
      to: doc.author,
      from: req.user._id,
      // navigate: JSON.stringify(navigate),
    });
  }
};
