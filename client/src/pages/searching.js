import styled from "styled-components";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import media from "../mediaSizes";

import ContainerFlat from "../components/ContainerFlat";
import CardOffering from "../components/CardOffering";
import Button from "../components/Button";
import Link from "../components/Link";

export default function Searching({ gadges, userId }) {
  const [availableOnly, setAvailableOnly] = useState(false);
  const [category, setCategory] = useState("all");
  const [size, setSize] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [items, setItems] = useState(gadges);

  useEffect(() => {
    fetch("/gadg")
      .then((response) => response.json())
      .then((gadges) => setItems(gadges));
  }, []);

  const categoryOptions = items?.map((item) => item.category);
  categoryOptions?.unshift("all");
  let uniqueCategories = categoryOptions.filter((c, index) => {
    return categoryOptions.indexOf(c) === index;
  });

  const sizeOptions = items?.map((item) => item.size);
  sizeOptions?.unshift("all");
  let uniqueSizes = sizeOptions.filter((c, index) => {
    return sizeOptions.indexOf(c) === index;
  });

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
    ?.filter((item) => item.ownerId !== userId)
    .filter(byCategory)
    .filter(bySize)
    .filter(byAvailability)
    .filter((gadg) => {
      if (searchTerm === "") {
        return gadg;
      } else if (
        gadg.gadgName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gadg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gadg.facts.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return gadg;
      }
    });

  return (
    <ContainerFlat>
      <FlexboxRow>
        <InputName
          placeholder="looking for...?"
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
            console.log(event.target.value);
          }}
        />

        <FlexboxRow>
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
              {uniqueCategories?.map((option, index) => (
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
              {uniqueSizes?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Label>
        </FlexboxRow>
      </FlexboxRow>
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
  padding: 0.2rem 0.5rem;
  font-size: 1rem;

  ${media.tablet`
     padding: .5rem; 
  `}

  &:focus {
    outline: var(--orange) 1px solid;
    background: var(--orange2);
  }
`;

const Flexbox = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const FlexboxRow = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${media.tablet`
     display:flex; 
     justify-content: space-evenly; 
     margin-top: .3rem; 
     align-items: center;
  `}
  Button {
    ${media.tablet`
     font-size: 1rem; 
  `}
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin: 0 0.5rem;
  ${media.tablet`
     font-size: 1rem; 
  `}

  select {
    display: block;
    width: 100%;
    height: 1.4rem;

    ${media.tablet`
    font-size: 1rem; 
     width: 100%; 
     height: 2rem; 
  `}
    ${media.desktop`
     width: 100%; 
     height: 2rem; 
  `}
  }
`;

Searching.propTypes = {
  userId: PropTypes.string,
  gadges: PropTypes.any,
};
