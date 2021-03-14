//dependencies
import styled from "styled-components";

//components
import Container from "./Container";
import Toggle from "./IconToggle";
import IconUser from "./IconUser";
import FlexboxRow from "./FlexboxRow";
//assets
import snowboard from "../assets/images/snowboard.jpg";

export default function Product() {
  return (
    <>
      <Container>
        <FlexboxRow>
          <Name>product name</Name>
          <Toggle />
        </FlexboxRow>
        <Image src={snowboard} />
        <FlexboxRow>
          <FlexboxColumn>
            <IconUser />
            <p>username</p>
            <p>
              Size: <br /> 168cm
            </p>
            <p>
              category:
              <br /> Snow
            </p>
          </FlexboxColumn>
          <Description>
            Bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion.
            Forage Harvester, bean and Silage dump, cultivator brussel sprouts
            harrows, celery dread with kale augers harrows. Quack hammers
            eggplant is utters nails garden. Apples ducks straw, quail a
            ostriches donkey, hay hook cucumbers. Lamb pig rooster sheep. Onion
            organic orange.
            <br /> <br />
            John Deere radish barn, a hay loft house at pony. Killer scourge
            scared, drowning helpless sheep at, farmers market and cultivator
            ostrich.
          </Description>
        </FlexboxRow>
      </Container>
    </>
  );
}
/* 
const Container = styled.section`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  width: 90%;
  padding: 0 1rem 1rem 1rem;
  margin: 3rem auto 0 auto;
  height: auto;
`; */

const Name = styled.h2`
  color: black;
`;

const Image = styled.img`
  /* border: outset darkgrey 2px; */
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 0;
`;

const FlexboxColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0 auto;

  & p {
    padding: 0.5rem;
    margin: 0;
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 0.8rem;
  padding: 0 0 0 0.5rem;
  border-left: solid var(--orange) 1px;
`;
