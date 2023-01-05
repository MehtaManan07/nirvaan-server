import IUser from "./types";
import mongoose, { Schema, Model, model, Document } from "mongoose";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please provide name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email."],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "The value of path {PATH} ({VALUE}) is not a valid email id.",
      ],
      unique: true,
    },
    mobileNumber: {
      type: Number,
      required: [true, "Please provide a mobile number."],
      match: [
        /^(\+\d{1,3}[- ]?)?\d{10}$/,
        "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
      ],
      unique: true,
    },
    reputation: {
      type: Number,
      default: 10,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    profileImage: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    bio: String,
    communities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Community",
      },
    ],
    socials: {
      Linkedin: String,
      Twitter: String,
      Github: String,
      Behance: String,
      Dribble: String,
    },
    education: [
      {
        undergraduateCollege: {
          instituteName: String,
          startdate: Date,
          enddate: Date,
          degree: String,
          fieldOfStudy: String,
          cgpa: Number,
          description: String,
        },
        postgraduateCollege: {
          instituteName: String,
          startdate: Date,
          enddate: Date,
          degree: String,
          fieldOfStudy: String,
          cgpa: Number,
          description: String,
        },
      },
    ],
    experience: [
      {
        companyName: String,
        title: String,
        status: String,
        startDate: Date,
        endDate: Date,
        salary: Number,
        Description: String,
      },
    ],
    savedPosts: [{ type: Schema.Types.ObjectId, ref: "Post", default: [] }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual populate
userSchema.virtual("posts", {
  ref: "Post",
  foreignField: "author",
  localField: "_id",
});

const User: Model<IUser> = model("User", userSchema);

export default User;
