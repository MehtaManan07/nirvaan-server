import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    coverImage: {
      type: String,
      required: false,
      default:
        "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg",
    },
    guidelines: [
      {
        title: {
          type: String,
          required: true,
          // trim: true,
        },
        description: {
          type: String,
          required: true,
          // trim: true,
        },
      },
    ],
    createdBy: {
      type: ObjectId, //
      ref: "User",
    },
    admins: [{ type: ObjectId, ref: "User" }],
    members: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

communitySchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "community",
  justOne: false,
});

communitySchema.pre(/^find/, function (next) {
  this.populate("admins", "name username profileImage");
  next();
});
const Community = mongoose.model("Community", communitySchema);
export default Community;
