import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Comment cannot be empty"],
    },
    author: {
      type: ObjectId,
      ref: "User",
      required: [true, "Comment must belong to a user"],
    },
    post: {
      type: ObjectId,
      ref: "Post",
      required: [true, "Comment must belong to a post"],
    },
    upvotes: [{ type: ObjectId, ref: "User" }],
    downvotes: [{ type: ObjectId, ref: "User" }],
    reports: [{ type: ObjectId, ref: "User", default: [] }],
    voteCount: {
      type: Number,
      default: 0,
    },
    voteRatio: {
      type: Number,
      default: 0,
    },
    reputation: {
      type: Number,
      default: 0,
    },
    normalizedReputation: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

commentSchema.virtual("replies", {
  ref: "Reply",
  foreignField: "comment",
  localField: "_id",
});
commentSchema.virtual("replyCount", {
  ref: "Reply",
  foreignField: "comment",
  localField: "_id",
  count: true,
});

commentSchema.pre(/^find/, function (next: any) {
  // @ts-ignore
  this.populate("author", "name username profileImage");
  this.populate("replyCount");
  this.sort("-createdAt");
  next();
});

export const Comment = mongoose.model("Comment", commentSchema);
