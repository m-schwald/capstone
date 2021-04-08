import styled from "styled-components";

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
`;

export default FlexboxRow;
