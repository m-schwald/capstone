import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import media from "../mediaSizes";

import Button from "./Button";
import team from "../assets/images/group2.png";

export default function Group({ openGroup, setOpenGroup, isStatic, groupId }) {
  const [allUsers, setAllUsers] = useState([]);

  const getUser = async () => {
    const data = await fetch("/user");
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
      <Flexbox>
        <GroupPic src={team} />
        <div>
          <p>
            Apples ducks straw, quail a ostriches donkey, hay hook cucumbers.
            Lamb pig rooster sheep. . Onion organic orange
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

          <Button onClick={() => setOpenGroup(!openGroup)}>close Group</Button>
        </div>
      </Flexbox>
    </NavContainer>
  );
}

const Flexbox = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1vw;
  padding: 0.5rem;

  ${media.tablet`
  flex-flow: row nowrap;
  `}
  ${media.desktop`
     flex-flow: row nowrap;
  `}

  div {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  Button {
    margin: 1rem auto;
    ${media.tablet`
     min-width: 30%; 
     font-size: 1.8rem;
  `}
    ${media.desktop`
     min-width: 20%; 
     font-size: 1.1rem;
  `};
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

  h4 {
    ${media.tablet`
  font-size: 2rem; 
  `}
    ${media.desktop`
    font-size: 2rem; 
    margin: 1rem; 
    padding: 0; 
  `}
  }
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

    ${media.tablet`
    font-size: 1.8rem; 
    max-width: 50ch; 
    padding: 1rem 3rem; 
  `}
    ${media.desktop`
    font-size: 1rem; 
    max-width: 50ch; 
  `}
  }
`;

const GroupPic = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  border: double black 2px;
  margin: 0 auto;
  object-fit: cover;

  ${media.tablet`
    height: 15rem; 
    width: 15rem; 
    align-self: left; 
  `}
  ${media.desktop`
    height: 15rem; 
    width: 15rem; 
    align-self: left; 
  `}
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
  ${media.tablet`
    width: 6vh; 
    height: 6vh;
    margin: 1rem;  
  `}
  ${media.desktop`
  width: 8vh; 
    height: 8vh;
    margin: 1rem; 
  `}
`;

Group.propTypes = {
  openGroup: PropTypes.bool,
  setOpenGroup: PropTypes.func,
  groupId: PropTypes.string,
  isStatic: PropTypes.bool,
};
