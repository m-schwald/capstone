import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import path from "path";
import { dirname } from "./pathHelpers.js";

import {
  gadgPost,
  gadgFind,
  gadgDelete,
  gadgGet,
  gadgChange,
} from "../controller/gadg.controller.js";
import {
  userDelete,
  userGet,
  userPost,
  userFind,
  ownerFind,
  userChange,
} from "../controller/user.controller.js";

const __dirname = dirname(import.meta.url);
dotenv.config();

const server = express();
server.use(bodyParser.json());
server.use(cors());
server.use(fileUpload({ createParentPath: true }));

const DB_CONNECTION = process.env.DB_CONNECTION;
//|| "mongodb://localhost:27017/gadg-supply";
//const connectionString = DB_CONNECTION;

mongoose.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

/* server.get("/", (request, response) => {
  response.json({ status: "gadg-server is running" });
}); */

server.get("/gadg", gadgGet);
server.post("/create-gadg", gadgPost);
server.get("/gadg/:gadgId", gadgFind);
server.delete("/gadg/:gadgId", gadgDelete);
server.put("/gadg/:gadgId", gadgChange);

server.get("/user", userGet);
server.get("/user/:userId", userFind);
server.put("/user/:userId", userChange);
server.get("/owner/:userId", ownerFind);
server.post("/create-user", userPost);
server.delete("/gadg/:userId", userDelete);

server.post("/upload", async (request, response) => {
  const image = request.files.image;

  try {
    image.mv("./server/public/assets/" + image.name);
    response.json(image);
  } catch (error) {
    response.json("image could not be uploaded");
  }
});

server.use(express.static("./server/public/"));
server.use(express.static(path.join(__dirname, "../../client/build")));

server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server listens on port ${port}.`));
