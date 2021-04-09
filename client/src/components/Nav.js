import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks";
import PropTypes from "prop-types";
import media from "../mediaSizes";

import SideNav from "./SideNav";
import Profile from "./Profile";
import Group from "./Group";
import Logo from "./Logo";

import team from "../assets/images/group2.png";

export default function Nav({ groupId, setUserId, isStatic, user }) {
  const [openNav, setOpenNav] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);

  const nodeNav = useRef();
  useOnClickOutside(nodeNav, () => setOpenNav(false));

  const nodeProfile = useRef();
  useOnClickOutside(nodeProfile, () => setOpenProfile(false));

  const nodeGroup = useRef();
  useOnClickOutside(nodeGroup, () => setOpenGroup(false));

  const imageUser = user?.image ? `/users/${user.image}` : "";

  return (
    <Navi isStatic={isStatic}>
      <LogoContainer ref={nodeNav}>
        <Logo
          onClick={() => setOpenNav(!openNav)}
          openNav={openNav}
          setOpenNav={setOpenNav}
        />
        <SideNav
          openNav={openNav}
          setOpenNav={setOpenNav}
          setUserId={setUserId}
          user={user}
        />
      </LogoContainer>

      <LinkContainer ref={nodeGroup}>
        <GroupBox
          onClick={() => setOpenGroup(!openGroup)}
          openGroup={openGroup}
        >
          <Icon src={team} />
          <NavText>{groupId}</NavText>
        </GroupBox>
        <Group
          openGroup={openGroup}
          setOpenGroup={setOpenGroup}
          groupId={groupId}
        />
      </LinkContainer>

      <LinkContainer ref={nodeProfile}>
        <GroupBox
          onClick={() => setOpenProfile(!openProfile)}
          openProfile={openProfile}
        >
          <Icon src={imageUser} />
          <NavText>{user.userName}</NavText>
        </GroupBox>
        <Profile
          openProfile={openProfile}
          setOpenProfile={setOpenProfile}
          user={user}
        />
      </LinkContainer>
    </Navi>
  );
}

const Navi = styled.div`
  position: ${(props) => (props.isStatic ? "static" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => (props.isStatic ? "4rem" : "7vh")};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  background: ${(props) => (props.isStatic ? "var(--one)" : "none")};
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
  width: 25%;
  ${media.tablet`
  margin: 0 0 0 auto;
  `}
`;

const NavText = styled.p`
  font-size: 0.8rem;
  ${media.tablet`
     font-size: 1.1rem;
  `}
  ${media.desktop`
  font-size: 1.3rem;
  `}
`;

const Icon = styled.img`
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  border: solid black 1px;
`;

Nav.propTypes = {
  groupId: PropTypes.string,
  setUserId: PropTypes.func,
  isStatic: PropTypes.bool,
  user: PropTypes.object,
};
