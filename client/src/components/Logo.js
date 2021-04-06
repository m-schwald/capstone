import styled from "styled-components";
import PropTypes from "prop-types";

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

export default Logo;

Logo.propTypes = {
  openNav: PropTypes.bool,
  setOpenNav: PropTypes.func,
};
