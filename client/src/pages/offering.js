import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Button from "../components/Button";
import CardOffering from "../components/CardOffering";
import ContainerFlat from "../components/ContainerFlat";
import H3 from "../components/H3";

import FlexboxRow from "../components/FlexboxRow";

export default function Offering({ items, available, onAvailable }) {
  const availableItems = items.filter((item) => item.isAvailable);
  const remainingItems = items.filter((item) => !item.isAvailable);

  return (
    <ContainerFlat>
      <FlexboxRow>
        <Headline text="my offered gadges" />
        <ButtonCentered>
          <StyledLink to="./formNewProduct"> add a new gadg</StyledLink>
        </ButtonCentered>
      </FlexboxRow>

      <Headline text="available" />
      <Flexbox>
        {availableItems.map((item, index) => (
          <CardOffering
            key={index}
            item={item}
            available={available}
            onAvailable={() => onAvailable(item)}
          />
        ))}
      </Flexbox>
      <Headline text="not available" />
      <Flexbox>
        {remainingItems.map((item, index) => (
          <CardOffering
            key={index}
            item={item}
            available={available}
            onAvailable={() => onAvailable(item)}
          />
        ))}
      </Flexbox>
    </ContainerFlat>
  );
}

const ButtonCentered = styled(Button)`
  margin: 1rem auto;
`;
const Headline = styled(H3)`
  margin: 0;
  padding: 0;
`;

const Flexbox = styled.div`
  padding: 0 0 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--dark);
`;
