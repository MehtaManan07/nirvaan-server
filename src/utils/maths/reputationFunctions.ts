import User from "../../Components/User/User";

export const calculateActionReputation = async (
  Ru: any,
  Action:
    | "upvote"
    | "downvote"
    | "report"
    | "share"
    | "save"
    | "unsave"
    | "unreport"
) => {
  let actionValue = 1;
  switch (Action) {
    case "upvote":
      actionValue = 1;
      break;
    case "downvote":
      actionValue = -1;
      break;
    case "report":
      actionValue = -50;
      break;
    case "report":
      actionValue = +50;
      break;
    case "share":
      actionValue = 2;
      break;
    case "save":
      actionValue = 5;
      break;
    case "unsave":
      actionValue = -5;
      break;
    default:
      break;
  }
  const totalUsers = await User.countDocuments();
  const Rx = Ru * actionValue;
  const RxNorm = (Rx * 100) / totalUsers;
  let UserRx = calculateUserReputation(RxNorm);
  const result = { RxDelta: Rx, RxNormDelta: RxNorm, UserRxDelta: UserRx };
  return result;
};

const calculateUserReputation = (x: number): number => {
  let negative = false;
  if (x < 0) {
    x = x * -1;
    negative = true;
  }
  let finalValue = 0;
  if (x >= 0 && x < 10) {
    finalValue = (3 * x) / (3 * x + 70);
  } else if (x >= 10 && x < 25) {
    finalValue = (5 + x) / 50;
  } else if (x >= 25 && x < 50) {
    finalValue = -(0.04 * x * x - 4.2 * x + 20 / 100);
  } else if (x >= 50 && x < 100) {
    finalValue = (400 + x) / 500;
  } else if (x >= 100) {
    finalValue = 1;
  }
  if (negative) {
    return -1 * finalValue;
  } else {
    return finalValue;
  }
};
