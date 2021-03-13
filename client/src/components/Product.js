import styled from "styled-components";
import snowboard from "../assets/images/snowboard.jpg";
import toggle_on from "../assets/images/toggle-on.svg";
import toggle_off from "../assets/images/toggle-off.svg";

export default function Product() {
  return (
    <>
      <Container>
        <Flexbox>
          <Name>product name</Name>
          <Toggle src={toggle_on} />
        </Flexbox>
        <Image src={snowboard} />
      </Container>
    </>
  );
}

const Container = styled.section`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  width: 90%;
  padding: 0 1rem 1rem 1rem;
  margin: 3rem 0 0 0;
`;

const Name = styled.h2`
  color: black;
`;

const Image = styled.img`
  border: outset darkgrey 2px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
`;

const Flexbox = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const Toggle = styled.img`
  width: 5vw;
  height: auto;
`;
