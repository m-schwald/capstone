import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Button from "./Button";
import FlexboxRow from "./FlexboxRow";

import home from "../assets/images/home.svg";
import phone from "../assets/images/phone.svg";
import mail from "../assets/images/mail.svg";

export default function Profile({
  openProfile,
  setOpenProfile,
  isStatic,
  user,
}) {
  const imageUser = isStatic
    ? user.image
    : user?.image
    ? `/users/${user.image}`
    : "";

  return (
    <NavContainer isStatic={isStatic} openProfile={openProfile}>
      <IconUser src={imageUser} />
      <h4> {user.userName} </h4>
      <h5>Motto:</h5>
      <p> {user.motto}</p>
      <h5>Contact:</h5>
      <Contact href="tel:">
        <Icon src={phone} /> {user.phone}
      </Contact>
      <Contact href="mailto:">
        <Icon src={mail} /> {user.email}
      </Contact>
      <p>
        <Icon src={home} />
        {user.adress}
      </p>
      <h5>Interests:</h5>
      <p> {user.interests}</p>
      <h5>Groups:</h5>
      <p> {user.groups}</p>
      <FlexboxRow>
        <Button>
          <Link to="/editProfile" onClick={() => setOpenProfile(!openProfile)}>
            edit profile
          </Link>
        </Button>
        <Button onClick={() => setOpenProfile(!openProfile)}>
          close profile
        </Button>
      </FlexboxRow>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  padding: 0;
  position: ${(props) => (props.isStatic ? "static" : "fixed")};
  background: var(--onetransparent);
  top: 0;
  bottom: 0;
  right: 0;
  width: ${(props) => (props.isStatic ? "70%" : "70vw")};
  min-height: ${(props) => (props.isStatic ? "100%" : "100vh")};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: left;
  z-index: ${(props) => (props.isStatic ? "1" : "1000")};
  transform: ${({ openProfile }) =>
    openProfile ? "translateX(00%)" : "translateX(100%)"};
  transition: ease-in-out 0.5s all;
  h4 {
    padding: 0 1rem;
    margin: 0.5rem 0 0 0;
  }
  h5 {
    text-align: left;
    margin: 0.5rem 0 0 0;
    padding: 0.2rem 2rem;
    background: var(--dark);
    color: var(--light);
    font-size: 0.7rem;
    letter-spacing: 1px;
  }
  p {
    display: inline-block;
    text-align: left;
    font-size: 0.8rem;
    margin: 0;
    padding: 0 1rem;
  }
  Button {
    width: 40%;
    font-size: 0.7rem;
    padding: 0.4rem 0.2rem;
  }
`;

const IconUser = styled.img`
  height: auto;
  width: 100%;
  align-self: center;
  margin: 0;
`;

const Icon = styled.img`
  display: inline-block;
  width: 0.8rem;
  height: auto;
  margin: 0 0.5rem 0 0;
`;

const Link = styled(NavLink)`
  color: var(--dark);
  text-align: center;
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  margin: 0;
  font-size: 0.7rem;
`;

const Contact = styled.a`
  display: inline-block;
  text-align: left;
  font-size: 0.9rem;
  margin: 0;
  padding: 0.2rem 1rem 0.2rem 1rem;
  text-decoration: none;
  color: var(--dark);
`;

Profile.propTypes = {
  openProfile: PropTypes.bool,
  setOpenProfile: PropTypes.func,
  isStatic: PropTypes.bool,
  user: PropTypes.any,
};
