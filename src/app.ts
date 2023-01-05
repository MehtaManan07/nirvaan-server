import express, { Application } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";
import rateLimit from "express-rate-limit";
import os from "os";
import dotenv from "dotenv";
import database from "./config/database";
import ErrorResponse from "./middlewares/ErrorResponse";
import { errorHandler } from "./middlewares/errorHandler";
import { awsConfig } from "./config/aws";
import { AuthRoutes } from "./Components/User/auth.routes";
import { PostRoutes } from "./Components/Posts/post.routes";
import { cors } from "cors-ts";
import { CommentRoutes } from "./Components/Comments/comment.routes";
import { CommunityRoutes } from "./Components/Communities/community.routes";
import { UserRoutes } from "./Components/User/user.routes";
import { ReplyRoutes } from "./Components/Replies/replies.routes";
import { calculateActionReputation } from "./utils/maths/reputationFunctions";
dotenv.config();

const app: Application = express();
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(
    morgan(
      ":method :url status :status :res[content-length] - :response-time ms"
    )
  );
}
app.use(compression());

const limiter = rateLimit({
  max: 900,
  windowMs: 60 * 60 * 60,
  message: "Too many requests from this IP, please try again in an hour",
});

app.use("/api", limiter);
app.use(express.json());
app.use(cookieParser());
database();
awsConfig();
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/comment", CommentRoutes);
app.use("/api/v1/reply", ReplyRoutes);
app.use("/api/v1/community", CommunityRoutes);
app.use("/api/v1/user", UserRoutes);
app.get("/", async (req, res) => {
  res.json({ host: os.platform() });
});

app.all("*", (req, res, next) => {
  next(new ErrorResponse(` Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);
export default app;
