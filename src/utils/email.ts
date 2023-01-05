import { earlyAccessHtml } from "./htmlTemplates/earlyAccess";
import sgMail from "@sendgrid/mail";
import { otphtml } from "./htmlTemplates/otp";
import { signupHtml } from "./htmlTemplates/signup";
const AWS = require("aws-sdk");

// Amazon SES configuration
const sendEmailAWS = (to: string, HtmlData: string, Subject: string) => {
  const SESConfig = {
    apiVersion: "2010-12-01",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY_ID,
    region: process.env.AWS_REGION,
  };
  var params = {
    Source: "nirvaan@mplus.ai",
    Destination: {
      ToAddresses: [to],
    },
    ReplyToAddresses: ["nirvaan@mplus.ai"],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: HtmlData,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: Subject,
      },
    },
  };

  new AWS.SES(SESConfig)
    .sendEmail(params)
    .promise()
    .then((res: any) => {});
};
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
export function generateRandomNumber(min: number, max: number) {
  const diff = max - min;
  return Math.floor(Math.random() * diff + min);
}
export const sendEmailOtp = (to: string, otp: number) => {
  sendEmailAWS(to, otphtml(otp), `OTP For Nirvaan`);
};

export const sendWelcomeEmail = (to: string, name: string) => {
  sendEmailAWS(to, signupHtml(name), `Welcome to Nirvaan!`);
};

export const sendEarlyAccessEmail = (to: string) => {
  sendEmailAWS(to, earlyAccessHtml, `Glad that you stopped by!`);
};
