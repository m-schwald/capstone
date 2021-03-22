import styled from "styled-components";
import { bool, func } from "prop-types";

import logo from "../assets/images/logo.png";

const Logo = ({ openNav, setOpenNav }) => {
  return (
    <Img src={logo} openNav={openNav} onClick={() => setOpenNav(!openNav)} />
  );
};

const Img = styled.img`
  height: 5vh;
  width: auto;
`;

Logo.propTypes = {
  openNav: bool.isRequired,
  setOpenNav: func.isRequired,
};

export default Logo;
