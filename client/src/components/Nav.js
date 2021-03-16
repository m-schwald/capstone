import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks";

import SideNav from "../components/SideNav";

import Logo from "./Logo";
import IconUser from "./IconUser";
import IconGroup from "./IconGroup";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpenNav(false));

  return (
    <>
      <Navi>
        <Logo openNav={openNav} setOpenNav={setOpenNav} />
        <div ref={node}>
          <SideNav openNav={openNav} setOpenNav={setOpenNav} />
        </div>
        <GroupBox>
          <IconGroup />
          <Link exact to="../pages/welcome">
            groupname
          </Link>
        </GroupBox>
        <GroupBox>
          <IconUser />
          <Link exact to="../pages/product">
            username
          </Link>
        </GroupBox>
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
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
`;

const Link = styled(NavLink)`
  font-size: 0.8rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: var(--dark);
  }
`;

const GroupBox = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
  margin: 0 3vw;
`;
