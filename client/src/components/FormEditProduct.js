import styled from "styled-components";
import { useState } from "react";
import {
  useHistory,
  useMutation,
  useParams,
  useRouteMatch,
} from "react-router";
import { useQuery } from "react-query";
import axios from "axios";

import Toggle from "./IconToggle";
import Button from "./Button";
import H3 from "./H3";
import FlexboxRow from "./FlexboxRow";

import add_image from "../assets/images/add_image.svg";

export default function FormEditProduct({ submitFunction, onAvailable }) {
  const { path } = useRouteMatch();
  const { _id } = useParams();

  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const [available, setAvailable] = useState(true);

  const getGadg = async () => {
    const data = await fetch("http://localhost:4000/get-gadg/" + _id);
    const result = await data.json();
    return result;
  };

  const { isLoading, isError, data, error } = useQuery("product", getGadg);
  /* 
  const mutation = useMutation((editGadg) =>
    axios.post("http://localhost:4000/get-gadg" + _id, editGadg)
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
  } */
  data ? console.log(data) : console.log("no net");

  const productToEdit = {
    gadgName: data.gadgName,
    isAvailable: data.isAvailable,
    image: data.image,
    description: data.description,
    category: data.category,
    size: data.size,
    facts: data.facts,
    personalInfo: data.personalInfo,
  };
  const [editedItem, setEditedItem] = useState({ productToEdit });

  const handleChange = (event) => {
    const field = event.target;
    const value = field.value;
    setEditedItem({
      ...editedItem,
      [field.name]: value,
    });
  };

  function submitForm(event) {
    event.preventDefault();
    submitFunction(editedItem);
    console.log("submitted", editedItem);
  }

  return (
    <ContainerForm onSubmit={submitForm}>
      <H3 text="edit your gadg" />
      <Flexbox>
        <InputName
          name="gadgName"
          placeholder="gadg-name"
          maxlength="30"
          onChange={handleChange}
          value={editedItem.gadgName}
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
        value={editedItem.image}
      />
      <InputText
        name="description"
        placeholder="please describe your gadg"
        rows="5"
        maxlength="300"
        onChange={handleChange}
        value={editedItem.description}
      />
      <Flexbox>
        <Label htmlFor="category">
          category
          <Choice
            name="category"
            onChange={handleChange}
            value={editedItem.category}
          >
            <option value="snow">snow</option>
            <option value="bike">bike</option>
            <option value="tool">tool</option>
            <option value="car">car</option>
          </Choice>
        </Label>
        <Label htmlFor="size" onChange={handleChange} value={editedItem.size}>
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
        value={editedItem.facts}
      />

      <InputText
        name="personalInfo"
        placeholder="personal preferences for usage"
        rows="2"
        maxlength="100"
        onChange={handleChange}
        value={editedItem.personalInfo}
      />
      <FlexboxRow>
        <Button cancel onClick={goBack}>
          cancel
        </Button>
        <Button>save changes</Button>
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
