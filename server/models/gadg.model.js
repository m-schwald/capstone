import mongoose from "mongoose";

const gadgSchema = new mongoose.Schema({
  id: { type: String },
  gadgName: { type: String },
  isAvailable: { type: Boolean },
  image: { type: String },
  description: { type: String },
  category: { type: String },
  size: { type: String },
  facts: { type: String },
  personalInfo: { type: String },
  ownerId: { type: String },
  groupId: { type: String },
});

const Gadg = mongoose.model("item", gadgSchema);

export default Gadg;
