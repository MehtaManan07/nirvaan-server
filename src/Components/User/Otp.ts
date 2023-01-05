import mongoose, { Schema } from "mongoose";

const OtpSchema = new Schema(
  {
    otpHash: String,
    email: String,

    // expirationTime: Date,
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;
