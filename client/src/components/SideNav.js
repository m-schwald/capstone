import styled from "styled-components";
import { bool, func } from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function SideNav({ openNav, setOpenNav }) {
  return (
    <NavContainer openNav={openNav}>
      <ButtonNav>
        <Link exact to="/" onClick={() => setOpenNav(!openNav)}>
          home
        </Link>
      </ButtonNav>
      <ButtonNav>
        <Link to="/dashboard" onClick={() => setOpenNav(!openNav)}>
          gadgboard
        </Link>
      </ButtonNav>
      <ButtonNav>
        <Link to="/searching" onClick={() => setOpenNav(!openNav)}>
          i need a gadg
        </Link>
      </ButtonNav>
      <ButtonNav>
        <Link to="/offering" onClick={() => setOpenNav(!openNav)}>
          i got a gadg
        </Link>
      </ButtonNav>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  padding: 3rem 0 0 0;
  position: absolute;
  background: var(--onetransparent);
  top: 0;
  bottom: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: -1;
  transform: ${({ openNav }) =>
    openNav ? "translateX(0)" : "translateX(-100%)"};

  transition: ease-in-out 0.5s all;
`;

const Link = styled(NavLink)`
  color: var(--dark);
  text-align: center;
  text-decoration: none;
`;

const ButtonNav = styled(Button)`
  min-width: 70%;
`;

SideNav.propTypes = {
  openNav: bool.isRequired,
  setOpenNav: func.isRequired,
};
