import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  id: { type: String },
  groupName: { type: String },
  image: { type: String },
  members: { type: Number },
  city: { type: String },
  motto: { type: String },
});

const Group = mongoose.model("group", groupSchema);

export default Group;
