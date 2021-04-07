import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks";
import PropTypes from "prop-types";

import SideNav from "./SideNav";
import Profile from "./Profile";
import Group from "./Group";
import Logo from "./Logo";
import IconUser from "./IconUser";
import IconGroup from "./IconGroup";

export default function Nav({ user, groupId, setUserId }) {
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
    <Navi>
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
          <IconGroup />
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
          <IconUser imageUser={imageUser} />
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
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  height: 7vh;
  display: flex;
  justify-content: flex-end;
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
  width: 25%;
`;

const NavText = styled.p`
  font-size: 0.8rem;
`;

Nav.propTypes = {
  user: PropTypes.object,
  groupId: PropTypes.string,
  setUserId: PropTypes.func,
};
