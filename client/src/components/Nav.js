import styled from "styled-components";

import Logo from "./Logo";
import IconUser from "./IconUser";
import IconGroup from "./IconGroup";

export default function Nav() {
  return (
    <Header>
      <Logo />
      <GroupBox>
        <IconGroup />
        <NavLink>groupname</NavLink>
      </GroupBox>
      <GroupBox>
        <IconUser />
        <NavLink>username</NavLink>
      </GroupBox>
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
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled.p`
  font-size: 0.8rem;
  color: white;
`;

const GroupBox = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
  margin: 0 3vw;
`;
