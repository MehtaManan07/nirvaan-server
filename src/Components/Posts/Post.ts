import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    author: {
      type: ObjectId,
      ref: "User",
    },
    community: {
      type: ObjectId,
      ref: "Community",
    },
    tags: [String],
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

postSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "post",
  localField: "_id",
});
postSchema.virtual("commentCount", {
  ref: "Comment",
  foreignField: "post",
  localField: "_id",
  count: true,
});

// Cascade delete comments when a post is deleted
postSchema.pre("remove", async function (next) {
  console.log(`Comments being removed from post`);
  await this.model("Comment").deleteMany({ post: this._id });
  next();
});

postSchema.pre(/^find/, function (next) {
  this.sort("-createdAt");
  this.populate("commentCount");
  this.populate("author", "name profileImage reputation");
  next();
});

const Post = mongoose.model("Post", postSchema);
export default Post;
