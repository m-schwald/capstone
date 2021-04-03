import styled from "styled-components";

const UserCard = (user) => {
  return (
    <>
      <Image src={user.image} />
      <p>{user.userName}</p>
    </>
  );
};

const Image = styled.img`
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  border: black 1px solid;
`;

export default UserCard;