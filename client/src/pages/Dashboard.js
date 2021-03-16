import styled from "styled-components";
import Container from "../components/Container";

import UserActivities from "../components/UserActivities";
import GroupActivities from "../components/GroupActivities";

export default function Dashboard() {
  return (
    <Container>
      <H3> gadg-board</H3>
      <UserActivities />
      <GroupActivities />
    </Container>
  );
}

const H3 = styled.h3`
  text-align: center;
  margin: 0 auto;
`;
