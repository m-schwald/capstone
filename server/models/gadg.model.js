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
  personal_info: { type: String },
  owner_id: { type: String },
  group_id: { type: String },
});

const Gadg = mongoose.model("item", gadgSchema);

export default Gadg;
