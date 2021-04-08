import User from "../models/user.model.js";

const userGet = (request, response) => {
  User.find().then((person) => response.json(person));
};

const userPost = (request, response) => {
  const userName = request.body.userName;
  const image = request.body.image;
  const phone = request.body.phone;
  const email = request.body.email;
  const adress = request.body.adress;
  const interests = request.body.interests;
  const motto = request.body.motto;
  const groups = request.body.groups;

  const person = new User({
    userName: userName,
    image: image,
    phone: phone,
    email: email,
    adress: adress,
    interests: interests,
    motto: motto,
    groups: groups,
  });

  if (userName && phone) {
    person
      .save()
      .then((person) => response.json(`${person.userName} has been added`))
      .catch((error) => response.json(error));
  } else {
    response.json("Please enter name and phonenumber");
  }
};

const userFind = (request, response) => {
  const userId = request.params.userId;
  User.findOne({ _id: userId })
    .then((person) => response.json(person))
    .catch(() => response.json("could not find the person you're looking for"));
};
const ownerFind = (request, response) => {
  const userId = request.params.userId;
  User.findOne({ _id: userId })
    .then((person) => response.json(person))
    .catch(() => response.json("could not find the person you're looking for"));
};

const userDelete = (request, response) => {
  const userId = request.params.userId;
  User.findOneAndDelete({ _id: userId })
    .then((person) =>
      response.json(`${person.userName} was removed from our database.`)
    )
    .catch(() => response.json("could not find the person you're looking for"));
};

const userChange = (request, response) => {
  const userId = request.params.userId;
  const userName = request.body.userName;
  const image = request.body.image;
  const phone = request.body.phone;
  const email = request.body.email;
  const adress = request.body.adress;
  const interests = request.body.interests;
  const motto = request.body.motto;
  const groups = request.body.groups;

  User.updateOne(
    { _id: userId },
    {
      userName: userName,
      image: image,
      phone: phone,
      email: email,
      adress: adress,
      interests: interests,
      motto: motto,
      groups: groups,
    },
    (error, result) => {
      if (error) response.json(error);
      response.json(result);
    }
  );
};

export { userGet, userPost, userFind, userDelete, ownerFind, userChange };
