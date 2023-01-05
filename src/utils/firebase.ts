const admin = require("firebase-admin");
import * as firebaseKeys from "../config/firebaseKeys.json";
admin.initializeApp({
  credential: admin.credential.cert(firebaseKeys),
});

export const notifySingleUser = (
  token: string,
  data: any,
  title: string,
  body: any
) => {
  const message = {
    token,
    data,
    notification: {
      title,
      body,
    },
  };
  admin
    .messaging()
    .send(message)
    .then((response: any) => {
      // Response is a message ID string.
      console.log("Successfully sent message:", response);
    })
    .catch((error: any) => {
      console.log("Error sending message:", error);
    });
};

export const notifyMultipleUsers = (
  tokens: [string],
  data: any,
  title: string,
  body: any
) => {
  const message = {
    tokens,
    data,
    notification: {
      title,
      body,
    },
  };
  admin
    .messaging()
    .sendMultiCast(message)
    .then((response: any) => {
      // Response is a message ID string.
      console.log("Successfully sent message:", response);
    })
    .catch((error: any) => {
      console.log("Error sending message:", error);
    });
};

export default admin;
