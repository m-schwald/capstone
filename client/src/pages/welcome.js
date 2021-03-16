import styled from "styled-components";
import ContainerFlat from "../components/ContainerFlat";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.svg";

export default function Welcome() {
  return (
    <WelcomePage>
      <H2>welcome to</H2>
      <H1>gadg-supply</H1>
      <LogoWelcome src={logo} />
      <Button>
        <Link className="link" exact to="./searching">
          i need a gadg
        </Link>
      </Button>
      <Button>
        <Link exact to="./offering">
          i got a gadg
        </Link>
      </Button>
      <Button>
        <Link exact to="./dashboard">
          let's just start
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

const H1 = styled.h1`
  color: var(--dark);
  margin: 0;
  font-size: 1.8rem;
`;
const H2 = styled.h2`
  color: var(--dark);
  margin: 0;
`;

const LogoWelcome = styled.img`
  height: 10vh;
  margin: 2rem;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--dark);
`;
