import styled from "styled-components";
import { bool } from "prop-types";
import { NavLink } from "react-router-dom";

export default function SideNav({ openNav, setOpenNav }) {
  return (
    <NavContainer openNav={openNav}>
      <Link exact to="./" onClick={() => setOpenNav(!openNav)}>
        home
      </Link>
      <Link to="./dashboard" onClick={() => setOpenNav(!openNav)}>
        gadgboard
      </Link>
      <Link to="./searching" onClick={() => setOpenNav(!openNav)}>
        i need a gadg
      </Link>
      <Link to="./offering" onClick={() => setOpenNav(!openNav)}>
        i got a gadg
      </Link>
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
  color: var(--light);
  background: var(--dark);
  margin: 1rem;
  padding: 0.2rem;
  z-index: 10;
  border-radius: 10px;
  min-width: 80%;
  text-align: center;
  text-decoration: none;
`;

SideNav.propTypes = {
  openNav: bool.isRequired,
};
