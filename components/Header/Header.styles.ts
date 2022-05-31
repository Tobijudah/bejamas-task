import styled from "styled-components";
import Logo from "../../public/svgs/logo";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 2rem 5%;
  z-index: 1;

  ${breakpoints.mobile} {
    padding: 2rem 1rem;
  }
`;

export const LogoIcon = styled(Logo)`
  ${breakpoints.mobile} {
    height: 1.25rem;
    width: fit-content;
  }
`;
