import styled from "styled-components";
import team from "../assets/images/group.png";

export default function IconGroup() {
  return <Img src={team} />;
}

const Img = styled.img`
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  border: solid black 1px;
`;
