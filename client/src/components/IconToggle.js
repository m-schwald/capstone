import styled from "styled-components";

const Toggle = ({ available, onAvailable }) => {
  return (
    <Switch onClick={onAvailable}>
      <Sign state={available ? "var(--two)" : "var(--one)"} />
    </Switch>
  );
};

const Switch = styled.label`
  width: auto;
  height: 1rem;
`;

const Sign = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  background: ${(props) => props.state};
  border-radius: 50%;
  box-shadow: var(--dark) 2px 1px 3px;
  margin: 0.3rem 0.3rem 0.3rem auto;
`;

export default Toggle;
