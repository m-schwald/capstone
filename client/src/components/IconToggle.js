import styled from "styled-components";

import toggle_on from "../assets/images/toggle-on.svg";
//import toggle_off from "../assets/images/toggle-off.svg";

export default function Toggle() {
  return <Img src={toggle_on} />;
}

const Img = styled.img`
  width: 5vw;
  height: auto;
`;
