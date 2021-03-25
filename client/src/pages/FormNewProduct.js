import FormItem from "../components/FormItem";
import { useState } from "react";

export default function FormNewProduct({
  available,
  setAvailable,
  userId,
  groupId,
}) {
  const [items, setItems] = useState([]);

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
        ownerId: item.ownerId,
        groupId: item.groupId,
      }),
    })
      .then((result) => result.json())
      .then((item) => setItems(item))
      .catch((error) => console.error(error.message));
  };

  return (
    <FormItem
      submitFunction={addItem}
      available={available}
      setAvailable={setAvailable}
      userId={userId}
      groupId={groupId}
    />
  );
}
