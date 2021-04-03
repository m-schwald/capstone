import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";

import Toggle from "../components/IconToggleChange";
import FlexboxRow from "../components/FlexboxRow";
import Button from "../components/Button";

import add_image from "../assets/images/add_image.svg";

export default function EditProduct({ available }) {
  const { _id } = useParams();
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const [gadg, setGadg] = useState({});

  const getGadg = async (id) => {
    const gadg = await fetch("http://localhost:4000/get-gadg/" + id);
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

  const [changedItem, setChangedItem] = useState(gadg);

  useEffect(() => {
    setChangedItem(gadg);
  }, [gadg]);

  const handleChange = (event) => {
    const field = event.target;
    const value = field.value;
    setChangedItem({
      ...changedItem,
      [field.name]: value,
    });
  };
  const imageProduct = gadg?.image ? `/products/${gadg.image}` : `${add_image}`;

  const handleUpdate = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/get-gadg/" + _id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changedItem),
    });
    console.log(await response.json());
    goBack();
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
          onChange={handleChange}
          value={available || ""}
          available={gadg.isAvailable}
          onClick={() => {
            gadg.isAvailable = !gadg.isAvailable;
          }}
        />
      </Flexbox>
      <AddImg
        name="image"
        src={imageProduct}
        onChange={handleChange}
        value={changedItem.image || ""}
      />
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