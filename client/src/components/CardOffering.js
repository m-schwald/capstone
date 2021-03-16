import styled from "styled-components";

import Container from "./Container";
import Toggle from "./IconToggle";
import snowboard from "../assets/images/snowboard.jpg";
import FlexboxRow from "./FlexboxRow";

export default function CardOffering() {
  return (
    <CardContainer>
      <FlexboxRow>
        <H4>snowboard</H4>
        <Toggle />
      </FlexboxRow>
      <Img src={snowboard} />
    </CardContainer>
  );
}

const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  border-radius: 5%;
`;

const H4 = styled.h4`
  color: var(--two);
  margin: 0;
`;

const CardContainer = styled(Container)`
  width: 40vw;
`;
