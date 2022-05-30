import styled from "styled-components";
import Close from "../../public/svgs/close";
import breakpoints from "../../styles/breakpoints";
import { MobileModalStyleProps } from "./MobileModal.types";

export const Overlay = styled.div<MobileModalStyleProps>`
  position: fixed;
  inset: 0;
  display: none;
  background-color: #00000033;
  z-index: 1;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ display }) => (display ? 1 : 0)};
  pointer-events: ${({ display }) => (display ? "auto" : "none")};

  ${breakpoints.mobile} {
    display: block;
  }
`;

export const Container = styled.div<MobileModalStyleProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90%;
  display: flex;
  background-color: #fff;
  padding: 1.25rem;
  overflow-y: auto;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ display }) => (display ? 1 : 0)};
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  right: 1.25rem;
  z-index: 1;
`;
