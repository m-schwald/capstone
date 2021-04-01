import styled from "styled-components";

import H3 from "../components/H3";
import ContainerFlat from "../components/ContainerFlat";
import { useQuery } from "react-query";

export default function EditProfile({ userId }) {
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
    <Container>
      <H3 text="edit profile" />
      <ImageUser src={imageUser} />
    </Container>
  ) : null;
}

const Container = styled(ContainerFlat)`
  display: flex;
  justify-content: center;
  background: red;
`;

const ImageUser = styled.img`
  height: 20vh;
  width: 20vh;
`;
