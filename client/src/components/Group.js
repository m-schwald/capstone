import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "./Button";
import team from "../assets/images/group2.png";

export default function Group({ openGroup, setOpenGroup, isStatic, groupId }) {
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
    <NavContainer isStatic={isStatic} openGroup={openGroup}>
      <h4> {groupId} </h4>
      <GroupPic src={team} />
      <p>
        Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Lamb
        pig rooster sheep. . Onion organic orange
      </p>
      <section>
        {allUsers?.map((user, index) => {
          const imageUser = user?.image ? `/users/${user?.image}` : "";
          return (
            <UserCard key={index}>
              <img src={imageUser} alt={user.userName} />
            </UserCard>
          );
        })}
      </section>
      <Flexbox>
        <Button>
          <Link to="/editGroup" onClick={() => setOpenGroup(!openGroup)}>
            edit Group
          </Link>
        </Button>
        <Button onClick={() => setOpenGroup(!openGroup)}>close Group</Button>
      </Flexbox>
    </NavContainer>
  );
}

const Flexbox = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1vw;
  padding: 0.5rem;

  Button {
    margin: 1rem 0.5rem;
  }
`;

const NavContainer = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  position: ${(props) => (props.isStatic ? "static" : "absolute")};
  background: var(--onetransparent);
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  transform: ${({ openGroup }) =>
    openGroup ? "translateY(0)" : "translateY(-100%)"};

  transition: ease-in-out 0.5s all;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
  }

  p {
    text-align: center;
    margin: 0.3rem;
    padding: 0.3rem;
  }
`;
const Link = styled(NavLink)`
  color: var(--dark);
  text-align: center;
  text-decoration: none;
`;

const GroupPic = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  border: double black 2px;
  margin: 0 auto;
  object-fit: cover;
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

Group.propTypes = {
  openGroup: PropTypes.bool,
  setOpenGroup: PropTypes.func,
  groupId: PropTypes.string,
  isStatic: PropTypes.bool,
};
