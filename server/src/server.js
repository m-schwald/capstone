import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import Gadg from "../models/gadg.model.js";
import { gadgPost } from "../controller/gadg.controller.js";

//import { gadgPost, gadgGet } from "../controller/gadg.controller";

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

server.get("/gadgets", (request, response) => {
  Gadg.find().then((item) => response.json(item));
});

server.post("/create-gadg", gadgPost);

server.listen(4000);
