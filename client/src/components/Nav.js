import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks";

import SideNav from "./SideNav";
import Profile from "./Profile";
import Group from "./Group";
import Logo from "./Logo";
import IconUser from "./IconUser";
import IconGroup from "./IconGroup";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);

  const nodeNav = useRef();
  useOnClickOutside(nodeNav, () => setOpenNav(false));

  const nodeProfile = useRef();
  useOnClickOutside(nodeProfile, () => setOpenProfile(false));

  const nodeGroup = useRef();
  useOnClickOutside(nodeGroup, () => setOpenGroup(false));

  return (
    <>
      <Navi>
        <LogoContainer ref={nodeNav}>
          <Logo
            onClick={() => setOpenNav(!openNav)}
            openNav={openNav}
            setOpenNav={setOpenNav}
          />
          <SideNav openNav={openNav} setOpenNav={setOpenNav} />
        </LogoContainer>

        <LinkContainer ref={nodeGroup}>
          <GroupBox
            onClick={() => setOpenGroup(!openGroup)}
            openGroup={openGroup}
          >
            <IconGroup />
            <p>groupname</p>
          </GroupBox>
          <Group openGroup={openGroup} setOpenGroup={setOpenGroup} />
        </LinkContainer>

        <LinkContainer ref={nodeProfile}>
          <GroupBox
            onClick={() => setOpenProfile(!openProfile)}
            openProfile={openProfile}
          >
            <IconUser />
            <p>username</p>
          </GroupBox>
          <Profile openProfile={openProfile} setOpenProfile={setOpenProfile} />
        </LinkContainer>
      </Navi>
    </>
  );
}

const Navi = styled.div`
  background: var(--one);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const GroupBox = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin: 0 auto 0 3vw;
`;
const LinkContainer = styled.div`
  margin: 0 3vw 0 auto;
`;
