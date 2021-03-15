import styled from "styled-components";
import team from "../assets/images/team.svg";

export default function IconGroup() {
  return <Img src={team} />;
}

const Img = styled.img`
  height: 3vh;
  width: auto;
`;
