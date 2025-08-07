// 유효성 검사
export const isValidEmailFormat = (email) => {
  const reg = /^[0-9a-zA-Z]([\w.-]*[0-9a-zA-Z])?@[0-9a-zA-Z]([\w.-]*[0-9a-zA-Z])?\.[a-zA-Z]{2,}$/;
  return reg.test(email);
};
export const isValidPasswordFormat = (email) => {
  const reg = /^.{8,}$/; // 8자 이상 아무 문자
  return reg.test(email);
};

export const isInputEmpty = (value) => {
  return value.trim().length === 0;
};

// 유효성 검증 및 에러 메세지
export const validateEmail = (value) => {
  if (!value) return "이메일을 입력해주세요.";
  return isValidEmailFormat(value) ? "" : "잘못된 이메일 형식입니다.";
};

export const validateNickname = (value) => {
  return !isInputEmpty(value) ? "" : "닉네임을 입력해주세요";
};

export const validatePassword = (value) => {
  if (!value) return "비밀번호를 입력해주세요.";
  return isValidPasswordFormat(value) ? "" : "비밀번호를 8자 이상 입력해주세요.";
};

export const validatePasswordConfirm = (confirmPassword, password) => {
  // 아직 입력 안했으면 에러 메시지 띄우지 않음
  if (!confirmPassword) return "비밀번호를 입력해주세요.";
  return confirmPassword === password ? "" : "비밀번호가 일치하지 않습니다.";
};
