import styled from "styled-components";

export default function IconUser({ imageUser }) {
  return <Img src={imageUser} />;
}

const Img = styled.img`
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  border: solid black 1px;
`;
