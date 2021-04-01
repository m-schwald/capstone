import axios from "axios";
import { useMutation } from "react-query";

import FormEditProduct from "../components/FormEditProduct";

export default function EditProduct({ setAvailable, userId, groupId }) {
  const mutation = useMutation((editGadg) =>
    axios.post("http://localhost:4000/get-gadg", editGadg)
  );

  function editItem(item) {
    mutation.mutate({
      gadgName: item.gadgName,
      isAvailable: item.isAvailable,
      image: item.image,
      description: item.description,
      category: item.category,
      size: item.size,
      facts: item.facts,
      personalInfo: item.personalInfo,
    });
  }

  return (
    <FormEditProduct
      submitFunction={editItem}
      setAvailable={setAvailable}
      userId={userId}
      groupId={groupId}
    />
  );
}
