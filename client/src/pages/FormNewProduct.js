import { useMutation } from "react-query";
import axios from "axios";
import { useHistory } from "react-router";

import FormItem from "../components/FormItem";

export default function FormNewProduct({ setAvailable, userId, groupId }) {
  const mutation = useMutation((newGadg) =>
    axios.post("http://localhost:4000/create-gadg", newGadg)
  );

  let history = useHistory();

  function addItem(item) {
    mutation.mutate({
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
    });
    console.log(userId);
    history.goBack();
  }

  return (
    <FormItem
      submitFunction={addItem}
      setAvailable={setAvailable}
      userId={userId}
      groupId={groupId}
    />
  );
}
