import { IUserReq } from "../../types/ExpressTypes";
import User from "../User/User";
export const updateUserAfterJoin = async (req: IUserReq) => {
  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { communities: req.params.id },
  });
};
export const updateUserAfterLeave = async (req: IUserReq) => {
  await User.findByIdAndUpdate(req.user._id, {
    $pull: { communities: req.params.id },
  });
};
