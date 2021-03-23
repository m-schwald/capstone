import styled from "styled-components";

import Toggle from "../components/IconToggle";
import Button from "../components/Button";
import H3 from "../components/H3";

import add_image from "../assets/images/add_image.svg";

export default function FormItem() {
  /*   function onCreateItem(event) {
    event.preventDefault();
    const form = event.target;
    const inputGadgName = form.gadgName;
    onCreateItem(inputGadgName.value);
    form.reset();
    inputGadgName.focus();
  } */

  return (
    <ContainerForm>
      <H3 text="add a new gadg" />
      <Flexbox>
        <InputName name="gadgName" placeholder="gadg-name" maxlength="30" />
        <Toggle />
      </Flexbox>
      <AddImg src={add_image} />
      <InputText
        placeholder="please describe your gadg"
        rows="5"
        maxlength="300"
      />
      <Flexbox>
        <Label htmlFor="choose_category">
          gadg-category
          <Choice id="choose_category">
            <option value="snow">snow</option>
            <option value="bike">bike</option>
            <option value="tool">tool</option>
            <option value="car">car</option>
          </Choice>
        </Label>
        <Label htmlFor="choose_size">
          gadg-size
          <Choice id="choose_size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </Choice>
        </Label>
      </Flexbox>
      <InputText placeholder="facts about your gadg" rows="2" maxlength="100" />

      <InputText
        placeholder="personal preferences for usage"
        rows="2"
        maxlength="100"
      />
      <ButtonCentered>offer gadg</ButtonCentered>
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
