import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

import Toggle from "../components/IconToggle";
import Button from "../components/Button";
import FlexboxRow from "./FlexboxRow";

import add_image from "../assets/images/add_image.svg";

export default function FormItem({
  submitFunction,
  onAvailable,
  userId,
  groupId,
}) {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };

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

FormItem.propTypes = {
  onAvailable: PropTypes.func,
  submitFunction: PropTypes.func,
  userId: PropTypes.string,
  groupId: PropTypes.string,
};
