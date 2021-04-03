import styled from "styled-components";
import { useState } from "react";

import ContainerFlat from "../components/ContainerFlat";
import CardOffering from "../components/CardOffering";
import Button from "../components/Button";
import Link from "../components/Link";

import search from "../assets/images/search.svg";

export default function Searching({ items, userId }) {
  const [availableOnly, setAvailableOnly] = useState(false);
  const [category, setCategory] = useState("all");
  const [size, setSize] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryOptions = items?.map((item) => item.category);
  categoryOptions?.unshift("all");

  const sizeOptions = items?.map((item) => item.size);
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

  const data = items
    ?.filter((value) => {
      if (searchTerm === "") {
        return value;
      } else if (
        value.gadgName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.facts.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return value;
      }
    })
    .filter((item) => item.ownerId !== userId)
    .filter(byCategory)
    .filter(bySize)
    .filter(byAvailability);

  return (
    <ContainerFlat>
      <Flexbox>
        <InputName
          placeholder="looking for...?"
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Search src={search} />
      </Flexbox>
      <Flexbox>
        <Button
          disabled={!items}
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
        {data.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`}>
            <CardOffering item={item} />
          </Link>
        ))}
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
