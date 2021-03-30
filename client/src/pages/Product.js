import { useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useRouteMatch, useParams, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

import Toggle from "../components/IconToggle";
import IconUser from "../components/IconUser";
import FlexboxRow from "../components/FlexboxRow";
import Image from "../components/Image";
import H3 from "../components/H3";
import Button from "../components/Button";
import ContainerFlat from "../components/ContainerFlat";
import { StyledModal } from "../components/reusableModal";

import phone from "../assets/images/phone.svg";
import mail from "../assets/images/mail.svg";

export default function Product({ onAvailable, userId }) {
  const { path } = useRouteMatch();
  const { _id } = useParams();
  let history = useHistory();

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [ownerOpen, setOwnerOpen] = useState(false);

  const getGadg = async (id) => {
    const data = await fetch("http://localhost:4000/get-gadg/" + id);
    const result = await data.json();
    return result;
  };
  const { isLoading, isError, data, error } = useQuery("product", () =>
    getGadg(_id)
  );

  const { mutateAsync: updateGadg } = useMutation(getGadg, {
    onSuccess: () => console.log("bling!"),
  });

  console.log("owner", data?.ownerId);
  console.log("user", userId);
  // not ready yet
  const getOwner = async () => {
    const owner = await fetch(
      `http://localhost:4000/get-owner/${data?.ownerId}`
    );
    const result = await owner.json();
    return result;
  };
  const { data: owner } = useQuery("owner", getOwner);
  console.log(owner?.userName);
  // Ende

  const goBack = () => {
    history.goBack();
  };

  const imageProduct = data?.image ? `/products/${data.image}` : "";
  const imageOwner = owner?.image ? `/users/${owner.image}` : "";

  async function deleteItem() {
    try {
      const response = await axios.delete(
        "http://localhost:4000/get-gadg/" + data._id
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    goBack();
  }

  return isLoading ? (
    <p>is loading... </p>
  ) : isError ? (
    <p>Error: {error.message} </p>
  ) : data ? (
    <ContainerFlat>
      <FlexboxRow>
        <H3 text={data.gadgName} />
        <Toggle
          onClick={updateGadg}
          available={data.isAvailable}
          onAvailable={onAvailable}
        />
        <span>
          <DeleteIcon
            show={data?.ownerId === userId}
            onClick={() => setDeleteOpen(!deleteOpen)}
          >
            X
          </DeleteIcon>
        </span>
        <StyledModal show={deleteOpen} handleClose={() => setDeleteOpen(false)}>
          <p>do you really want to delete {data.gadgName}?</p>
          <Button onClick={deleteItem}>delete it!</Button>
        </StyledModal>
      </FlexboxRow>
      <Img src={imageProduct} />
      <Description>
        <h5> Description </h5>
        <p>{data.description}</p>
      </Description>
      <Flexbox>
        <FlexboxColumn>
          <IconOwner
            src={imageOwner}
            show={data?.ownerId === userId}
            onClick={() => setOwnerOpen(!ownerOpen)}
          />
          <StyledModal show={ownerOpen} handleClose={() => setOwnerOpen(false)}>
            <p>
              {data.gadgName} is owned by
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
            Size: <br /> {data.size}
          </p>
          <p>
            category:
            <br /> {data.category}
          </p>
        </FlexboxColumn>
        <Description>
          <h5> Facts </h5>
          <p>{data.facts}</p>
          <h5> preferences for usage </h5>
          <p>{data.personalInfo}</p>
        </Description>
      </Flexbox>
      <Button onClick={goBack}>go back</Button>
    </ContainerFlat>
  ) : null;
}
const DeleteIcon = styled.span`
  color: var(--light);
  margin: 0 0.5rem;
  padding: 0.2rem 0.5rem;
  text-shadow: white 0 0 10px;
  display: none;
  width: 3rem;
  height: 1rem;

  border-radius: 50%;
  text-align: center;
  background: darkred;

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
