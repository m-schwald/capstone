import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  background: #e0e0e0;
  color: black;

  &:hover {
    background: var(--dark);
    color: var(--light);
  }

  &:active {
    background: var(--dark);
    color: var(--light);
  }
  &:target {
    border: hotpink;
  }

  ${(props) =>
    props.primary &&
    css`
      width: 30vw;
      margin: 0 auto;
    `};
`;

export default Button;
