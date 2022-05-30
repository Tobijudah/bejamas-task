import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const FilterContainer = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2.25rem 0;

  ${breakpoints.mobile} {
    width: 100%;
    margin-bottom: 6.75rem;
    overflow-y: auto;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.75rem 0;
`;

export const FilterName = styled.p`
  color: #000;
  font-size: 1.375rem;
  font-weight: 700;
`;

export const FilterItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem 0;
`;

export const FlexItem = styled.p`
  color: #1d1d1d;
  font-size: 1.375rem;
  font-weight: 400;
`;

export const FilterDivider = styled.span`
  width: 16.75rem;
  border: 1px solid #e4e4e4;

  ${breakpoints.mobile} {
    width: 100%;
  }
`;

export const FilterButtons = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0 1.125rem;
  background-color: #fff;
  padding: 1.75rem 1rem;
  border-top: 4px solid #e4e4e4;

  ${breakpoints.mobile} {
    display: flex;
  }
`;
