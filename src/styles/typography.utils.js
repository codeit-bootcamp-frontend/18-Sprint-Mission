export const convertPxToRem = (px, base = 16) => `${px / base}rem`;
export const convertPxToVw = (px, base = 375) => `${((px / base) * 100).toFixed(3)}vw`;
export const convertLineHeightToPercent = (lh, font) => Number((lh / font).toFixed(2));

export const typography = {
  "txt-4xl": {
    fontSize: 40,
    lineHeight: 56,
    valClamp: 28,
    minClamp: 24,
    tabletSize: 34,
  },
  "txt-3xl": {
    fontSize: 32,
    lineHeight: 42,
    valClamp: 24,
    minClamp: 20,
    tabletSize: 28,
  },
  "txt-2xl": {
    fontSize: 24,
    lineHeight: 32,
    valClamp: 20,
    minClamp: 18,
    tabletSize: 22,
  },
  "txt-xl": {
    fontSize: 20,
    lineHeight: 32,
    valClamp: 18,
    minClamp: 16,
  },
  "txt-2lg": {
    fontSize: 18,
    lineHeight: 26,
    valClamp: 16,
    minClamp: 14,
  },
  "txt-lg": {
    fontSize: 16,
    lineHeight: 26,
    valClamp: 15,
    minClamp: 14,
  },
  "txt-md": {
    fontSize: 14,
    lineHeight: 24,
    valClamp: 13,
  },
  "txt-sm": {
    fontSize: 13,
    lineHeight: 22,
    valClamp: 12,
  },
  "txt-xs": {
    fontSize: 12,
    lineHeight: 20,
    valClamp: 11,
  },
};

const generateTypographyCSS = () => {
  let typoCss = "";
  Object.entries(typography).forEach(([className, { fontSize, lineHeight }]) => {
    typoCss += `
        .${className} {
          font-size: ${convertPxToRem(fontSize)};
          line-height: ${convertLineHeightToPercent(lineHeight, fontSize)};
        }
      `;
  });

  typoCss += `@media all and (max-width: 1024px) {`;
  Object.entries(typography).forEach(([className, { tabletSize }]) => {
    if (tabletSize) {
      typoCss += `
         .${className} {
            font-size: ${convertPxToRem(tabletSize)};
         }
        `;
    }
  });
  typoCss += `}`;

  typoCss += `@media all and (max-width: 768px) {`;
  Object.entries(typography).forEach(([className, { valClamp, minClamp }]) => {
    if (minClamp) {
      typoCss += `
           .${className} {
              font-size: clamp(${convertPxToRem(minClamp)},
              ${convertPxToVw(valClamp)},
              ${convertPxToRem(valClamp)});
            }
        `;
    } else {
      typoCss += `
          .${className} {
             font-size: ${convertPxToRem(valClamp)};
            }
        `;
    }
  });
  typoCss += `}`;
  return typoCss;
};

export default generateTypographyCSS;
