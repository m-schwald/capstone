import styled from "styled-components";

const Button = styled.button`
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: var(--two);
  color: var(--dark);
  border: none;
  transition: ease-in-out all 0.4s;
  width: fit-content;

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
`;

export default Button;
