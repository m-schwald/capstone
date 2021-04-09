import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import media from "../mediaSizes";

import Toggle from "../components/IconToggleChange";
import Button from "../components/Button";
import FlexboxRow from "./FlexboxRow";

import add_image from "../assets/images/add_image.svg";

export default function FormItem({ userId, groupId }) {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  let imageInput = null;
  let available = true;
  const user = userId;
  const group = groupId;

  const initialItem = {
    gadgName: "",
    isAvailable: available,
    image: "",
    description: "",
    category: "",
    size: "",
    facts: "",
    personalInfo: "",
    ownerId: user,
    groupId: group,
  };
  const [newItem, setNewItem] = useState(initialItem);

  const handleChange = (event) => {
    const field = event.target;
    const value = field.value;
    setNewItem({
      ...newItem,
      [field.name]: value,
    });
  };

  async function handleUpdate(event) {
    event.preventDefault();
    console.log(JSON.stringify(newItem));
    const response = await fetch("/create-gadg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    console.log(await response.json());
    history.push(`/offering`);
  }

  const fileUploadHandler = (event) => {
    const url = "/upload";
    const formData = new FormData();

    formData.append("image", event.target.files[0]);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((result) => result.json())
      .then((image) => setNewItem({ ...newItem, image: image.name }))
      .catch((error) => console.error(error.message));
  };

  const removeImage = () => {
    setNewItem({
      ...newItem,
      image: "",
    });
  };

  const onAvailable = (state) => {
    setNewItem({
      ...newItem,
      isAvailable: state,
    });
  };

  return (
    <ContainerForm onSubmit={handleUpdate}>
      <H3 text="add a new gadg" />
      <Flexbox>
        <InputName
          name="gadgName"
          placeholder="gadg-name"
          maxlength="30"
          onChange={handleChange}
          value={newItem.gadgName}
        />
        <Toggle
          name="isAvailable"
          gadg={newItem}
          available={newItem?.isAvailable}
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
      {newItem.image ? (
        <UploadedImage
          src={`/assets/${newItem.image}`}
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
        placeholder="please describe your gadg"
        rows="5"
        maxlength="300"
        onChange={handleChange}
        value={newItem.description}
      />
      <Flexbox>
        <Label htmlFor="category">
          category
          <Choice
            name="category"
            onChange={handleChange}
            value={newItem.category}
          >
            <option value="snow">snow</option>
            <option value="bike">bike</option>
            <option value="tool">tool</option>
            <option value="car">car</option>
          </Choice>
        </Label>
        <Label htmlFor="size" onChange={handleChange} value={newItem.size}>
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
        placeholder="facts about your gadg"
        rows="2"
        maxlength="100"
        onChange={handleChange}
        value={newItem.facts}
      />

      <InputText
        name="personalInfo"
        placeholder="personal preferences for usage"
        rows="2"
        maxlength="100"
        onChange={handleChange}
        value={newItem.personalInfo}
      />
      <FlexboxRow>
        <Button cancel onClick={goBack}>
          cancel
        </Button>
        <Button type="submit">offer gadg</Button>
      </FlexboxRow>
    </ContainerForm>
  );
}

const ContainerForm = styled.form`
  width: 90%;
  padding: 1.5rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  ${media.tablet`
     width: 60%; 
  `}
  ${media.desktop`
     width: 40%; 
  `}
`;

const InputName = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
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
const UploadedImage = styled.img`
  object-fit: contain;
`;

FormItem.propTypes = {
  userId: PropTypes.string,
  groupId: PropTypes.string,
};
