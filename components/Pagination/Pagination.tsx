import React from "react";
import { PaginationProps } from "./Pagination.types";
import { Container, Next, Previous, Text } from "./Pagination.styles";

const Pagination: React.FC<PaginationProps> = ({ perPage, total, paginate, currentPage }) => {
  const noOfPages = Math.ceil(total / perPage);

  return (
    <Container>
      <Previous $show={currentPage !== 1} onClick={() => paginate(currentPage - 1)} />
      {Array.from({ length: noOfPages }).map((_, index) => (
        <Text key={index} active={currentPage === index + 1} onClick={() => paginate(index + 1)}>
          {index + 1}
        </Text>
      ))}
      <Next $show={currentPage !== noOfPages} onClick={() => paginate(currentPage + 1)} />
    </Container>
  );
};

export default Pagination;
