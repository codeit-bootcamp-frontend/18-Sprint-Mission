import { css } from "styled-components";

const fontStyle = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

const inputStyle = css`
  background-color: var(--color-secondary-100);
  padding: 16px 24px;
  border-radius: 12px;
`;

const inputTextStyle = css`
  ${fontStyle}
  width: 100%;
  border: none;
  background: none;
  padding: 0;
  color: var(--color-secondary-800);
`;

const inputPlaceholderStyle = css`
  color: var(--color-secondary-400);
  ${fontStyle}
`;

export { inputPlaceholderStyle, inputStyle, inputTextStyle };
