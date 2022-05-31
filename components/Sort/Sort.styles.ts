import styled from "styled-components";
import { SortIconProps } from "./Sort.types";
import breakpoints from "../../styles/breakpoints";
import SortIcon from "../../public/svgs/sort-icon";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;

  ${breakpoints.mobile} {
    display: none;
  }
`;

export const Gap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0 0.625rem;
`;

export const Title = styled.p`
  color: #9b9b9b;
  font-size: 1.375rem;
  font-weight: 400;
`;

export const StyledSortIcon = styled(SortIcon)<SortIconProps>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${({ order }) => (order === "asc" ? "0" : "180")}deg);
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: fit-content;
  background-color: transparent;
  color: #000;
  font-size: 1.375rem;
  font-weight: 400;
  border: none;

  &::-ms-expand {
    display: none;
  }
`;
