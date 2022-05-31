import React from "react";
import Button from "../Button/Button";
import { FilterProps } from "./Filter.types";
import { FilterContainer, FilterGroup, FilterName, FilterItems, FlexItem, FilterButtons, FilterDivider } from "./Filter.styles";

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
      <FilterDivider />
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
        <Button onClick={() => {}} mode="light">
          clear
        </Button>
        <Button onClick={() => {}}>save</Button>
      </FilterButtons>
    </FilterContainer>
  );
};

export default Filter;
