import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import useStore from "../../hooks/useStore";
import { FilterProps } from "./Filter.types";
import { Category } from "../../types/product";
import React, { useEffect, useState } from "react";
import useMobileOnly from "../../hooks/useMobileOnly";
import { FilterContainer, FilterGroup, FilterName, FilterItems, FilterButtons, FilterDivider } from "./Filter.styles";

const Filter: React.FC<FilterProps> = ({ categories, className, close }) => {
  const isMobile = useMobileOnly();
  const { state, dispatch } = useStore();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const handleCategoryClick = (category: Category) => {
    const newSelectedCategories = [...selectedCategories];
    const index = newSelectedCategories.indexOf(category);
    if (index === -1) {
      newSelectedCategories.push(category);
    } else {
      newSelectedCategories.splice(index, 1);
    }
    setSelectedCategories(newSelectedCategories);
  };

  const updateFilters = () => {
    dispatch({
      type: "FILTER_PRODUCTS_BY_CATEGORIES",
      data: { products: state.products, categories: selectedCategories },
    });
    close && close();
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    dispatch({
      type: "FILTER_PRODUCTS_BY_CATEGORIES",
      data: { products: state.products, categories: [] },
    });
    close && close();
  };

  useEffect(() => {
    !isMobile && updateFilters();
  }, [selectedCategories, state.products]);

  return (
    <FilterContainer className={className}>
      <FilterGroup>
        <FilterName>Category</FilterName>
        <FilterItems>
          {categories.map((category) => (
            <CheckBox
              key={category}
              text={category}
              onClick={() => handleCategoryClick(category)}
              checked={selectedCategories.includes(category)}
            />
          ))}
        </FilterItems>
      </FilterGroup>
      <FilterDivider />
      {/* <FilterGroup>
        <FilterName>Price range</FilterName>
        <FilterItems>
          <FilterItem>People</FilterItem>
          <FilterItem>People</FilterItem>
          <FilterItem>People</FilterItem>
          <FilterItem>People</FilterItem>
          <FilterItem>People</FilterItem>
          <FilterItem>People</FilterItem>
        </FilterItems>
      </FilterGroup> */}
      <FilterButtons>
        <Button onClick={clearFilters} mode="light">
          clear
        </Button>
        <Button onClick={updateFilters}>save</Button>
      </FilterButtons>
    </FilterContainer>
  );
};

export default Filter;
