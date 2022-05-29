import React from "react";
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

const Featured: React.FC<FeaturedProps> = ({ name, image, category, details }) => {
  const { description, recommendations, size, dimensions } = details;
  return (
    <Container>
      <Top>
        <Name>{name}</Name>
        <FeaturedButton width="fit-content">add to cart</FeaturedButton>
      </Top>
      <ImageContainer>
        <FeaturedImage alt={image.alt} src={image.src} />
        <FeaturedTag>Photo of the day</FeaturedTag>
      </ImageContainer>
      <FeaturedButton>add to cart</FeaturedButton>
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
            <DetailsItem>Size: {size / 1024} mb</DetailsItem>
          </Details>
        </BottomRight>
      </Bottom>
    </Container>
  );
};

export default Featured;
