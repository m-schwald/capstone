import styled from "styled-components";
import Image from "../components/Image";

import Container from "./Container";
import Toggle from "./IconToggle";
import snowboard from "../assets/images/snowboard.jpg";

export default function CardOffering() {
  return (
    <CardContainer>
      <ToggleRight />
      <H4>snowboard</H4>

      <Img src={snowboard} />
    </CardContainer>
  );
}

const ToggleRight = styled(Toggle)`
  margin: 0;
`;

const Img = styled(Image)`
  width: 100%;
  margin: 0 auto;
  border-radius: 20%;
`;

const H4 = styled.h4`
  color: var(--two);
  margin: 0;
  font-size: 0.8rem;
`;

const CardContainer = styled(Container)`
  width: 20vw;
`;
