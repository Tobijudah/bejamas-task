import React from "react";
import Product from "../Product/Product";
import SortIcon from "../../public/svgs/sort-icon";
import { ProductListProps } from "./ProductList.types";
import DropdownIcon from "../../public/svgs/dropdown-icon";
import {
  Products,
  ListBody,
  ListSort,
  Container,
  ListFilter,
  ListHeader,
  ListHeading,
  ListSortItem,
  GreyListHeading,
  ListHeadingDivider,
} from "./ProductList.styles";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Container>
      <ListHeader>
        <ListHeading>
          Photography <ListHeadingDivider>/</ListHeadingDivider> <GreyListHeading>Premium Photos</GreyListHeading>
        </ListHeading>
        <ListSort>
          <ListSortItem>
            <SortIcon /> Sort By
          </ListSortItem>
          <ListSortItem>
            Price <DropdownIcon />
          </ListSortItem>
        </ListSort>
      </ListHeader>
      <ListBody>
        <ListFilter />
        <Products>
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </Products>
      </ListBody>
    </Container>
  );
};

export default ProductList;
