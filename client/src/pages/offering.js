import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../components/Button";
import CardOffering from "../components/CardOffering";
import ContainerFlat from "../components/ContainerFlat";
import Link from "../components/Link";
import { useEffect, useState } from "react";

export default function Offering({ available, userId, gadges }) {
  const [items, setItems] = useState(gadges);

  useEffect(() => {
    fetch("http://localhost:4000/gadg")
      .then((response) => response.json())
      .then((gadges) => setItems(gadges));
  }, []);

  const availableItems = items
    ?.filter((item) => item.ownerId === userId)
    .filter((item) => item.isAvailable);
  const remainingItems = items
    ?.filter((item) => item.ownerId === userId)
    .filter((item) => !item.isAvailable);

  return (
    <ContainerFlat>
      <ButtonCentered>
        <StyledLink to="./newProduct"> add a new gadg</StyledLink>
      </ButtonCentered>
      <H3> available </H3>
      <Flexbox>
        {availableItems?.map((item, index) => (
          <Link key={item._id} to={`/product/${item._id}`}>
            <CardOffering
              key={index}
              item={item}
              available={available}
              userId={userId}
            />
          </Link>
        ))}
      </Flexbox>
      <H3>not available </H3>
      <Flexbox>
        {remainingItems?.map((item, index) => (
          <Link key={item._id} to={`/product/${item._id}`}>
            <CardOffering key={index} item={item} available={available} />
          </Link>
        ))}
      </Flexbox>
    </ContainerFlat>
  );
}

const ButtonCentered = styled(Button)`
  margin: 1rem auto;
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
const H3 = styled.h3`
  text-align: center;
  margin: 0;
  padding: 0;
`;

Offering.propTypes = {
  available: PropTypes.bool,
  userId: PropTypes.string,
  gadges: PropTypes.any,
};
