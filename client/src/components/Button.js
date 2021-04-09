import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: var(--two);
  color: var(--dark);
  border: none;
  transition: ease-in-out all 0.4s;
  min-width: 25%;
  font-family: "Edo";
  cursor: pointer;

  &:hover {
    background: var(--one);
    box-shadow: 1px 1px 4px 1px var(--four);
  }

  &:active {
    color: var(--light);
  }

  &:focus {
    outline: none;
    color: var(--light);
  }
  ${(props) =>
    props.cancel &&
    css`
      background: var(--one);
    `};
`;

export default Button;
