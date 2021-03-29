import styled from "styled-components";
import axios from "axios";
import { useRouteMatch, useParams, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "react-query";

import Toggle from "../components/IconToggle";
import IconUser from "../components/IconUser";
import FlexboxRow from "../components/FlexboxRow";
import Image from "../components/Image";
import H3 from "../components/H3";
import Button from "../components/Button";
import ContainerFlat from "../components/ContainerFlat";

import snowboard from "../assets/images/snowboard.jpg";

export default function Product() {
  const { path } = useRouteMatch();
  const { _id } = useParams();
  let history = useHistory();

  const getGadg = async () => {
    const data = await fetch("http://localhost:4000/get-gadg/" + _id);
    const result = await data.json();
    return result;
  };

  const { isLoading, isError, data, error } = useQuery("product", getGadg);

  /*   const mutation = useMutation((deleteGadg) =>
    axios.get("http://localhost:4000/get-gadg + _id", deleteGadg)
  );

  const deleteItem = (item) => {
    mutation.mutate(
      
      )
    } */

  const goBack = () => {
    history.goBack();
  };

  return isLoading ? (
    <p>is loading... </p>
  ) : isError ? (
    <p>Error: {error.message} </p>
  ) : data ? (
    <ContainerFlat>
      <FlexboxRow>
        <H3 text={data.gadgName} />
        <Toggle available={data.isAvailable} />
      </FlexboxRow>
      <Img src={snowboard} />
      <Description>
        <h5> Description </h5>
        <p>{data.description}</p>
      </Description>
      <Flexbox>
        <FlexboxColumn>
          <IconUser />
          <p>{data.userId}</p>
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

const Img = styled(Image)`
  /* border: outset darkgrey 2px; */
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  border-radius: 5%;
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
