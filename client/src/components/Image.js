import styled from "styled-components";

const Image = styled.img`
  border-radius: 10%;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Image;
