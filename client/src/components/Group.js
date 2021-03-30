import styled from "styled-components";
import { bool, func } from "prop-types";
import { NavLink } from "react-router-dom";

import IconGroup from "./IconGroup";
import Button from "./Button";
import IconUser from "./IconUser";

export default function Group({ openGroup, setOpenGroup, groupId }) {
  return (
    <NavContainer openGroup={openGroup}>
      <IconGroup />
      <h4> {groupId} </h4>
      <br />
      <p> Berlin</p>
      <p>
        Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Lamb
        pig rooster sheep. . Onion organic orange
      </p>
      <Flexbox>
        <IconUser />
        <IconUser />
        <IconUser />
        <IconUser />
        <IconUser />
      </Flexbox>

      <Button>
        <Link to="/editGroup" onClick={() => setOpenGroup(!openGroup)}>
          edit Group
        </Link>
      </Button>
      <Button onClick={() => setOpenGroup(!openGroup)}>close Group</Button>
    </NavContainer>
  );
}

const Flexbox = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1vw;
  padding: 0.5rem;
`;

const NavContainer = styled.div`
  padding: 3rem 2rem;
  position: absolute;
  background: var(--onetransparent);
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  transform: ${({ openGroup }) =>
    openGroup ? "translateY(0)" : "translateY(-100%)"};

  transition: ease-in-out 0.5s all;
  overflow: hidden;

  IconGroup {
    width: 100%;
  }
`;
const Link = styled(NavLink)`
  color: var(--dark);
  text-align: center;
  text-decoration: none;
`;

Group.propTypes = {
  openGroup: bool.isRequired,
  setOpenGroup: func.isRequired,
};
