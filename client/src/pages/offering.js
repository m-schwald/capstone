import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Button from "../components/Button";
import CardOffering from "../components/CardOffering";
import ContainerFlat from "../components/ContainerFlat";
import H3 from "../components/H3";

import search from "../assets/images/search.svg";

export default function Offering({ items, available, onAvailable }) {
  const onShowProduct = (clickedGadg) => {
    console.log(clickedGadg._id);
    console.log("i got clicked");
  };

  return (
    <ContainerFlat>
      <ButtonCentered>
        <StyledLink to="./formNewProduct">add a new gadg</StyledLink>
      </ButtonCentered>

      <H3 text="my offered gadges" />
      <Search src={search} />

      <Flexbox>
        {items.map((item, index) => (
          <CardOffering
            key={index}
            item={item}
            available={available}
            onAvailable={() => onAvailable(item)}
            onClick={onShowProduct}
          />
        ))}
      </Flexbox>
    </ContainerFlat>
  );
}

const ButtonCentered = styled(Button)`
  margin: 1rem auto;
`;

const Flexbox = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Search = styled.img`
  width: 4vw;
  margin: 0 3vw 0 auto;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--dark);
`;
