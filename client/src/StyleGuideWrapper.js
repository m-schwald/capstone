import GlobalStyles from "./GlobalStyles";
import PropTypes from "prop-types";

const StyleGuideWrapper = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default StyleGuideWrapper;

StyleGuideWrapper.propTypes = {
  children: PropTypes.any,
};
