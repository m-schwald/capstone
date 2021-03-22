import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks";

import SideNav from "./SideNav";
import Profile from "./Profile";
import Group from "./Group";
import Logo from "./Logo";
import IconUser from "./IconUser";
import IconGroup from "./IconGroup";

import navBg from "../assets/images/navBg.png";

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
          <NavText>groupname</NavText>
        </GroupBox>
        <Group openGroup={openGroup} setOpenGroup={setOpenGroup} />
      </LinkContainer>

      <LinkContainer ref={nodeProfile}>
        <GroupBox
          onClick={() => setOpenProfile(!openProfile)}
          openProfile={openProfile}
        >
          <IconUser />
          <NavText>username</NavText>
        </GroupBox>
        <Profile openProfile={openProfile} setOpenProfile={setOpenProfile} />
      </LinkContainer>
      <BG src={navBg} />
    </Navi>
  );
}

const Navi = styled.div`
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
  cursor: pointer;
`;

const LogoContainer = styled.div`
  margin: 0 auto 0 3vw;
  cursor: pointer;
`;
const LinkContainer = styled.div`
  margin: 0 3vw 0 auto;
`;

const BG = styled.img`
  width: 100vw;
  height: auto;
  position: absolute;
  z-index: -1;
  margin-top: 0.5rem;
`;

const NavText = styled.p``;
