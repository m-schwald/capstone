import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import team from "../assets/images/team.svg";
import user from "../assets/images/user.svg";

export default function Nav() {
  return (
    <>
      <Header>
        <Logo src={logo} />
        <Div>
          <Logo src={team} />
          <NavLink>groupname</NavLink>
        </Div>
        <Div>
          <Logo src={user} />
          <NavLink>username</NavLink>
        </Div>
      </Header>
    </>
  );
}

const Header = styled.div`
  background: var(--orange);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled.img`
  height: 3vh;
  width: auto;
`;

const NavLink = styled.p`
  font-size: 0.8rem;
  color: white;
`;

const Div = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
`;
