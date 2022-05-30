import Button from "../Button/Button";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem 0;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  color: #000000;
  font-size: 2rem;
  font-weight: 700;
`;

export const FeaturedButton = styled(Button)`
  ${Top} > & {
    ${breakpoints.mobile} {
      display: none;
    }
  }
  ${Container} > & {
    display: none;
    ${breakpoints.mobile} {
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 35rem;

  ${breakpoints.mobile} {
    height: 15rem;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeaturedTag = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
  color: #000000;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1.5rem 3.5rem;

  ${breakpoints.mobile} {
    font-size: 1rem;
    padding: 1.25rem 3rem;
  }
`;

export const Bottom = styled.div`
  display: flex;

  ${breakpoints.mobile} {
    flex-direction: column;
    gap: 2rem 0;
  }
`;

export const BottomLeft = styled.div`
  width: 54%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem 0;

  ${breakpoints.mobile} {
    width: 100%;
  }
`;

export const BottomRight = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.5rem 0;
  text-align: right;

  ${breakpoints.mobile} {
    width: 100%;
    align-items: flex-start;
    text-align: left;
  }
`;

export const Heading = styled.p`
  color: #000000;
  font-size: 1.375rem;
  font-weight: 700;
`;

export const GreyHeading = styled(Heading)`
  color: #656565;
`;

export const Description = styled.p`
  color: #656565;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Recommendations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem 0;
`;

export const Images = styled.div`
  display: flex;
  gap: 0 2rem;

  ${breakpoints.mobile} {
    width: 100%;
    gap: 0 6%;
  }
`;

export const Image = styled.img`
  height: 9rem;
  width: 7.5rem;
  object-fit: cover;

  ${breakpoints.mobile} {
    width: 25%;
    height: auto;
    aspect-ratio: 0.8/1;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;

export const DetailsItem = styled.p`
  color: #656565;
  font-size: 1rem;
  font-weight: 400;
`;
