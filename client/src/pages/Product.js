import styled from "styled-components";

import Container from "../components/Container";
import Toggle from "../components/IconToggle";
import IconUser from "../components/IconUser";
import FlexboxRow from "../components/FlexboxRow";
import Image from "../components/Image";
import H3 from "../components/H3";

import snowboard from "../assets/images/snowboard.jpg";

export default function Product() {
  return (
    <>
      <Container>
        <FlexboxRow>
          <H3 text="product name" />
          <Toggle />
        </FlexboxRow>
        <Img src={snowboard} />
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

const Img = styled(Image)`
  /* border: outset darkgrey 2px; */
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  border-radius: 5%;
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
