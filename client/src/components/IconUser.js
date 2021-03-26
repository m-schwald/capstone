import styled from "styled-components";
import user from "../assets/images/user.png";

export default function IconUser() {
  return <Img src={user} />;
}

const Img = styled.img`
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  border: solid black 1px;
`;
