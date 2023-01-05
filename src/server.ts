import app from "./app";
const port = process.env.PORT || 5001;
// const port = 5001;
const server = app.listen(port, () => {
  console.log(
    `🚀 Server ready in ${process.env.NODE_ENV} mode at http://localhost:${port}`
  );
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(`${err}`);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception! 💥 Shutting down...");
  console.log(err);
});
