import styled from "styled-components";
import { useState } from "react";

import Toggle from "../components/IconToggle";
import Button from "../components/Button";
import H3 from "../components/H3";

import add_image from "../assets/images/add_image.svg";

export default function FormItem({
  submitFunction,
  available,
  onAvailable,
  userId,
  groupId,
}) {
  const initialItem = {
    gadgName: "",
    isAvailable: available,
    image: "",
    description: "",
    category: "",
    size: "",
    facts: "",
    personal_info: "",
    owner_id: { userId },
    group_id: { groupId },
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

  function submitForm(event) {
    event.preventDefault();
    submitFunction(newItem);
    setNewItem(initialItem);
    console.log("submitted", newItem);
  }

  return (
    <ContainerForm onSubmit={submitForm}>
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
          onChange={handleChange}
          value={available}
          available={available}
          onAvailable={onAvailable}
        />
      </Flexbox>
      <AddImg
        name="image"
        src={add_image}
        onChange={handleChange}
        value={newItem.image}
      />
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
          gadg-category
          <Choice
            id="category"
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
          gadg-size
          <Choice id="size">
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
        name="personal_info"
        placeholder="personal preferences for usage"
        rows="2"
        maxlength="100"
        onChange={handleChange}
        value={newItem.personal_info}
      />
      <ButtonCentered type="submit">offer gadg</ButtonCentered>
    </ContainerForm>
  );
}

const ContainerForm = styled.form`
  width: 90%;
  padding: 1.5rem;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-flow: column nowrap;
`;

const InputName = styled.input`
  margin: 0.5rem;
  font-size: 1.2rem;

  &:focus {
    outline: var(--one) 1px solid;
    background: var(--light);
  }
`;

const AddImg = styled.img`
  width: 60%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const InputText = styled.textarea`
  width: 80%;
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
  justify-content: space-around;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const ButtonCentered = styled(Button)`
  width: 30%;
  margin: 0 auto;
`;
