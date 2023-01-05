import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { awsConfig } from "../config/aws";
import dotenv from "dotenv";

dotenv.config();
const s3 = new aws.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_KEY_ID || "",
  },
});

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_NAME || "",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    serverSideEncryption: "AES256",
    acl: "public-read",
    key: function (req, file: Express.Multer.File, done: any) {
      const fileName: string = `${Date.now().toString()}-${file.originalname}`;
      done(null, fileName);
    },
  }),
});
export const deleteImage = async (filename: string) => {
  await s3.deleteObject({
    Bucket: process.env.AWS_BUCKET_NAME || "",
    Key: filename,
  });
};
