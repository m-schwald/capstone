import styled from "styled-components";

import Logo from "./Logo";
import IconUser from "./IconUser";
import IconGroup from "./IconGroup";

export default function Nav() {
  return (
    <Header>
      <Logo />
      <Div>
        <IconGroup />
        <NavLink>groupname</NavLink>
      </Div>
      <Div>
        <IconUser />
        <NavLink>username</NavLink>
      </Div>
    </Header>
  );
}

const Header = styled.div`
  background: var(--orange);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavLink = styled.p`
  font-size: 0.8rem;
  color: white;
`;

const Div = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
`;
