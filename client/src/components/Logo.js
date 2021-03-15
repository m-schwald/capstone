import styled from "styled-components";
import logo from "../assets/images/logo.svg";

export default function Logo() {
  return <Img src={logo} />;
}

const Img = styled.img`
  height: 3vh;
  width: auto;
  margin: 0 auto 0 3vw;
`;
