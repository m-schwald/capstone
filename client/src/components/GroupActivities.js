import styled from "styled-components";
import Container from "../components/Container";
import Image from "../components/Image";

import user from "../assets/images/user.svg";
import snowboard from "../assets/images/snowboard.jpg";

export default function GroupActivities() {
  return (
    <Container>
      <H4> gadg-tivities</H4>
      <Flexbox>
        <Icon src={user} />
        <p> just added a new gadg: </p>
      </Flexbox>
      <Img src={snowboard} />
    </Container>
  );
}

const H4 = styled.h4`
  text-align: center;
  margin: 0 auto;
`;

const Icon = styled.img`
  width: 5vw;
  margin: 0 3vw;
`;

const Img = styled(Image)`
  width: 90%;
  margin: 0 auto;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
`;
