import React from "react";
import Cart from "../Cart/Cart";
import { Container, LogoIcon } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoIcon />
      <Cart />
    </Container>
  );
};

export default Header;
