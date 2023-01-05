import { sendWelcomeEmail } from './../../utils/email';
import { asyncHandler } from '../../middlewares/async';
import ErrorResponse from '../../middlewares/ErrorResponse';
import User from './User';
import {
  deleteOtp,
  generateUniqueUsername,
  sendTokenResponse,
  signToken,
  verifyOTPHelper,
  generateOTPHelper,
} from './helpers';

export const generateOTP = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  req.body.otp = {};
  let isNew: Boolean = true;
  const user = await User.findOne({ email });
  if (user || (req.body.from && req.body.from === 'earlyAccess')) {
    isNew = user ? false : true;
    await generateOTPHelper(req, next);
  }
  res
    .status(200)
    .json({ data: { _id: req.body.otp._id, isNew }, success: true });
});

export const verifyOTP = asyncHandler(async (req, res, next) => {
  const { value, _id } = req.body;
  const response: any = await verifyOTPHelper(value, _id, next);
  if (!response.success) {
    return next(new ErrorResponse(`The OTP entered is incorrect`, 400));
  }
  const token = signToken(response.email, '20m');
  res.status(200).json({ success: true, data: { token } });
  setTimeout(() => deleteOtp(_id), 0);
});

export const verifyOtpAndLogin = asyncHandler(async (req, res, next) => {
  const { email, value, _id } = req.body;
  const { success } = await verifyOTPHelper(value, _id, next);

  if (!success) {
    return next(new ErrorResponse(`The OTP entered is incorrect`, 400));
  }
  const user = await User.findOne({ email }).populate([
    { path: 'communities', select: '-id' },
    { path: 'posts', select: '-id' },
  ]);
  if (!user) {
    return next(new ErrorResponse(`No user with that email exists`, 404));
  }
  sendTokenResponse(200, user, res);
  setTimeout(() => deleteOtp(_id), 0);
});

export const registerUser = asyncHandler(async (req, res, next) => {
  const { mobileNumber, name, email, value, _id } = req.body;
  const { success } = await verifyOTPHelper(value, _id, next);

  if (!success) {
    return next(new ErrorResponse(`The OTP entered is incorrect`, 400));
  }
  let uri;
  if (req.file) {
    // improve later
    let file: any = req.file;
    uri = file.location;
  } else {
    uri = `https://media.istockphoto.com/vectors/man-icon-black-icon-person-symbol-vector-id1332100919?b=1&k=20&m=1332100919&s=170667a&w=0&h=tdI7XBXQ-Yja7laUteg0v82VG6FqLlQR9TG0Ag6vyvA=`;
  }
  const username = await generateUniqueUsername(name);
  const user = await User.create({
    name,
    email,
    mobileNumber,
    username,
    profileImage: uri,
  });
  sendTokenResponse(201, user, res);
  setTimeout(() => {
    sendWelcomeEmail(email, name);
  }, 0);
});
