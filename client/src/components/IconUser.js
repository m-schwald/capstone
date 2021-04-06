import styled from "styled-components";
import PropTypes from "prop-types";

export default function IconUser({ imageUser }) {
  return <Img src={imageUser} />;
}

const Img = styled.img`
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  border: solid black 1px;
`;

IconUser.propTypes = {
  imageUser: PropTypes.string,
};
