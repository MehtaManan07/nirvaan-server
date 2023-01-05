import crypto from "crypto";
const algorithm = "aes-256-cbc";
const initVector = Buffer.from("CQ5TF6DaEd7av/0YinjoeA==", "base64");
const Securitykey = Buffer.from(
  "yQJMPieg96of4ebBaLxhiZ7fMRyqGuL+fU+Tp7c9a78",
  "base64"
);

const encode = (message: string) => {
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  let encryptedData = cipher.update(message, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
};
const decode = (encryptedData: string) => {
  // the decipher function
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
};

export { encode, decode };
