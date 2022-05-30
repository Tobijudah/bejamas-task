import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5%;

  ${breakpoints.mobile} {
    padding: 0 1rem;
  }
`;

export const HomeDivider = styled.span`
  margin: 4rem 0;
  border: 1px solid #e4e4e4;

  ${breakpoints.mobile} {
    margin: 3rem 0;
  }
`;
