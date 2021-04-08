import { useHistory } from "react-router";
import PropTypes from "prop-types";

import FormItem from "../components/FormItem";

export default function FormNewProduct({ setAvailable, userId, groupId }) {
  let history = useHistory();

  const addItem = (item) => {
    fetch("http://localhost:4000/create-gadg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: item._id,
        gadgName: item.gadgName,
        isAvailable: item.isAvailable,
        image: item.image,
        description: item.description,
        category: item.category,
        size: item.size,
        facts: item.facts,
        personalInfo: item.personalInfo,
        ownerId: userId,
        groupId: item.groupId,
      }),
    })
      .then((result) => result.json())
      .catch((error) => console.error(error.message));
    history.goBack();
  };

  return (
    <FormItem
      submitFunction={addItem}
      setAvailable={setAvailable}
      userId={userId}
      groupId={groupId}
    />
  );
}

FormNewProduct.propTypes = {
  setAvailable: PropTypes.func,
  userId: PropTypes.string,
  groupId: PropTypes.string,
};
