import { useHistory } from "react-router";

import FormEditProduct from "../components/FormEditProduct";
import Button from "../components/Button";

export default function EditProduct({ setAvailable, userId, groupId }) {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <FormEditProduct
        //submitFunction={addItem}
        setAvailable={setAvailable}
        userId={userId}
        groupId={groupId}
      />
      <Button cancel onClick={goBack}>
        cancel
      </Button>
      <Button />
    </>
  );
}
