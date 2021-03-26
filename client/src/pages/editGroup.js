import styled from "styled-components";

import H3 from "../components/H3";
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
