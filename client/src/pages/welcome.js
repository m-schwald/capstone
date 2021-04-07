import styled from "styled-components";
import DelayLink from "react-delay-link";

import ContainerFlat from "../components/ContainerFlat";
import Button from "../components/Button";

import logoStart from "../assets/images/bgbigger(5).svg";
import { useState } from "react";

export default function Welcome() {
  const [animate, setAnimate] = useState(false);

  return (
    <WelcomePage>
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
`;

const LogoWelcome = styled.img`
  height: ${(props) => (props.animate ? "1000vh" : "70vh")};
  margin: ${(props) => (props.animate ? "-400vh 0" : "0")};
  opacity: ${(props) => (props.animate ? "0" : "1")};
  transition: 1.3s all ease-out;
`;

const Link = styled(DelayLink)`
  text-decoration: none;
  color: var(--dark);
`;
