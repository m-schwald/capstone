import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { NavLink, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import media from "../mediaSizes";

import Toggle from "../components/IconToggle";
import Button from "../components/Button";
import Image from "../components/Image";
import ContainerFlat from "../components/ContainerFlat";
import { StyledModal } from "../components/ReusableModal";

import phone from "../assets/images/phone.svg";
import mail from "../assets/images/mail.svg";
import trash from "../assets/images/trash.svg";
import edit from "../assets/images/wrench.svg";
import bg1 from "../assets/background/fog.jpg";
import bg2 from "../assets/background/zahn2.png";

export default function Product({ userId }) {
  const { _id } = useParams();
  let history = useHistory();

  const [gadg, setGadg] = useState({});
  const [owner, setOwner] = useState({});

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [ownerOpen, setOwnerOpen] = useState(false);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getGadg = async (id) => {
    const gadg = await fetch("/gadg/" + id);
    const result = await gadg.json();
    return result;
  };

  const getOwner = async (ownerId) => {
    const owner = await fetch(`/owner/${ownerId}`);
    const result = await owner.json();
    return result;
  };

  const loadGadgAndOwner = async (gadgId) => {
    const gadg = await getGadg(gadgId);
    const owner = await getOwner(gadg.ownerId);
    setGadg(gadg);
    setOwner(owner);
  };

  useEffect(() => {
    loadGadgAndOwner(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBack = () => {
    history.goBack();
  };
  const imageProduct = gadg?.image ? `/assets/${gadg.image}` : "";
  const imageOwner = owner?.image ? `/users/${owner.image}` : "";

  async function deleteItem() {
    try {
      const response = await axios.delete("/gadg/" + gadg._id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    goBack();
  }

  return (
    <>
      <Parallax className="Parallax">
        <ParallaxBg
          src={bg1}
          style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        />
        <ParallaxBg
          src={bg2}
          style={{ transform: `translateY(${offsetY * 0.7}px)` }}
        />
      </Parallax>
      <ContainerFlat>
        <FlexboxRow>
          <H3>{gadg.gadgName}</H3>

          <Toggle gadg={gadg} available={gadg.isAvailable} />

          <EditButton>
            <NavLink to={`../EditProduct/${_id}`}>
              <OwnerIcon src={edit} show={gadg?.ownerId === userId}></OwnerIcon>
            </NavLink>
          </EditButton>

          <OwnerIcon
            src={trash}
            show={gadg?.ownerId === userId}
            onClick={() => setDeleteOpen(!deleteOpen)}
          ></OwnerIcon>

          <StyledModal
            show={deleteOpen}
            handleClose={() => setDeleteOpen(false)}
          >
            <p>Do you really want to delete</p>
            <H5> {gadg.gadgName} </H5>
            <p>?</p>
            <Button onClick={deleteItem}>delete it!</Button>
          </StyledModal>
        </FlexboxRow>
        <FlexboxRow2>
          <Img src={imageProduct} />
          <section>
            <Description>
              <h5> Description </h5>
              <p>{gadg.description}</p>
            </Description>
            <Flexbox>
              <FlexboxColumn>
                <IconOwner
                  src={imageOwner}
                  show={gadg?.ownerId === userId}
                  onClick={() => setOwnerOpen(!ownerOpen)}
                />
                <StyledModal
                  id="testModal"
                  show={ownerOpen}
                  handleClose={() => setOwnerOpen(false)}
                >
                  {gadg.ownerId !== userId ? (
                    <>
                      <H5>{gadg.gadgName} </H5>
                      <p>is owned by</p>
                      <H5>{owner?.userName} </H5>
                      <p>
                        You can get it at <br />
                        {owner?.adress}
                      </p>
                      <Flexbox>
                        <Button>
                          <a href="tel:">
                            <Icon src={phone} />
                          </a>
                        </Button>
                        <Button>
                          <a href="mailto:">
                            <Icon src={mail} />
                          </a>
                        </Button>
                      </Flexbox>
                    </>
                  ) : (
                    <H5> you own this gadg</H5>
                  )}
                </StyledModal>
                <p>
                  Owner : <br /> {owner?.userName}
                </p>
                <p>
                  Size: <br /> {gadg.size}
                </p>
                <p>
                  category:
                  <br /> {gadg.category}
                </p>
              </FlexboxColumn>
              <Description>
                <h5> Facts </h5>
                <p>{gadg.facts}</p>
                <h5> preferences for usage </h5>
                <p>{gadg.personalInfo}</p>
              </Description>
            </Flexbox>
          </section>
        </FlexboxRow2>
        <Flexbox>
          <Button cancel onClick={goBack}>
            go back
          </Button>
          <Button id="testButton" onClick={() => setOwnerOpen(!ownerOpen)}>
            get this gadg
          </Button>
        </Flexbox>
      </ContainerFlat>
    </>
  );
}

const Parallax = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -12;
  background: white;
`;
const ParallaxBg = styled.img`
  background-repeat: no-repeat;
  position: absolute;
  width: auto;
  height: 130%;

  object-fit: cover;
  object-position: 0 30%;
  opacity: 0.5;

  &:last-child {
    opacity: 1;
    object-position: -0.5rem -26rem;
  }
`;

const OwnerIcon = styled.img`
  display: none;
  width: 1.3rem;
  height: auto;
  margin: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.show &&
    css`
      display: inline;
    `};
`;

const Img = styled(Image)`
  /* border: outset darkgrey 2px; */
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  border-radius: 5%;

  ${media.tablet`
  margin: 1rem; 
     width: 40vw; 
     height: 40vw; 
     object-fit: cover; 
  `}
`;

const IconOwner = styled.img`
  height: 8vh;
  width: 8vh;
  border-radius: 50%;
  border: solid black 1px;
`;

const FlexboxColumn = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;

  ${media.tablet`
    padding: 0; 
  `}

  p {
    padding: 0.5rem;
    margin: 0;
    font-size: 0.8rem;
    text-align: center;

    ${media.tablet`
    font-size: .9rem; 
  `}
  }
`;

const FlexboxRow = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
  align-items: flex-start; 
     width: 90%;
     margin: 0 auto; 
     margin-top: 2rem;  
  `}
`;

const FlexboxRow2 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
  flex-direction: row-reverse; 
  align-items: flex-start; 
     width: 90%;
     margin: 0 auto; 
     
  `}
`;
const Flexbox = styled.section`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;

  Button {
    ${media.tablet`
     font-size: 1.2rem; 
  `}
  }
`;

const Description = styled.div`
  width: 100%;
  padding: 0 1rem;
  p {
    font-size: 0.8rem;
    padding: 0 0.5rem;
    border-left: solid var(--orange) 1px;
    text-align: justify;
    margin: 0.5rem 0;

    ${media.tablet`
    font-size: .9rem; 
  `}
  }
  h5 {
    text-transform: lowercase;
    text-align: right;
    margin: 0.5rem 0;
    padding: 0.1rem 1rem 0.1rem 0;
    background: var(--dark);
    color: var(--light);

    ${media.tablet`
     font-size: 1rem; 
     padding: 0.3rem 1rem 0.3rem 0;
  `}
  }
`;

const Icon = styled.img`
  width: 0.8rem;
  height: auto;
  margin: 0.3rem 0.3rem 0 0.4rem;

  ${media.tablet`
     width: 1.2rem;
  `}
`;

const H3 = styled.h3`
  margin: 1rem auto;
  text-align: center;
  max-width: 60%;

  ${media.tablet`
     font-size: 1.5rem;  
  `}
`;

const H5 = styled.h5`
  text-align: center;
`;

const EditButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
`;

Product.propTypes = {
  userId: PropTypes.string,
};
