import styled from "styled-components";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0 2.5rem;
  border: 3px solid #000;
  width: ${({ width }) => width || "100%"};
  color: ${({ mode }) => (mode === "dark" ? "#fff" : "#000")};
  background-color: ${({ mode }) => (mode === "dark" ? "#000" : "#fff")};
`;
