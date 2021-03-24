import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import Gadg from "../models/gadg.model.js";
import { gadgPost, gadgFind } from "../controller/gadg.controller.js";

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

server.get("/get-gadg", (request, response) => {
  Gadg.find().then((item) => response.json(item));
});

server.post("/create-gadg", gadgPost);
server.get("/get-gadg/:gadgId", gadgFind);

server.listen(4000);
