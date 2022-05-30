import React from "react";
import { MobileModalProps } from "./MobileModal.types";
import { CloseIcon, Container, Overlay } from "./MobileModal.styles";
import { useDisableBodyScroll } from "../../hooks/useDisablePageScroll";

const MobileModal: React.FC<MobileModalProps> = ({ children, display, onClose }) => {
  useDisableBodyScroll(display);

  return (
    <Overlay display={display}>
      <Container display={display}>
        <CloseIcon onClick={onClose} />
        {children}
      </Container>
    </Overlay>
  );
};

export default MobileModal;
