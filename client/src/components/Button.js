import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  background: var(--orange);
  color: var(--dark);
  border: none;

  &:hover {
    background: var(--blue);
    color: var(--light);
  }

  &:active {
    background: var(--blue);
    color: var(--light);
  }
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.submit &&
    css`
      width: 30vw;
      margin: 0 auto;
    `};
`;

export default Button;
