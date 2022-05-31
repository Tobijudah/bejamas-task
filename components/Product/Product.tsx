import React from "react";
import useStore from "../../hooks/useStore";
import { ProductProps } from "./Product.types";
import { CartButton, Category, Container, Image, ImageContainer, Name, Price, Tag } from "./Product.styles";

const Product: React.FC<ProductProps> = (props) => {
  const { state, dispatch } = useStore();
  const isProductInCart = state.cart.some(({ id }) => id === props.id);
  const { category, currency, image, name, price, bestseller } = props;

  const handleClick = () => {
    if (isProductInCart) dispatch({ type: "REMOVE_FROM_CART", data: props.id });
    else {
      dispatch({ type: "OPEN_CART_MODAL" });
      dispatch({ type: "ADD_TO_CART", data: props });
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Image alt={image.alt} src={image.src} />
        {bestseller && <Tag>Best Seller</Tag>}
        <CartButton onClick={handleClick}>{isProductInCart ? "Remove from cart" : "Add to cart"}</CartButton>
      </ImageContainer>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Price>{currency.symbol + price}</Price>
    </Container>
  );
};

export default Product;
