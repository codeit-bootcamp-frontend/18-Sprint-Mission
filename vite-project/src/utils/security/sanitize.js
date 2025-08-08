import DOMPurify from "dompurify";

export const clean = (html) => {
  return DOMPurify.sanitize(html);
};