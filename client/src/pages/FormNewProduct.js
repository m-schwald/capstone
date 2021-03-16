import styled from "styled-components";

import Container from "../components/Container";
import FlexboxRow from "../components/FlexboxRow";
import Toggle from "../components/IconToggle";
import Button from "../components/Button";

import add_image from "../assets/images/add_image.svg";

export default function FormNewProduct() {
  return (
    <Container>
      <H3> add a new gadg </H3>
      <FlexboxRow>
        <InputName placeholder="gadg-name" maxlength="30" />
        <Toggle />
      </FlexboxRow>
      <AddImg src={add_image} />
      <InputText
        placeholder="please describe your gadg"
        rows="5"
        maxlength="300"
      />
      <Flexbox>
        <Label for="choose_category">
          gadg-category
          <Choice id="choose_category">
            <option value="snow">snow</option>
            <option value="bike">bike</option>
            <option value="tool">tool</option>
            <option value="car">car</option>
          </Choice>
        </Label>
        <Label for="choose_size">
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
      <Button_centered>offer gadg</Button_centered>
    </Container>
  );
}

const H3 = styled.h3`
  text-align: center;
`;

const InputName = styled.input`
  margin: 0;
  font-size: 1.2rem;

  &:focus {
    outline: var(--orange) 1px solid;
    background: var(--orange2);
  }
`;

const AddImg = styled.img`
  width: 80%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const InputText = styled.textarea`
  width: 80%;
  margin: 0.5rem auto;
  padding: 0.5rem;

  &:focus {
    outline: var(--orange) 1px solid;
    background: var(--orange2);
  }
`;

const Choice = styled.select`
  width: 80%;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const Button_centered = styled(Button)`
  width: 30%;
  margin: 0 auto;
`;
