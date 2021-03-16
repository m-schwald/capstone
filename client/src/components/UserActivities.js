import styled from "styled-components";
import Container from "../components/Container";
import FlexboxRow from "../components/FlexboxRow";
import Image from "../components/Image";

import snowboard from "../assets/images/snowboard.jpg";
import user from "../assets/images/user.svg";

export default function UserActivities() {
  return (
    <FlexboxRow>
      <ContainerDash>
        <H4> conferred </H4>
        <FlexboxRow>
          <Img src={snowboard} />
          <Img src={user} />
        </FlexboxRow>
        <FlexboxRow>
          <Img src={snowboard} />
          <Img src={user} />
        </FlexboxRow>
      </ContainerDash>
      <ContainerDash>
        <H4> rented </H4>
        <FlexboxRow>
          <Img src={snowboard} />
          <Img src={user} />
        </FlexboxRow>
      </ContainerDash>
    </FlexboxRow>
  );
}

const H4 = styled.h4`
  text-align: center;
  margin: 0 auto;
`;

const ContainerDash = styled(Container)`
  width: 35vw;
`;

const Img = styled(Image)`
  width: 10vw;
`;
