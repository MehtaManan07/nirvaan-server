import mongoose from "mongoose";
const connectDB = async () => {
  let mongodbURI: string;
  if (process.env.NODE_ENV === "development") {
    mongodbURI = process.env.MONGO_URI as string;
  } else {
    mongodbURI = process.env.MONGO_URI as string;
  }
  const databaseConnect = await mongoose.connect(mongodbURI);
  console.log(`mongodb connected: ${databaseConnect.connection.host}`);
};

export default connectDB;
