import styled from "styled-components";
import { useState } from "react";

import ContainerFlat from "../components/ContainerFlat";
import CardOffering from "../components/CardOffering";
import Button from "../components/Button";
import Link from "../components/Link";

import search from "../assets/images/search.svg";

export default function Searching({ items }) {
  const [filtered, setFiltered] = useState(false);
  //const [category, setCategory] = useState("all");

  const categoryOptions = items.map((item) => item.category);
  const sizeOptions = items.map((item) => item.size);

  const filterAvailable = () => {
    const availableItems = items.filter((item) => item.isAvailable);
    return availableItems;
  };

  const filterCategory = (event) => {
    const selectedItems = items.filter(
      (item) => item.category === event.target.value
    );
    return selectedItems;
  };

  const filterSize = (event) => {
    const selectedItems = items.filter(
      (item) => item.size === event.target.value
    );
    return selectedItems;
  };

  const data = filtered ? filterAvailable() : items;

  return (
    <ContainerFlat>
      <Flexbox>
        <InputName placeholder="looking for...?" />
        <Search src={search} />
      </Flexbox>
      <Flexbox>
        <Button
          disabled={!items}
          onClick={() => {
            if (filterAvailable()) setFiltered(!filtered);
          }}
        >
          {filtered ? "show all" : "available only"}
        </Button>
        <Label htmlFor="choose_category">
          category
          <Choice id="choose_category" onChange={filterCategory}>
            {categoryOptions.map((option) => (
              <>
                <option value={option}>{option}</option>
              </>
            ))}
          </Choice>
        </Label>
        <Label htmlFor="choose_size">
          size
          <Choice id="choose_size" onChange={filterSize}>
            {sizeOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Choice>
        </Label>
      </Flexbox>
      <Flexbox>
        {data.map((item, index) => (
          <Link to={`/product/${item._id}`}>
            <CardOffering key={index} item={item} />
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
  justify-content: space-around;
`;

const Choice = styled.select`
  width: 80%;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;
