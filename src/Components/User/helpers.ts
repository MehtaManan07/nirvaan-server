import { NextFunction, Request, Response } from 'express';
import { generateRandomNumber, sendEmailOtp } from './../../utils/email';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { decode, encode } from '../../middlewares/crypt';
import ErrorResponse from '../../middlewares/ErrorResponse';
import Otp from './Otp';
import User from './User';

export const signToken = (data: any, expiresIn: string) => {
  return jwt.sign({ data }, process.env.JWT_SECRET as string, {
    expiresIn,
  });
};
export const generateOTPHelper = async (req: Request, next: NextFunction) => {
  let generatedOtp = generateRandomNumber(1000, 9999);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(req.body.email)) {
    return next(new ErrorResponse(`Please enter a valid email Address`, 400));
  }
  sendEmailOtp(req.body.email, generatedOtp);
  let encrypted = encode(`${generatedOtp}`);
  const otp = await Otp.create({ otpHash: encrypted,email: req.body.email });
  req.body.otp = otp;
};
export const sendTokenResponse = (
  statusCode: number,
  user: any,
  res: Response
) => {
  const token = signToken(user._id, '365d');
  // if (keys.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwtNirvaan', token);

  user.password = undefined;
  res.status(statusCode).json({
    success: true,
    token,
    data: user,
  });
};

// @ts-ignore
export async function generateUniqueUsername(name: String) {
  let username = `${name.split(' ')[0]}${Math.floor(Math.random() * 1000)}`;
  try {
    const user = await User.findOne({ username });
    if (user) {
      return await generateUniqueUsername(name);
    } else {
      return username;
    }
  } catch (error) {
    // console.log({ error });
    return null;
  }
}
export const verifyOTPHelper = async (
  value: string,
  _id: mongoose.Types.ObjectId,
  next: NextFunction
) => {
  const otp = await Otp.findOne({ _id, verified: false });
  if (!otp) {
    return next(
      new ErrorResponse(`The otp is expired, please generate a new one`, 400)
    );
  }
  const decryptedData = decode(otp.otpHash);
  if (value !== decryptedData) {
    return { success: false, email: otp.email } as any;
  } else {
    return { success: true, email: otp.email } as any;
  }
};

export const deleteOtp = async (_id: mongoose.Types.ObjectId) => {
  await Otp.findByIdAndRemove(_id);
};
