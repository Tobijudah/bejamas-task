import { SVGProps } from "react";

export default function DropdownIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 5L10 13L18 5" stroke="black" strokeWidth="3" />
    </svg>
  );
}
