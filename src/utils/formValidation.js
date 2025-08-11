/**
 * 이메일 유효성 검사
 * @param {string} email - 검사할 이메일 문자열
 * @returns {boolean} 유효한 이메일 형식이면 true, 아니면 false
 */
export const isValidEmailFormat = (email) => {
  const reg = /^[0-9a-zA-Z]([\w.-]*[0-9a-zA-Z])?@[0-9a-zA-Z]([\w.-]*[0-9a-zA-Z])?\.[a-zA-Z]{2,}$/;
  return reg.test(email);
};

/**
 * 비밀번호 유효성 검사
 * @param {string} password - 검사할 비밀번호 문자열
 * @returns {boolean} 8자 이상이면 true, 아니면 false
 */
export const isValidPasswordFormat = (email) => {
  const reg = /^.{8,}$/; // 8자 이상 아무 문자
  return reg.test(email);
};

/**
 * 빈 입력값 검사
 * @param {string} value - 검사할 문자열
 * @returns {boolean} 비어있으면 true, 아니면 false
 */
export const isInputEmpty = (value) => {
  return value.trim().length === 0;
};


/**
 * 이메일 유효성 검사 및 에러 메시지를 반환
 * @param {string} value - 이메일 입력값
 * @returns {string} 에러 메시지 문자열, 유효하면 빈 문자열 반환
 */
export const validateEmail = (value) => {
  if (!value) return "이메일을 입력해주세요.";
  return isValidEmailFormat(value) ? "" : "잘못된 이메일 형식입니다.";
};

/**
 * 닉네임 유효성 검사 및 에러 메시지를 반환
 * @param {string} value - 닉네임 입력값
 * @returns {string} 에러 메시지 문자열, 유효하면 빈 문자열 반환
 */
export const validateNickname = (value) => {
  return !isInputEmpty(value) ? "" : "닉네임을 입력해주세요";
};

/**
 * 비밀번호 유효성 검사 및 에러 메시지를 반환합
 * @param {string} value - 비밀번호 입력값
 * @returns {string} 에러 메시지 문자열, 유효하면 빈 문자열 반환
 */
export const validatePassword = (value) => {
  if (!value) return "비밀번호를 입력해주세요.";
  return isValidPasswordFormat(value) ? "" : "비밀번호를 8자 이상 입력해주세요.";
};


/**
 * 비밀번호 확인값이 원래 비밀번호와 일치하는지 검사
 * @param {string} confirmPassword - 확인용 비밀번호 입력값
 * @param {string} password - 원래 비밀번호 입력값
 * @returns {string} 에러 메시지 문자열, 일치하면 빈 문자열 반환
 */
export const validatePasswordConfirm = (confirmPassword, password) => {
  // 아직 입력 안했으면 에러 메시지 띄우지 않음
  if (!confirmPassword) return "비밀번호를 입력해주세요.";
  return confirmPassword === password ? "" : "비밀번호가 일치하지 않습니다.";
};
