import styled from "styled-components";
import ChevronLeft from "../../public/svgs/chevron-left";
import ChevronRight from "../../public/svgs/chevron-right";
import { IconProps, PaginationTextProps } from "./Pagination.types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1.125rem;
  margin: 0 auto;
`;

export const Previous = styled(ChevronLeft)<IconProps>`
  cursor: pointer;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
`;

export const Next = styled(ChevronRight)<IconProps>`
  cursor: pointer;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
`;

export const Text = styled.p<PaginationTextProps>`
  cursor: pointer;
  font-size: 1.75rem;
  color: ${({ active }) => (active ? "#000" : "#B4B4B4")};
  font-weight: ${({ active }) => (active ? "600" : "400")};
`;
