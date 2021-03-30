import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalDiv = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  padding: 2rem 0.5rem;
  transform: translate(-50%, -50%);
  background: linear-gradient(var(--two) -200%, var(--three));
  border-radius: 1rem;
  border: inset var(--two) 3px;

  p {
    text-align: center;
  }
`;

export const StyledModal = ({ handleClose, show, children }) => {
  return (
    <ModalDiv block={show ? "block" : "none"}>
      <ContentDiv>
        {children}
        <Button close onClick={handleClose}>
          close
        </Button>
      </ContentDiv>
    </ModalDiv>
  );
};
