import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const Toggle = ({ onAvailable, available }) => {
  const [state, setState] = useState(available);
  return (
    <Switch>
      <Sign
        onClick={() => {
          setState(!state);
          onAvailable(state);
        }}
        state={!state}
      />
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
  background: ${(props) =>
    props.state === true ? "var(--two)" : "var(--one)"};
  border-radius: 50%;
  box-shadow: var(--dark) 2px 1px 3px;
  margin: 0.3rem 0.5rem 0.3rem auto;
`;

export default Toggle;

Toggle.propTypes = {
  gadg: PropTypes.object,
  available: PropTypes.bool,
  onAvailable: PropTypes.func,
};
