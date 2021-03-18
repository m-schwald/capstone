import styled from "styled-components";

const H3 = ({ text }) => {
  return <Headline>{text}</Headline>;
};

const Headline = styled.h3`
  text-align: center;
  margin: 1rem auto;
`;

export default H3;
