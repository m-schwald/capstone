import styled from "styled-components";
import { useState } from "react";
import { useQuery } from "react-query";

import ContainerFlat from "../components/ContainerFlat";
import CardOffering from "../components/CardOffering";
import Button from "../components/Button";
import Link from "../components/Link";

import search from "../assets/images/search.svg";

export default function Searching() {
  const getGadg = async () => {
    const data = await fetch("http://localhost:4000/get-gadg");
    const result = await data.json();
    return result;
  };

  const { isLoading, isError, data, error } = useQuery("allGadges", getGadg);

  const [availableOnly, setAvailableOnly] = useState(false);
  const [category, setCategory] = useState("all");
  const [size, setSize] = useState("all");

  const categoryOptions = data?.map((item) => item.category);
  categoryOptions?.unshift("all");

  const sizeOptions = data?.map((item) => item.size);
  sizeOptions?.unshift("all");

  const byAvailability = (item) => {
    if (!availableOnly) return item;
    return item.isAvailable;
  };

  const byCategory = (item) => {
    if (category === "all") return item;
    return item.category === category;
  };
  const bySize = (item) => {
    if (size === "all") return item;
    return item.size === size;
  };

  const items = data?.filter(byCategory).filter(bySize).filter(byAvailability);

  return (
    <ContainerFlat>
      <Flexbox>
        <InputName placeholder="looking for...?" />
        <Search src={search} />
      </Flexbox>
      <Flexbox>
        <Button
          disabled={!data}
          onClick={() => setAvailableOnly(!availableOnly)}
        >
          {availableOnly ? "show all" : "available only"}
        </Button>
        <Label htmlFor="choose_category">
          category
          <select
            id="choose_category"
            onChange={(event) => setCategory(event.target.value)}
          >
            {categoryOptions?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Label>
        <Label htmlFor="choose_size">
          size
          <select
            id="choose_size"
            onChange={(event) => setSize(event.target.value)}
          >
            {sizeOptions?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Label>
      </Flexbox>
      <Flexbox>
        {isLoading ? (
          <p>is loading... </p>
        ) : isError ? (
          <p>Error: {error.message} </p>
        ) : (
          items.map((item) => (
            <Link key={item._id} to={`/product/${item._id}`}>
              <CardOffering item={item} />
            </Link>
          ))
        )}
      </Flexbox>
    </ContainerFlat>
  );
}

const InputName = styled.input`
  margin: 0;
  padding: 0.3rem;
  font-size: 1rem;

  &:focus {
    outline: var(--orange) 1px solid;
    background: var(--orange2);
  }
`;

const Search = styled.img`
  width: 4vw;
  margin: 0 3vw 0;
`;

const Flexbox = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 0.8rem;

  select {
    width: 80%;
  }
`;
