import styled from "styled-components";
import DelayLink from "react-delay-link";
import { useState } from "react";
import media from "../mediaSizes";

import ContainerFlat from "../components/ContainerFlat";
import Button from "../components/Button";

import logoStart from "../assets/images/bgbigger(5).svg";
import bg from "../assets/background/3.jpg";

export default function Welcome() {
  const [animate, setAnimate] = useState(false);

  return (
    <WelcomePage>
      <Background src={bg} />
      <LogoWelcome animate={animate} src={logoStart} />

      <Button onClick={() => setAnimate(!animate)}>
        <Link delay={800} replace={false} exact to="./searching">
          i need a gadg
        </Link>
      </Button>
      <Button onClick={() => setAnimate(!animate)}>
        <Link delay={800} replace={false} exact to="./offering">
          i got a gadg
        </Link>
      </Button>
    </WelcomePage>
  );
}

const WelcomePage = styled(ContainerFlat)`
  display: flex;
  justify-content: center;
  align-items: center;

  Button {
    ${media.tablet`
     min-width: 30%; 
     font-size: 1.8rem;
  `}
    ${media.desktop`
     min-width: 20%; 
     font-size: 1.3rem;
  `}
  }
`;

const LogoWelcome = styled.img`
  height: ${(props) => (props.animate ? "1000vh" : "70vh")};
  margin: ${(props) => (props.animate ? "-400vh 0" : "0")};
  opacity: ${(props) => (props.animate ? "0" : "1")};
  transition: 1.3s all ease-out;
`;
const Background = styled.img`
  min-height: 100%;
  width: 100vw;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1000;

  ${media.tablet`
  height: 100%;
  width: 100vw;  
  object-position: 0 70%; 
  `}
`;

const Link = styled(DelayLink)`
  text-decoration: none;
  color: var(--dark);
`;
