import { createGlobalStyles } from "./GlobalStyles";

const StyleGuideWrapper = ({ children }) => {
  return (
    <>
      <createGLobalStyles />
      {children}
    </>
  );
};

export default StyleGuideWrapper;
