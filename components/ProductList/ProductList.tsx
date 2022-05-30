import Filter from "../Filter/Filter";
import Product from "../Product/Product";
import MobileModal from "../Modal/MobileModal";
import React, { useEffect, useState } from "react";
import SortIcon from "../../public/svgs/sort-icon";
import useMobileOnly from "../../hooks/useMobileOnly";
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
  StyledFilterIcon,
  ListHeadingDivider,
} from "./ProductList.styles";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const isMobile = useMobileOnly();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (!isMobile) setDisplay(false);
  }, [isMobile]);

  return (
    <Container>
      {isMobile && (
        <MobileModal display={display} onClose={() => setDisplay(false)}>
          <Filter />
        </MobileModal>
      )}
      <ListHeader>
        <ListHeading>
          Photography <ListHeadingDivider>/</ListHeadingDivider> <GreyListHeading>Premium Photos</GreyListHeading>
        </ListHeading>
        <StyledFilterIcon onClick={() => setDisplay(true)} />
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
