import styled from "styled-components";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

import Button from "../components/Button";
import FlexboxRow from "../components/FlexboxRow";

export default function EditProfile({ user, userId, onReload }) {
  const imageUser = user?.image ? `/users/${user.image}` : "";

  const [changedUser, setChangedUser] = useState({});

  useEffect(() => {
    setChangedUser(user);
  }, [user]);

  const handleChange = (event) => {
    const field = event.target;
    const value = field.value;
    setChangedUser({
      ...changedUser,
      [field.name]: value,
    });
  };

  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const response = await fetch("/user/" + userId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changedUser),
    });
    console.log(await response.json());
    onReload();
    goBack();
  };

  return (
    <Container onSubmit={handleUpdate}>
      <H3 text="edit profile" />
      <ImageUser src={imageUser} />
      <label>
        name:
        <input
          name="userName"
          value={changedUser?.userName}
          onChange={handleChange}
        />
      </label>
      <label>
        phone:
        <input
          name="phone"
          value={changedUser?.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        email:
        <input
          name="email"
          value={changedUser?.email}
          onChange={handleChange}
        />
      </label>
      <label>
        adress:
        <BiggerInput
          name="adress"
          rows="3"
          maxlength="100"
          value={changedUser?.adress}
          onChange={handleChange}
        />
      </label>
      <label>
        interests:
        <BiggerInput
          name="interests"
          rows="3"
          maxlength="100"
          value={changedUser?.interests}
          onChange={handleChange}
        />
      </label>
      <label>
        motto:
        <BiggerInput
          name="motto"
          rows="5"
          maxlength="300"
          value={changedUser?.motto}
          onChange={handleChange}
        />
      </label>
      <label>
        groups:
        <input
          name="groups"
          value={changedUser?.groups}
          onChange={handleChange}
        />
      </label>
      <FlexboxRow>
        <Button type="button" cancel onClick={goBack}>
          cancel
        </Button>
        <Button type="submit">submit changes</Button>
      </FlexboxRow>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  margin: 2rem auto 0 auto;
  flex-flow: column nowrap;

  label {
    display: flex;
    font-family: "Edo";
    width: 90%;

    align-items: center;
    justify-content: flex-end;
  }

  input {
    margin: 0 0 0 0.5rem;
    width: 65%;
  }
  Button {
    margin: 0 1rem;
  }
`;

const ImageUser = styled.img`
  height: 20vh;
  width: 20vh;
  margin: 0 auto 0.5rem auto;
  border-radius: 50%;
`;

const BiggerInput = styled.textarea`
  margin: 0 0 0 0.5rem;
  width: 65%;
  height: auto;
`;

const H3 = styled.h3`
  margin: 1rem auto;
`;

EditProfile.propTypes = {
  user: PropTypes.object,
  userId: PropTypes.string,
  onReload: PropTypes.func,
};
