import { Document, Schema } from "mongoose";
interface IUser extends Document {
  name: String;
  reputation: Number;
  email: String;
  mobileNumber: Number;
  username: String;
  profileImage: String;
  isVerified: Boolean;
  isActive: Boolean;
  password: String;
  savedPosts: [Schema.Types.ObjectId];
  communities: [Schema.Types.ObjectId];
  bio: String;
  socials: {
    Linkedin: String;
    Twitter: String;
    Github: String;
    Behance: String;
    Dribble: String;
  };
  education: [
    {
      undergraduateCollege: {
        instituteName: String;
        startdate: Date;
        enddate: Date;
        degree: String;
        fieldOfStudy: String;
        cgpa: Number;
        description: String;
      };
      postgraduateCollege: {
        instituteName: String;
        startdate: Date;
        enddate: Date;
        degree: String;
        fieldOfStudy: String;
        cgpa: Number;
        description: String;
      };
    }
  ];
  experience: [
    {
      companyName: String;
      title: String;
      status: String;
      startDate: Date;
      endDate: Date;
      salary: Number;
      Description: String;
    }
  ];
}

export default IUser;
