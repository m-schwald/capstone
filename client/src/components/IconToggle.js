import styled from "styled-components";
//import { useState } from "react";

//import toggle_on from "../assets/images/toggle-on.svg";
//import toggle_off from "../assets/images/toggle-off.svg";

const Toggle = ({ available, onAvailable }) => {
  return (
    <Switch onClick={onAvailable}>
      <Sign state={available ? "var(--one)" : "var(--two)"} />
    </Switch>
  );
};

const Switch = styled.label`
  width: 100%;
  height: 1rem;
`;

const Sign = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  background: ${(props) => props.state};
  border-radius: 50%;
  box-shadow: var(--dark) 2px 1px 3px;
  margin: 0 0 0 auto;
`;

export default Toggle;
