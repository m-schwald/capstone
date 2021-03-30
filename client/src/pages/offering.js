import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";

import Button from "../components/Button";
import CardOffering from "../components/CardOffering";
import ContainerFlat from "../components/ContainerFlat";
import H3 from "../components/H3";
import Link from "../components/Link";

import FlexboxRow from "../components/FlexboxRow";

export default function Offering({ available, onAvailable, userId }) {
  const getGadg = async () => {
    const data = await fetch("http://localhost:4000/get-gadg");
    const result = await data.json();
    return result;
  };
  const { isLoading, isError, data, error } = useQuery("allGadges", getGadg);

  const availableItems = data
    ?.filter((item) => item.ownerId === userId)
    .filter((item) => item.isAvailable);
  const remainingItems = data
    ?.filter((item) => item.ownerId === userId)
    .filter((item) => !item.isAvailable);

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
        {isLoading ? (
          <p>is loading... </p>
        ) : isError ? (
          <p>Error: {error.message} </p>
        ) : (
          availableItems?.map((item, index) => (
            <Link key={item._id} to={`/product/${item._id}`}>
              <CardOffering
                key={index}
                item={item}
                available={available}
                onAvailable={() => onAvailable(item)}
                userId={userId}
              />
            </Link>
          ))
        )}
      </Flexbox>
      <Headline text="not available" />
      <Flexbox>
        {isLoading ? (
          <p>is loading... </p>
        ) : isError ? (
          <p>Error: {error.message} </p>
        ) : (
          remainingItems?.map((item, index) => (
            <Link key={item._id} to={`/product/${item._id}`}>
              <CardOffering
                key={index}
                item={item}
                available={available}
                onAvailable={() => onAvailable(item)}
              />
            </Link>
          ))
        )}
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
