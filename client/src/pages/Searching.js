import styled from "styled-components";

import Container from "../components/Container";
import CardOffering from "../components/CardOffering";

import search from "../assets/images/search.svg";

export default function Searching() {
  return (
    <Container>
      <H3> search for a gadg</H3>
      <Flexbox>
        <InputName placeholder="looking for...?" />
        <Search src={search} />
      </Flexbox>
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
      <Flexbox>
        <CardOffering>map...</CardOffering>
        <CardOffering>map...</CardOffering>
        <CardOffering>map...</CardOffering>
        <CardOffering>map...</CardOffering>
      </Flexbox>
    </Container>
  );
}

const H3 = styled.h3`
  text-align: center;
  margin: 01rem auto;
`;

const InputName = styled.input`
  margin: 0;
  padding: 0.5rem;
  font-size: 1.2rem;

  &:focus {
    outline: var(--orange) 1px solid;
    background: var(--orange2);
  }
`;

const Search = styled.img`
  width: 4vw;
  margin: 0 3vw 0;
`;

const Flexbox = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Choice = styled.select`
  width: 80%;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;