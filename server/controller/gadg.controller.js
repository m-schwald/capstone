import Gadg from "../models/gadg.model.js";

const gadgGet = (request, response) => {
  Gadg.find().then((item) => response.json(item));
};

const gadgPost = (request, response) => {
  const gadgName = request.body.gadgName;
  const image = request.body.image;
  const isAvailable = request.body.isAvailable;
  const description = request.body.description;
  const category = request.body.category;
  const size = request.body.size;
  const facts = request.body.facts;
  const personalInfo = request.body.personalInfo;
  const ownerId = request.body.ownerId;
  const groupId = request.body.groupId;

  const item = new Gadg({
    gadgName: gadgName,
    image: image,
    isAvailable: isAvailable,
    description: description,
    category: category,
    size: size,
    facts: facts,
    personalInfo: personalInfo,
    ownerId: ownerId,
    groupId: groupId,
  });

  if (gadgName && description) {
    item
      .save()
      .then((item) => response.json(`${item.gadgName} has been added`))
      .catch((error) => response.json(error));
  } else {
    response.json("Please enter name and description");
  }
};

export { gadgGet, gadgPost };
