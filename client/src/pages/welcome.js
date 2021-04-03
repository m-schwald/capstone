import styled from "styled-components";
import { NavLink } from "react-router-dom";

import ContainerFlat from "../components/ContainerFlat";
import Button from "../components/Button";

import logo from "../assets/images/logo.png";

export default function Welcome() {
  return (
    <WelcomePage>
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
    </WelcomePage>
  );
}

const WelcomePage = styled(ContainerFlat)`
  display: flex;

  justify-content: center;
  align-items: center;
`;

const LogoWelcome = styled.img`
  height: 35vh;
  margin: 5rem 2rem 2rem;
  transition: 0.5s ease-in-out all;

  &:hover {
    transform: scale(1.05);
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--dark);
`;
