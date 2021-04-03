import styled from "styled-components";

import Container from "../components/Container";
import IconGroup from "../components/IconGroup";

export default function EditGroup() {
  return (
    <Container>
      <H3 text="edit grouf" />
      <BigIconGroup />
    </Container>
  );
}

const BigIconGroup = styled(IconGroup)`
  height: auto;
  width: auto;
`;
const H3 = styled.h3`
  margin: 1rem auto;
`;
