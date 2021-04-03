import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

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

const connectionString = "mongodb://localhost:27017/gadg-supply";

const server = express();
server.use(bodyParser.json());
server.use(cors());

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.get("/", (request, response) => {
  response.json({ status: "gadg-server is running" });
});

server.get("/get-gadg", gadgGet);
server.post("/create-gadg", gadgPost);
server.get("/get-gadg/:gadgId", gadgFind);
server.delete("/get-gadg/:gadgId", gadgDelete);
server.put("/get-gadg/:gadgId", gadgChange);

server.get("/get-user", userGet);
server.get("/get-user/:userId", userFind);
server.put("/get-user/:userId", userChange);
server.get("/get-owner/:userId", ownerFind);
server.post("/create-user", userPost);
server.delete("/get-gadg/:userId", userDelete);

server.listen(4000);
