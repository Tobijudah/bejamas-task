import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({ children, className, mode = "dark", width }) => {
  return (
    <StyledButton mode={mode} width={width} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
