import styled from "styled-components";

export const palette = {
  gray900: "#111827",
  gray800: "#1f2937",
  gray700: "#374151",
  gray600: "#4b5563",
  gray500: "#6b7280",
  gray400: "#9ca3af",
  gray200: "#e5e7eb",
  gray100: "#f3f4f6",
  gray50: "#f9fafb",
  blue: "#3692ff",
  menu: "#4b5563",
};

/**
 * 태그 지우기 버튼 div
 */
export const ItemsTag = styled.div`
  gap: 10px;
  height: 36px;
  border: none;
  background-color: ${palette.gray100};
  font-size: 16px;
  border-radius: 999px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
  margin-right: 10px;
`;
