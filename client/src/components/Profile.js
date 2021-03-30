import styled from "styled-components";
import { bool, func } from "prop-types";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";

import Button from "./Button";
import FlexboxRow from "./FlexboxRow";

import phone from "../assets/images/phone.svg";
import home from "../assets/images/home.svg";
import mail from "../assets/images/mail.svg";

export default function Profile({ openProfile, setOpenProfile, userId }) {
  const getUser = async () => {
    const data = await fetch("http://localhost:4000/get-user/" + userId);
    const result = await data.json();
    return result;
  };

  const { isLoading, isError, data, error } = useQuery("user", getUser);

  const imageUser = data?.image ? `/users/${data.image}` : "";

  return isLoading ? (
    <p>is loading... </p>
  ) : isError ? (
    <p>Error: {error.message} </p>
  ) : data ? (
    <NavContainer openProfile={openProfile}>
      <IconUser src={imageUser} />
      <h4> {data.userName} </h4>
      <h5>Motto:</h5>
      <p> {data.motto}</p>
      <h5>Contact:</h5>
      <p>
        <Icon src={phone} /> {data.phone}
      </p>
      <p>
        <Icon src={mail} /> {data.email}
      </p>
      <p>
        <Icon src={home} />
        {data.adress}
      </p>
      <h5>Interests:</h5>
      <p> {data.interests}</p>
      <h5>Groups:</h5>
      <p> {data.groups}</p>
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
  ) : null;
}

const NavContainer = styled.div`
  padding: 0;
  position: fixed;
  background: var(--onetransparent);
  top: 0;
  bottom: 0;
  right: 0;
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: left;
  z-index: 1000;
  transform: ${({ openProfile }) =>
    openProfile ? "translateX(00%)" : "translateX(100%)"};
  transition: ease-in-out 0.5s all;
  h4 {
    padding: 0 1rem;
    margin: 1rem 0 0.5rem 0;
  }
  h5 {
    text-align: left;
    margin: 0.5rem 0 0 0;
    padding: 0.2rem 2rem;
    background: var(--dark);
    color: var(--light);
  }

  p {
    display: inline-block;
    text-align: left;
    font-size: 0.9rem;
    margin: 0;
    padding: 0.2rem 0 0.2rem 1rem;
  }

  Button {
    width: 40%;
    font-size: 0.8rem;
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
`;

Profile.propTypes = {
  openProfile: bool.isRequired,
  setOpenProfile: func.isRequired,
};
