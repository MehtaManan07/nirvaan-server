const AWS = require("aws-sdk");

//function to generate random number
function generateRandomNumber(min: number, max: number) {
  const diff = max - min;
  return Math.floor(Math.random() * diff + min);
}
//function to send OTP using AWS-SNS
export const sendOTP = (mobileNumber: string) => {
  var OTP = generateRandomNumber(1000, 9999);

  var params = {
    Message:
      "Welcome! Your login otp for Nirvaan is " +
      OTP +
      ". Please do not share it with anyone else" /* required */,
    PhoneNumber: mobileNumber,
    MessageAttributes: {
      "AWS.SNS.SMS.SenderID": {
        DataType: "String",
        StringValue: "NirvaanOTP",
      },
    },
  };
  var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();
  publishTextPromise.then((a: any) => {});
  return { data: OTP, success: true };
};
