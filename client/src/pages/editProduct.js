/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";

import Toggle from "../components/IconToggleChange";
import FlexboxRow from "../components/FlexboxRow";
import Button from "../components/Button";

import add_image from "../assets/images/add_image.svg";

export default function EditProduct() {
  const { _id } = useParams();
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const [gadg, setGadg] = useState({});
  const [changedItem, setChangedItem] = useState({});

  let imageInput = null;

  const getGadg = async (id) => {
    const gadg = await fetch("http://localhost:4000/gadg/" + id);
    const result = await gadg.json();
    return result;
  };
  const loadGadg = async (gadgId) => {
    const gadg = await getGadg(gadgId);
    setGadg(gadg);
  };

  useEffect(() => {
    loadGadg(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    loadGadg(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setChangedItem]);

  useEffect(() => {
    setChangedItem(gadg);
  }, [gadg]);

  // console.log({ gadg });
  // console.log({ changedItem });

  const handleChange = (event) => {
    const field = event.target;
    const value = field.value;
    setChangedItem({
      ...changedItem,
      [field.name]: value,
    });
  };

  async function handleUpdate(event) {
    if (changedItem !== gadg) {
      event.preventDefault();
      console.log(JSON.stringify(changedItem));
      const response = await fetch("http://localhost:4000/gadg/" + _id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changedItem),
      });
      console.log(await response.json());
      goBack();
    } else {
      console.log({ changedItem });
      history.push(`/product/${_id}`);
    }
  }

  const fileUploadHandler = (event) => {
    const url = "http://localhost:4000/upload";
    const formData = new FormData();

    formData.append("image", event.target.files[0]);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((result) => result.json())
      .then((image) => setChangedItem({ ...changedItem, image: image.name }))
      .catch((error) => console.error(error.message));
  };

  const removeImage = () => {
    setChangedItem({
      ...changedItem,
      image: "",
    });
  };

  const onAvailable = (state) => {
    setChangedItem({
      ...changedItem,
      isAvailable: state,
    });
  };

  return (
    <ContainerForm onSubmit={handleUpdate}>
      <H3>edit your gadg</H3>
      <Flexbox>
        <InputName
          name="gadgName"
          maxlength="30"
          onChange={handleChange}
          value={changedItem.gadgName || ""}
        />
        <Toggle
          name="isAvailable"
          gadg={gadg}
          available={changedItem?.isAvailable}
          onAvailable={onAvailable}
        />
      </Flexbox>

      <input
        type="file"
        name="image"
        placeholder="Add image"
        onChange={fileUploadHandler}
        style={{ display: "none" }}
        ref={(input) => (imageInput = input)}
      />
      {changedItem.image ? (
        <img
          src={`http://localhost:4000/assets/${changedItem.image}`}
          width="auto"
          height="100"
          alt="productImage"
        />
      ) : (
        <img src={add_image} width="auto" height="100" alt="productImage" />
      )}
      <ImageWrapper>
        <ImageButton type="button" onClick={() => imageInput.click()}>
          choose image
        </ImageButton>
        <ImageButton onClick={removeImage} type="button">
          Remove Image
        </ImageButton>
      </ImageWrapper>

      <InputText
        name="description"
        rows="5"
        maxlength="300"
        onChange={handleChange}
        value={changedItem.description || ""}
      />
      <Flexbox>
        <Label htmlFor="category">
          category
          <Choice
            name="category"
            onChange={handleChange}
            value={changedItem.category || ""}
          >
            <option value="snow">snow</option>
            <option value="bike">bike</option>
            <option value="tool">tool</option>
            <option value="car">car</option>
          </Choice>
        </Label>
        <Label
          htmlFor="size"
          onChange={handleChange}
          value={changedItem.size || ""}
        >
          size
          <Choice name="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </Choice>
        </Label>
      </Flexbox>
      <InputText
        name="facts"
        rows="2"
        maxlength="100"
        onChange={handleChange}
        value={changedItem.facts || ""}
      />

      <InputText
        name="personalInfo"
        rows="2"
        maxlength="100"
        onChange={handleChange}
        value={changedItem.personalInfo || ""}
      />
      <FlexboxRow>
        <Button type="button" cancel onClick={goBack}>
          cancel
        </Button>
        <Button type="submit">submit changes</Button>
      </FlexboxRow>
    </ContainerForm>
  );
}

const ContainerForm = styled.form`
  width: 90%;
  padding: 1.5rem;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-flow: column nowrap;

  img {
    object-fit: contain;
  }
`;

const InputName = styled.input`
  margin: 0.5rem;
  font-size: 1.2rem;

  &:focus {
    outline: var(--one) 1px solid;
    background: var(--light);
  }
`;

const InputText = styled.textarea`
  width: 100%;
  margin: 0.5rem auto;
  padding: 0.5rem;

  &:focus {
    outline: var(--one) 1px solid;
    background: var(--light);
  }
`;

const Choice = styled.select`
  width: 80%;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const H3 = styled.h3`
  margin: 1rem auto;
`;

const ImageWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const ImageButton = styled(Button)`
  outline: none;
  cursor: pointer;
  font-size: 0.7rem;
`;
