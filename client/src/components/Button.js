import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: var(--two);
  color: var(--dark);
  border: none;
  transition: ease-in-out all 0.4s;
  min-width: 40%;

  &:hover {
    background: var(--one);
    color: var(--light);
  }

  &:active {
    background: var(--one);
    color: var(--light);
  }
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.cancel &&
    css`
      background: var(--one);
    `};
`;

export default Button;
