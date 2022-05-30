import React from "react";
import { FilterProps } from "./Filter.types";
import { FilterContainer, FilterGroup, FilterName, FilterItems, FlexItem } from "./Filter.styles";

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
    </FilterContainer>
  );
};

export default Filter;
