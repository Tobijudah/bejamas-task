import React from "react";
import { ProductProps } from "./Product.types";
import { CartButton, Category, Container, Image, ImageContainer, Name, Price, Tag } from "./Product.styles";

const Product: React.FC<ProductProps> = ({ category, currency, image, name, price, bestseller }) => {
  return (
    <Container>
      <ImageContainer>
        <Image alt={image.alt} src={image.src} />
        {bestseller && <Tag>Best Seller</Tag>}
        <CartButton>Add to cart</CartButton>
      </ImageContainer>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Price>{currency.symbol + price}</Price>
    </Container>
  );
};

export default Product;
