import styled from "styled-components";
import { bool, func } from "prop-types";

import logo from "../assets/images/logo.svg";

const Logo = ({ openNav, setOpenNav }) => {
  return (
    <Img src={logo} openNav={openNav} onClick={() => setOpenNav(!openNav)} />
  );
};

const Img = styled.img`
  height: 3vh;
  width: auto;
  margin: 0 auto 0 3vw;
`;

Logo.propTypes = {
  openNav: bool.isRequired,
  setOpenNav: func.isRequired,
};

export default Logo;
