import styled from "styled-components";
import { bool, func } from "prop-types";

import logo from "../assets/images/logo_small.png";

const Logo = ({ openNav, setOpenNav }) => {
  return (
    <Img src={logo} openNav={openNav} onClick={() => setOpenNav(!openNav)} />
  );
};

const Img = styled.img`
  height: 8vh;
  width: auto;
`;

Logo.propTypes = {
  openNav: bool.isRequired,
  setOpenNav: func.isRequired,
};

export default Logo;
