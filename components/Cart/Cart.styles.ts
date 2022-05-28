import styled from "styled-components";
import CartIcon from "../../public/svgs/cart-icon";
import breakpoints from "../../styles/breakpoints";

export const StyledCartIcon = styled(CartIcon)`
  cursor: pointer;

  ${breakpoints.mobile} {
    width: 2rem;
    height: 2rem;
  }
`;
