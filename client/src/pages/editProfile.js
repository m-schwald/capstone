import styled from "styled-components";

import H3 from "../components/H3";
import Container from "../components/Container";
import IconUser from "../components/IconUser";

export default function EditProfile() {
  return (
    <Container>
      <H3 text="edit profile" />
      <BigIcon />
    </Container>
  );
}

const BigIcon = styled(IconUser)`
  height: 20vh;
`;
