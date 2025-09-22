const breakpoints = {
  sm: "768px",
  md: "1024px",
  lg: "1280px",
};

const media = key => {
  return `@media (max-width: ${breakpoints[key]})`;
};

export default media;
