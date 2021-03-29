import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  userName: { type: String },
  image: { type: String },
  phone: { type: String },
  email: { type: String },
  adress: { type: String },
  interests: { type: String },
  motto: { type: String },
  groups: { type: String },
});

const User = mongoose.model("user", userSchema);

export default User;
