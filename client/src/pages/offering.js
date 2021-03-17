import styled from "styled-components";

import Button from "../components/Button";
import CardOffering from "../components/CardOffering";
import ContainerFlat from "../components/ContainerFlat";

import search from "../assets/images/search.svg";

export default function Offering() {
  return (
    <>
      <ContainerFlat>
        <Button_centered> add new gadg</Button_centered>

        <H3>my offered gadges</H3>
        <Search src={search} />

        <Flexbox>
          <CardOffering>map...</CardOffering>
          <CardOffering>map...</CardOffering>
          <CardOffering>map...</CardOffering>
          <CardOffering>map...</CardOffering>
          <CardOffering>map...</CardOffering>
          <CardOffering>map...</CardOffering>
          <CardOffering>map...</CardOffering>
          <CardOffering>map...</CardOffering>
          <CardOffering>map...</CardOffering>
        </Flexbox>
      </ContainerFlat>
    </>
  );
}

const H3 = styled.h3`
  text-align: center;
  margin: 0 auto;
`;

const Button_centered = styled(Button)`
  width: 30%;
  margin: 1rem auto;
`;

const Flexbox = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Search = styled.img`
  width: 4vw;
  margin: 0 3vw 0 auto;
`;
