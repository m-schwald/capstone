import styled from "styled-components";
import { useRouteMatch, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Container from "../components/Container";
import Toggle from "../components/IconToggle";
import IconUser from "../components/IconUser";
import FlexboxRow from "../components/FlexboxRow";
import Image from "../components/Image";
import H3 from "../components/H3";

import snowboard from "../assets/images/snowboard.jpg";

export default function Product() {
  const { path } = useRouteMatch();
  const { _id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/get-gadg/" + _id)
      .then((result) => result.json())
      .then((item) => setItem(item))
      .catch((error) => console.error(error.message));
  }, []);

  console.log(item);

  return item ? (
    <Container>
      <FlexboxRow>
        <H3 text={item.gadgName} />
        <Toggle />
      </FlexboxRow>
      <Img src={snowboard} />
      <FlexboxRow>
        <FlexboxColumn>
          <IconUser />
          <p>username</p>
          <p>
            Size: <br /> 168cm
          </p>
          <p>
            category:
            <br /> Snow
          </p>
        </FlexboxColumn>
        <Description>{item.description}</Description>
      </FlexboxRow>
    </Container>
  ) : null;
}

const Img = styled(Image)`
  /* border: outset darkgrey 2px; */
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  border-radius: 5%;
`;

const FlexboxColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0 auto;

  & p {
    padding: 0.5rem;
    margin: 0;
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 0.8rem;
  padding: 0 0 0 0.5rem;
  border-left: solid var(--orange) 1px;
`;
