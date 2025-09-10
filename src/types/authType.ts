import { SetStateAction } from "react";

export interface VisibleValue {
  pw: boolean;
  checkPw: boolean;
}

export type VisibleKey = keyof VisibleValue;

export interface AuthType {
  visible: VisibleValue;
  setVisible: (prevState: SetStateAction<VisibleValue>) => void;
  onClickVisible: (e: string) => void;
  visibleEye_off: string;
  visibleEye_on: string;
}

export function isVisibleKey(value: string): value is VisibleKey {
  return value === "pw" || value === "checkPw";
}
