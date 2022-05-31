import styled from "styled-components";
import Close from "../../public/svgs/close";
import CartIcon from "../../public/svgs/cart-icon";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  position: relative;
`;

export const Indicator = styled.p`
  position: absolute;
  right: -0.75rem;
  bottom: -0.75rem;
  background-color: #000;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.07em;
  padding: 0 0.25rem;

  ${breakpoints.mobile} {
    font-size: 0.75rem;
    right: -0.5rem;
    bottom: -0.5rem;
  }
`;

export const StyledCartIcon = styled(CartIcon)`
  cursor: pointer;

  ${breakpoints.mobile} {
    width: 2rem;
    height: 2rem;
  }
`;

export const ItemContainer = styled.div`
  position: absolute;
  right: 0;
  width: 28rem;
  max-width: calc(100vw - 2rem);
  max-height: 30rem;
  min-height: 10rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.25rem 0;
  padding: 1.375rem 1.5rem;
  border: 4px solid #e4e4e4;
  z-index: 2;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem 0;
  overflow-y: auto;
`;

export const StyledCloseIcon = styled(Close)`
  cursor: pointer;
  min-height: 1.375rem;
  margin-left: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 1.125rem;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;

export const Text = styled.p`
  color: #000000;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const ItemPrice = styled.p`
  color: #656565;
  font-size: 1.75rem;
  font-weight: 400;
`;

export const ItemImage = styled.img`
  width: 40%;
  height: auto;
`;

export const CartDivider = styled.span`
  border: 1px solid #e4e4e4;
`;

export const EmptyText = styled(Text)`
  text-align: center;
`;
