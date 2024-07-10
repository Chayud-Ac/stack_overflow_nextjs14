import { Schema, model, models, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createOn: Date;
}

const TagSchema = new Schema<ITag>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  createOn: { type: Date, default: Date.now, required: true },
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;

// example data store
// {
//     "_id": "60c72b2f9b1d4c3d88f4c88a",
//     "name": "JavaScript",
//     "description": "A tag for all JavaScript related questions.",
//     "question": ["60c72b2f9b1d4c3d88f4c88b", "60c72b2f9b1d4c3d88f4c88c"],
//     "followers": ["60c72b2f9b1d4c3d88f4c88d", "60c72b2f9b1d4c3d88f4c88e"],
//     "createOn": "2021-06-13T17:30:39.000Z"
//   }
