// Validation 기준 상수
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD_LENGTH = 8;

//이메일 유효성 검사 함수
export function validateEmail(email) {
  return EMAIL_REGEX.test(email.trim());
}

// 공통 에러 메세지 상수
export const ERROR_MESSAGE = {
  emptyEmail: "이메일을 입력해주세요.",
  invalidEmail: "잘못된 이메일 형식입니다.",
  emptyPassword: "비밀번호를 입력해주세요.",
  shortPassword: `비밀번호를 ${MIN_PASSWORD_LENGTH}자 이상 입력해주세요.`,
  emptyNickname: "닉네임을 입력해주세요.",
  passwordMismatch: "비밀번호가 일치하지 않습니다.",
};

// 이동 경로 상수
export const ROUTES = {
  items: "/items",
  login: "../login/login.html",
};