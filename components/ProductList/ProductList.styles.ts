import Filter from "../Filter/Filter";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import FilterIcon from "../../public/svgs/filter-icon";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.75rem 0;

  ${breakpoints.mobile} {
    gap: 1.25rem 0;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListHeading = styled.p`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  color: #000;
  font-size: 1.875rem;
  font-weight: 700;

  ${breakpoints.mobile} {
    font-size: 1.125rem;
    gap: 0 0.25rem;
  }
`;

export const ListHeadingDivider = styled.span`
  color: #000;
  font-size: 2.125rem;
  font-weight: 700;
`;

export const GreyListHeading = styled.span`
  color: #9b9b9b;
  font-size: 1.875rem;
  font-weight: 400;

  ${breakpoints.mobile} {
    font-size: 1.125rem;
  }
`;

export const StyledFilterIcon = styled(FilterIcon)`
  display: none;

  ${breakpoints.mobile} {
    display: block;
  }
`;

export const ListFilter = styled(Filter)`
  max-width: 20%;
`;

export const ListBody = styled.div`
  display: flex;
  gap: 0 3.125rem;

  & > ${ListFilter} {
    ${breakpoints.mobile} {
      display: none;
    }
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 6.5rem 0;

  ${breakpoints.mobile} {
    gap: 5rem 0;
  }
`;

export const Products = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(16.25rem, calc((100% - 15%) / 3)), 1fr));
  gap: 2rem 5%;

  ${breakpoints.mobile} {
    gap: 3rem 0;
  }
`;
