import styled from "styled-components";
import { bool } from "prop-types";

export default function SideNav({ openNav }) {
  return (
    <NavContainer openNav={openNav}>
      <Link> Link 1 </Link>
      <Link> Link 2 </Link>
      <Link> Link 3 </Link>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  padding: 3rem 0 0 0;
  position: absolute;
  background: var(--one);
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

const Link = styled.h3`
  color: var(--light);
  background: var(--dark);
  margin: 1rem;
  padding: 0.2rem 5rem;
  z-index: 10;
  border-radius: 10px;
`;

SideNav.propTypes = {
  openNav: bool.isRequired,
};
