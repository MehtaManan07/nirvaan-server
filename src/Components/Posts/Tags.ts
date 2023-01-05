import { Schema, model } from "mongoose";

const tagsSchema = new Schema({
  "Information Technology": [String],
  "Design (UI/UX)": [String],
  Analytics: [String],
  Product: [String],
  Core: [String],
  Phoenix: [String],
  Finance: [String],
});

export const Tags = model("tags", tagsSchema);
