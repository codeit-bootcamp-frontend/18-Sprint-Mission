// style 에 사용될 util 함수 선언 
export const convertPxToRem = (px, base = 16) => `${px / base}rem`;
export const convertPxToVw = (px, base = 375) => `${((px / base) * 100).toFixed(3)}vw`;
export const convertLineHeightToPercent = (lh, font) => Number((lh / font).toFixed(2));