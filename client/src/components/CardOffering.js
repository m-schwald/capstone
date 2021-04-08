import styled from "styled-components";
import PropTypes from "prop-types";

import Image from "../components/Image";
import Container from "./Container";
import Toggle from "./IconToggle";

export default function CardOffering({ item, onAvailable, isStatic }) {
  const image = isStatic
    ? "https://images.unsplash.com/photo-1489323588428-2cb185f5cd5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGJhY2twYWNrfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    : item.image
    ? `/assets/${item.image}`
    : "";

  return (
    <CardContainer isStatic={isStatic}>
      <div>
        <Toggle available={item?.isAvailable} onAvailable={onAvailable} />
        <Img isStatic={isStatic} src={image} />
      </div>
      <H4 isStatic={isStatic}>{item.gadgName}</H4>
    </CardContainer>
  );
}

const Img = styled(Image)`
  position: ${(props) => (props.isStatic ? "static" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 6rem;
  object-fit: cover;
  margin: ${(props) =>
    props.isStatic ? "-2rem auto .5rem auto" : "0 auto .5rem auto"};
  z-index: -1;
  border-radius: 0;
  border: var(--one) 2px inset;
`;

const H4 = styled.h4`
  position: ${(props) => (props.isStatic ? "static" : "absolute")};
  top: 70%;
  color: var(--two);
  margin: 0 0.5rem;
  font-size: 0.8rem;
  width: 11ch;
  line-height: 1rem;
  height: 2rem;
  overflow: hidden;
`;

const CardContainer = styled(Container)`
  position: ${(props) => (props.isStatic ? "static" : "relative")};
  width: ${(props) => (props.isStatic ? "6rem" : "25vw")};
  margin: 0.5rem;
  background: linear-gradient(var(--dark) 10%, var(--three));
  z-index: -3;
  height: ${(props) => (props.isStatic ? "9rem" : "21vh")};
`;

CardOffering.propTypes = {
  onAvailable: PropTypes.func,
  item: PropTypes.any,
  isStatic: PropTypes.bool,
};
