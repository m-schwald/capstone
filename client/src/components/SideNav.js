import styled from "styled-components";

export default function SideNav() {
  return (
    <NavContainer>
      <Link> 1 </Link>
      <Link> 2 </Link>
      <Link> 3 </Link>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  padding: 3rem 0 0 0;
  background: black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Link = styled.h3`
  color: red;
`;
