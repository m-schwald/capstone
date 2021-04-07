import styled from "styled-components";
import { NavLink } from "react-router-dom";

import ContainerFlat from "../components/ContainerFlat";
import Button from "../components/Button";

import logoStart from "../assets/images/bgbigger(5).svg";

export default function Welcome() {
  let animate = false;

  const animateLogo = () => {
    animate = !animate;
  };

  return (
    <WelcomePage>
      <LogoWelcome src={logoStart} />

      <Button onClick={() => animateLogo}>
        <Link className="link" exact to="./searching">
          i need a gadg
        </Link>
      </Button>
      <Button onClick={() => animateLogo}>
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
  height: ${(props) => (props.animate ? "300vh" : "70vh")};
  transition: 1s all ease;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--dark);
`;
