import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Button from "./Button";

export default function SideNav({ openNav, setOpenNav, setUserId, isStatic }) {
  const [allUsers, setAllUsers] = useState([]);

  const getUser = async () => {
    const data = await fetch("http://localhost:4000/user");
    const result = await data.json();
    return result;
  };

  const getAllUsers = async () => {
    const userToLogin = await getUser();
    setAllUsers(userToLogin);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllUsers(), []);

  return (
    <NavContainer isStatic={isStatic} openNav={openNav}>
      <ButtonNav>
        <Link exact to="/" onClick={() => setOpenNav(!openNav)}>
          home
        </Link>
      </ButtonNav>
      <ButtonNav>
        <Link to="/searching" onClick={() => setOpenNav(!openNav)}>
          i need a gadg
        </Link>
      </ButtonNav>
      <ButtonNav>
        <Link to="/offering" onClick={() => setOpenNav(!openNav)}>
          i got a gadg
        </Link>
      </ButtonNav>

      <section>
        <p> click your pic to log in</p>
        {allUsers?.map((user, index) => {
          const imageUser = user?.image ? `/users/${user?.image}` : "";
          return (
            <UserCard key={index} onClick={() => setUserId(user?._id)}>
              <img src={imageUser} alt={user.userName} />
            </UserCard>
          );
        })}
      </section>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  padding: 10rem 0 0 0;
  position: ${(props) => (props.isStatic ? "static" : "absolute")};
  background: var(--onetransparent);
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => (props.isStatic ? "50%" : "50vw")};
  height: ${(props) => (props.isStatic ? "100%" : "100vh")};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: -1;
  transform: ${({ openNav }) =>
    openNav ? "translateX(0)" : "translateX(-100%)"};
  transition: ease-in-out 0.5s all;

  section {
    position: ${(props) => (props.isStatic ? "static" : "fixed")};
    bottom: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    width: 100%;

    p {
      position: ${(props) => (props.isStatic ? "static" : "absolute")};
      top: -1.6rem;
      right: 0;
      padding: 0 1rem 0 0.5rem;
      font-size: 0.8rem;
      background: var(--dark);
      color: var(--light);
    }
  }
`;

const Link = styled(NavLink)`
  color: var(--dark);
  text-align: center;
  text-decoration: none;
`;

const ButtonNav = styled(Button)`
  min-width: 70%;
  margin: 1rem;
`;
const UserCard = styled.div`
  width: 8vw;
  height: auto;
  margin: 0.5rem;
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: black 1px solid;
  }
`;

SideNav.propTypes = {
  openNav: PropTypes.bool,
  setOpenNav: PropTypes.func,
  setUserId: PropTypes.func,
  isStatic: PropTypes.bool,
};
