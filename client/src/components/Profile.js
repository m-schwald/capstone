import styled from "styled-components";
import { bool, func } from "prop-types";
import { NavLink } from "react-router-dom";

import IconUser from "./IconUser";
import Button from "./Button";

export default function Profile({ openProfile, setOpenProfile }) {
  return (
    <NavContainer openProfile={openProfile}>
      <IconUser />
      <h4> username </h4>
      <p> 0173 - 981 298 88</p>
      <p> bling@schnupps.de</p>
      <br />
      <p> Berlin</p>

      <Button>
        <Link to="/editProfile" onClick={() => setOpenProfile(!openProfile)}>
          edit profile
        </Link>
      </Button>
      <Button onClick={() => setOpenProfile(!openProfile)}>
        close profile
      </Button>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  padding: 3rem 0 0 0;
  position: fixed;
  background: var(--onetransparent);
  top: 0;
  bottom: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: -1;
  transform: ${({ openProfile }) =>
    openProfile ? "translateX(00%)" : "translateX(100%)"};
  transition: ease-in-out 0.5s all;
`;
const Link = styled(NavLink)`
  color: var(--dark);
  text-align: center;
  text-decoration: none;
`;

Profile.propTypes = {
  openProfile: bool.isRequired,
  setOpenProfile: func.isRequired,
};
