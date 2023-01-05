import { Request, Response } from "express";
import IUser from "../Components/User/types";

export interface IUserReq extends Request {
  user: IUser;
}
export interface IAdvacedResultsRes extends Response {
  advancedResults: any;
}
