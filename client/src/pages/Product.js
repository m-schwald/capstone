import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import {
  NavLink,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";

import Toggle from "../components/IconToggle";
import Button from "../components/Button";
import Image from "../components/Image";
import ContainerFlat from "../components/ContainerFlat";
import { StyledModal } from "../components/reusableModal";

import phone from "../assets/images/phone.svg";
import mail from "../assets/images/mail.svg";
import trash from "../assets/images/trash.svg";
import edit from "../assets/images/wrench.svg";

export default function Product({ userId }) {
  const { path } = useRouteMatch();
  const { _id } = useParams();
  let history = useHistory();

  const [gadg, setGadg] = useState({});
  const [owner, setOwner] = useState({});

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [ownerOpen, setOwnerOpen] = useState(false);

  const getGadg = async (id) => {
    const gadg = await fetch("http://localhost:4000/get-gadg/" + id);
    const result = await gadg.json();
    return result;
  };

  const getOwner = async (ownerId) => {
    const owner = await fetch(`http://localhost:4000/get-owner/${ownerId}`);
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

  const imageProduct = gadg?.image ? `/products/${gadg.image}` : "";
  const imageOwner = owner?.image ? `/users/${owner.image}` : "";

  async function deleteItem() {
    try {
      const response = await axios.delete(
        "http://localhost:4000/get-gadg/" + gadg._id
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    goBack();
  }

  return (
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

        <StyledModal show={deleteOpen} handleClose={() => setDeleteOpen(false)}>
          <p>Do you really want to delete</p>
          <H5> {gadg.gadgName} </H5>
          <p>?</p>
          <Button onClick={deleteItem}>delete it!</Button>
        </StyledModal>
      </FlexboxRow>
      <Img src={imageProduct} />
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
          <StyledModal show={ownerOpen} handleClose={() => setOwnerOpen(false)}>
            <p>
              {gadg.gadgName} is owned by
              <br /> {owner?.userName}.
            </p>
            <p>
              You can get it at <br />
              {owner?.adress}
            </p>
            <Flexbox>
              <Button>
                <Icon src={phone} />
              </Button>
              <Button>
                <Icon src={mail} />
              </Button>
            </Flexbox>
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
      <Button onClick={goBack}>go back</Button>
    </ContainerFlat>
  );
}
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

  & p {
    padding: 0.5rem;
    margin: 0;
    font-size: 0.8rem;
    text-align: center;
  }
`;

const FlexboxRow = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Flexbox = styled.section`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;
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
  }
  h5 {
    text-transform: lowercase;
    text-align: right;
    margin: 0.5rem 0;
    padding: 0.1rem 1rem 0.1rem 0;
    background: var(--dark);
    color: var(--light);
  }
`;

const Icon = styled.img`
  width: 0.8rem;
  height: auto;
  margin: 0.3rem 0.3rem 0 0.4rem;
`;

const H3 = styled.h3`
  margin: 1rem auto;
  text-align: center;
  max-width: 60%;
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
