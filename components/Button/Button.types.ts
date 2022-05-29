import CSSTypes from "csstype";

export type ButtonProps = {
  children: string;
  className?: string;
  mode?: "dark" | "light";
  width?: CSSTypes.Property.Width;
};
