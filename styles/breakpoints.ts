const mediaQuery = (maxWidth: number) => `@media screen and (max-width: ${maxWidth}px)`;

const breakpoints = {
  mobile: mediaQuery(768),
};

export default breakpoints;
