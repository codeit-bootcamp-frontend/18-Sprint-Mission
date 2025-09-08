function colorVariable(name, shade) {
  return `var(--color-${name}-${Math.max(100, Math.min(900, shade))})`;
}

const Colors = {
  state: {
    100: colorVariable("state", 100),
    200: colorVariable("state", 200),
    300: colorVariable("state", 300),
    400: colorVariable("state", 400),
    500: colorVariable("state", 500),
    800: colorVariable("state", 800),
    900: colorVariable("state", 900),
  },
  violet: {
    100: colorVariable("violet", 100),
    600: colorVariable("violet", 600),
  },
  rose: {
    500: colorVariable("rose", 500),
  },
  lime: {
    300: colorVariable("lime", 300),
  },
  amber: {
    800: colorVariable("amber", 800),
  },
};

export default Colors;
