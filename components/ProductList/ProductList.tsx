import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import Product from "../Product/Product";
import MobileModal from "../Modal/MobileModal";
import Pagination from "../Pagination/Pagination";
import useMobileOnly from "../../hooks/useMobileOnly";
import { ProductListProps } from "./ProductList.types";
import React, { useEffect, useRef, useState } from "react";
import useComponentDidUpdate from "../../hooks/useComponentDidUpdate";
import {
  Products,
  ListBody,
  Container,
  ListFilter,
  ListHeader,
  ListHeading,
  GreyListHeading,
  StyledFilterIcon,
  ProductsContainer,
  ListHeadingDivider,
} from "./ProductList.styles";

const ProductList: React.FC<ProductListProps> = ({ categories, products }) => {
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

  useComponentDidUpdate(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  return (
    <Container ref={ref}>
      {isMobile && (
        <MobileModal display={display} onClose={() => setDisplay(false)}>
          <Filter categories={categories} close={() => setDisplay(false)} />
        </MobileModal>
      )}
      <ListHeader>
        <ListHeading>
          Photography <ListHeadingDivider>/</ListHeadingDivider> <GreyListHeading>Premium Photos</GreyListHeading>
        </ListHeading>
        <StyledFilterIcon onClick={() => setDisplay(true)} />
        <Sort />
      </ListHeader>
      <ListBody>
        <ListFilter categories={categories} />
        <ProductsContainer>
          <Products>
            {currentProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </Products>
          <Pagination currentPage={currentPage} perPage={productsPerPage} total={products.length} paginate={paginate} />
        </ProductsContainer>
      </ListBody>
    </Container>
  );
};

export default ProductList;
