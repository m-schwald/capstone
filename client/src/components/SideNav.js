import styled from "styled-components";
import { bool, func } from "prop-types";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";

import Button from "./Button";

export default function SideNav({ openNav, setOpenNav, setUserId }) {
  const getUser = async () => {
    const data = await fetch("http://localhost:4000/get-user");
    const result = await data.json();
    return result;
  };
  const { isLoading, isError, data: users, error } = useQuery("users", getUser);
  console.log(1, users);

  return isLoading ? (
    <p>is loading... </p>
  ) : isError ? (
    <p>Error: {error.message} </p>
  ) : users ? (
    <NavContainer openNav={openNav}>
      <ButtonNav>
        <Link exact to="/" onClick={() => setOpenNav(!openNav)}>
          home
        </Link>
      </ButtonNav>
      <ButtonNav>
        <Link to="/dashboard" onClick={() => setOpenNav(!openNav)}>
          gadgboard
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
        {users?.map((user, index) => {
          const imageUser = user?.image ? `/users/${user?.image}` : "";
          return (
            <UserCard key={index} onClick={() => setUserId(user?._id)}>
              <img src={imageUser} alt={user.userName} />
            </UserCard>
          );
        })}
      </section>
    </NavContainer>
  ) : null;
}

const NavContainer = styled.div`
  padding: 3rem 0 0 0;
  position: absolute;
  background: var(--onetransparent);
  top: 0;
  bottom: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: -1;
  transform: ${({ openNav }) =>
    openNav ? "translateX(0)" : "translateX(-100%)"};
  transition: ease-in-out 0.5s all;

  section {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    width: 100%;

    p {
      position: absolute;
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
`;
const UserCard = styled.div`
  width: 5vh;
  height: 5vh;
  margin: 0.5rem;
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: black 1px solid;
  }
`;

SideNav.propTypes = {
  openNav: bool.isRequired,
  setOpenNav: func.isRequired,
};
