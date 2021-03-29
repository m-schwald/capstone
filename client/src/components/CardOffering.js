import styled from "styled-components";
import Image from "../components/Image";

import Container from "./Container";
import Toggle from "./IconToggle";
import snowboard from "../assets/images/snowboard.jpg";

export default function CardOffering({ item, onAvailable }) {
  return (
    <CardContainer>
      <div>
        <ToggleRight available={item.isAvailable} onAvailable={onAvailable} />
        <Img src={snowboard} />
      </div>
      <H4>{item.gadgName}</H4>
    </CardContainer>
  );
}

const ToggleRight = styled(Toggle)`
  position: absolute;
`;

const Img = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  margin: 0 auto;
  z-index: -1;
  border-radius: 0;
  border: var(--one) 2px inset;
`;

const H4 = styled.h4`
  position: absolute;
  top: 70%;
  color: var(--two);
  margin: 0 0.5rem;
  font-size: 0.8rem;
  width: 11ch;
  line-height: 1rem;
  height: 2rem;
  overflow: hidden;
`;

const CardContainer = styled(Container)`
  position: relative;
  width: 25vw;
  margin: 0.5rem;
  background: linear-gradient(var(--dark) 10%, var(--three));
  z-index: -3;
  height: 21vh;
`;
