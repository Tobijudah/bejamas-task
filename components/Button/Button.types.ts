import CSSTypes from "csstype";

export type ButtonProps = {
  children: string;
  className?: string;
  onClick: () => void;
  mode?: "dark" | "light";
  width?: CSSTypes.Property.Width;
};
