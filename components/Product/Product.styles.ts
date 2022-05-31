import Button from "../Button/Button";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.7/1;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Tag = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  color: #000000;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.375rem 1.5rem;
`;

export const CartButton = styled(Button)`
  position: absolute;
  bottom: 0;
  padding: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;

  ${ImageContainer}:hover & {
    transform: translateY(0);
  }

  ${breakpoints.mobile} {
    transform: translateY(0);
    transition: none;
  }
`;

export const Category = styled.p`
  color: #656565;
  font-size: 1.375rem;
  font-weight: 700;
`;

export const Name = styled.p`
  color: #000;
  font-size: 2.125rem;
  font-weight: 700;
`;

export const Price = styled.p`
  color: #656565;
  font-size: 1.875rem;
  font-weight: 400;
`;
