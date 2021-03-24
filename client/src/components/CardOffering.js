import styled from "styled-components";
import Image from "../components/Image";

import Container from "./Container";
import Toggle from "./IconToggle";
import snowboard from "../assets/images/snowboard.jpg";

export default function CardOffering({ item, onAvailable }) {
  return (
    <CardContainer>
      <ToggleRight available={item.isAvailable} onAvailable={onAvailable} />
      <H4>{item.gadgName}</H4>
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
  white-space: nowrap;
  overflow: hidden;
`;

const CardContainer = styled(Container)`
  width: 20vw;
  margin: 0 3vw;
`;
