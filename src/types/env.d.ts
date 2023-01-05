import { IUser } from "../Components/User/User";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      APP_COOKIE: string;
      JWT_SECRET: string;
      RATE_LIMIT_REQUESTS_DEV: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_KEY_ID: string;
      AWS_REGION: string;
      AWS_BUCKET_NAME: string;
      // CRYPT_IV: string;
      // CRYPT_ALGO: string;
      // CRYPT_SECURITY_KEY: string;
    }
  }
}
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
