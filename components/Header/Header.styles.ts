import styled from "styled-components";
import Logo from "../../public/svgs/logo";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const LogoIcon = styled(Logo)`
  ${breakpoints.mobile} {
    height: 1.25rem;
    width: fit-content;
  }
`;
