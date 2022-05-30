import React from "react";
import Button from "../Button/Button";
import { FilterProps } from "./Filter.types";
import { FilterContainer, FilterGroup, FilterName, FilterItems, FlexItem, FilterButtons } from "./Filter.styles";

const Filter: React.FC<FilterProps> = ({ className }) => {
  return (
    <FilterContainer className={className}>
      <FilterGroup>
        <FilterName>Category</FilterName>
        <FilterItems>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
        </FilterItems>
      </FilterGroup>
      <svg width="268" height="2" viewBox="0 0 268 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H268" stroke="#C2C2C2" />
      </svg>
      <FilterGroup>
        <FilterName>Price range</FilterName>
        <FilterItems>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
          <FlexItem>People</FlexItem>
        </FilterItems>
      </FilterGroup>
      <FilterButtons>
        <Button mode="light">clear</Button>
        <Button>save</Button>
      </FilterButtons>
    </FilterContainer>
  );
};

export default Filter;
