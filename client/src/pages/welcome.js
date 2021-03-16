import styled from "styled-components";
import ContainerFlat from "../components/ContainerFlat";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

export default function Welcome() {
  return (
    <WelcomePage>
      <H1> welcome to gadg-supply</H1>
      <LogoWelcome />
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
`;

const LogoWelcome = styled(Logo)`
  height: 10vh;
  margin: 0 0 0 0;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--dark);
`;
