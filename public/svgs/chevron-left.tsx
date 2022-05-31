import { SVGProps } from "react";

export default function ChevronLeft(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11 2L3 10L11 18" stroke="black" strokeWidth="3" />
    </svg>
  );
}