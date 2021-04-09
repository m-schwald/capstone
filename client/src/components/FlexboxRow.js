import styled from "styled-components";
import media from "../mediaSizes";

const FlexboxRow = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;

  .forSG {
    background: var(--one);
    margin: 1rem;
    padding: 2rem;
    color: var(--two);
  }
  Button {
    ${media.tablet`
     font-size: 1rem; 
  `}
  }
`;

export default FlexboxRow;
