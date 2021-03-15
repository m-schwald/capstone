import styled from "styled-components";
import user from "../assets/images/user.svg";

export default function IconUser() {
  return <Img src={user} />;
}

const Img = styled.img`
  height: 3vh;
  width: auto;
`;
