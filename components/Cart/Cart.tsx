import React from "react";
import Button from "../Button/Button";
import useStore from "../../hooks/useStore";
import ClickAwayListener from "react-click-away-listener";
import {
  Item,
  Text,
  Items,
  ItemInfo,
  Container,
  EmptyText,
  Indicator,
  ItemImage,
  ItemPrice,
  CartDivider,
  IconContainer,
  ItemContainer,
  StyledCartIcon,
  StyledCloseIcon,
} from "./Cart.styles";

const Cart: React.FC = () => {
  const { state, dispatch } = useStore();

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART_MODAL" });
  };

  const toggleCart = () => {
    state.cartModal ? closeCart() : dispatch({ type: "OPEN_CART_MODAL" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    closeCart();
  };

  return (
    <Container>
      <IconContainer>
        <StyledCartIcon onClick={toggleCart} />
        {state.cart.length > 0 && <Indicator>{state.cart.length}</Indicator>}
      </IconContainer>
      {state.cartModal && (
        <ClickAwayListener onClickAway={closeCart}>
          <ItemContainer>
            <StyledCloseIcon onClick={closeCart} />
            {state.cart.length > 0 ? (
              <>
                <Items>
                  {state.cart.map(({ name, price, image, currency }, index) => (
                    <Item key={index}>
                      <ItemInfo>
                        <Text>{name}</Text>
                        <ItemPrice>{currency.symbol + price}</ItemPrice>
                      </ItemInfo>
                      <ItemImage alt={image.alt} src={image.src} />
                    </Item>
                  ))}
                </Items>
                <CartDivider />
                <Button mode="light" onClick={clearCart}>
                  clear
                </Button>
              </>
            ) : (
              <EmptyText>No items in cart</EmptyText>
            )}
          </ItemContainer>
        </ClickAwayListener>
      )}
    </Container>
  );
};

export default Cart;
