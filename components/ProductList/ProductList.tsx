import Filter from "../Filter/Filter";
import Product from "../Product/Product";
import MobileModal from "../Modal/MobileModal";
import Pagination from "../Pagination/Pagination";
import SortIcon from "../../public/svgs/sort-icon";
import useMobileOnly from "../../hooks/useMobileOnly";
import { ProductListProps } from "./ProductList.types";
import React, { useEffect, useRef, useState } from "react";
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
  ProductsContainer,
  ListHeadingDivider,
} from "./ProductList.styles";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const isMobile = useMobileOnly();
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (!isMobile) setDisplay(false);
  }, [isMobile]);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  return (
    <Container ref={ref}>
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
        <ProductsContainer>
          <Products>
            {currentProducts.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </Products>
          <Pagination currentPage={currentPage} perPage={productsPerPage} total={products.length} paginate={paginate} />
        </ProductsContainer>
      </ListBody>
    </Container>
  );
};

export default ProductList;
