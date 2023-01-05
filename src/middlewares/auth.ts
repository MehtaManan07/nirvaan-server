import jwt from "jsonwebtoken";
import { asyncHandler } from "./async";
import ErrorResponse from "./ErrorResponse";
import User from "../Components/User/User";
import { IUserReq } from "../types/ExpressTypes";

// Protected routes
export const protect = asyncHandler(async (request, res, next) => {
  const req = request as IUserReq;
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwtNirvaan) {
    token = req.cookies.jwtNirvaan;
  }
  // Make sure token is send;
  if (!token) {
    return next(
      new ErrorResponse("Not authorized to access the resource", 401)
    );
  }

  try {
    // verify token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    const user = await User.findById(decoded.data);
    if (!user) {
      return next(
        new ErrorResponse("Not authorized to access the resource", 401)
      );
    }
    // @ts-ignore
    req.user = user;
    next();
  } catch (error) {
    // console.log(`reached error`);
    // console.log({ error });
    return next(
      new ErrorResponse("Not authorized to access the resource - error", 401)
    );
  }
});
