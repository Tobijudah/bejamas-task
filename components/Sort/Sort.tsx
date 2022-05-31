import useStore from "../../hooks/useStore";
import React, { useEffect, useState } from "react";
import DropdownIcon from "../../public/svgs/dropdown-icon";
import { Container, Gap, Select, StyledSortIcon, Title } from "./Sort.styles";

const Sort: React.FC = () => {
  const { dispatch } = useStore();
  const [sortBy, setSortBy] = React.useState("alpha");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const switchOrder = () => {
    if (order === "asc") setOrder("desc");
    else setOrder("asc");
  };

  useEffect(() => {
    if (sortBy === "alpha") dispatch({ type: "SORT_PRODUCTS_ALPHABETICALLY", order });
    else if (sortBy === "price") dispatch({ type: "SORT_PRODUCTS_BY_PRICE", order });
  }, [dispatch, order, sortBy]);

  return (
    <Container>
      <Gap title="Change order" onClick={switchOrder}>
        <Title>Sort By</Title>
        <StyledSortIcon order={order} />
      </Gap>
      <Gap>
        <Select name="sort" onChange={onSelectChange} value={sortBy}>
          <option value="alpha">Alphabetically</option>
          <option value="price">Price</option>
        </Select>
        <DropdownIcon />
      </Gap>
    </Container>
  );
};

export default Sort;
