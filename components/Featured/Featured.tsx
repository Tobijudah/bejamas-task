import React from "react";
import useStore from "../../hooks/useStore";
import { FeaturedProps } from "./Featured.types";
import {
  Top,
  Name,
  Image,
  Bottom,
  Images,
  Details,
  Heading,
  Container,
  BottomLeft,
  BottomRight,
  Description,
  DetailsItem,
  FeaturedTag,
  GreyHeading,
  FeaturedImage,
  FeaturedButton,
  ImageContainer,
  Recommendations,
} from "./Featured.styles";

const Featured: React.FC<FeaturedProps> = (props) => {
  const { state, dispatch } = useStore();
  const { name, image, category, details } = props;
  const { description, recommendations, size, dimensions } = details;
  const isProductInCart = state.cart.some(({ id }) => id === props.id);

  const handleClick = () => {
    if (isProductInCart) dispatch({ type: "REMOVE_FROM_CART", data: props.id });
    else {
      dispatch({ type: "OPEN_CART_MODAL" });
      dispatch({ type: "ADD_TO_CART", data: props });
    }
  };

  return (
    <Container>
      <Top>
        <Name>{name}</Name>
        <FeaturedButton width="fit-content" onClick={handleClick}>
          {isProductInCart ? "remove from cart" : "add to cart"}
        </FeaturedButton>
      </Top>
      <ImageContainer>
        <FeaturedImage alt={image.alt} src={image.src} />
        <FeaturedTag>Photo of the day</FeaturedTag>
      </ImageContainer>
      <FeaturedButton onClick={handleClick}>{isProductInCart ? "remove from cart" : "add to cart"}</FeaturedButton>
      <Bottom>
        <BottomLeft>
          <Heading>About {name}</Heading>
          <GreyHeading>{category}</GreyHeading>
          <Description>{description}</Description>
        </BottomLeft>
        <BottomRight>
          <Recommendations>
            <Heading>People also buy</Heading>
            <Images>
              {recommendations.map(({ alt, src }, index) => (
                <Image key={index} alt={alt} src={src} />
              ))}
            </Images>
          </Recommendations>
          <Details>
            <Heading>Details</Heading>
            <DetailsItem>
              Size: {dimensions.width} x {dimensions.height} pixel
            </DetailsItem>
            <DetailsItem>Size: {size / 1000} mb</DetailsItem>
          </Details>
        </BottomRight>
      </Bottom>
    </Container>
  );
};

export default Featured;
