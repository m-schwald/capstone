import Image from "../models/image.model.js";
import fileUpload from "express-fileupload";

server.use(fileUpload({ createParentPath: true }));

const uploadImage = (request, response) => {
  const image = request.files.image;
  image.mv("./client/public/products/" + image.name);

  const imageToSave = new Image({ name: image.name });

  imageToSave
    .save()
    .then((savedImage) => response.json(savedImage))
    .catch((error) => response.json(error));
};
export default uploadImage;
