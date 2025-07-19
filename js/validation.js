import { validateEmail, MIN_PASSWORD_LENGTH, ERROR_MESSAGE } from './shared_variable.js';
import { showError, hideError } from './errorMessage.js';

// 이메일 input 유효성 검사
export function validateEmailField(inputEle, errorEle) {
  const value = inputEle.value.trim();

  if (value === "") {
    showError(inputEle, errorEle, ERROR_MESSAGE.emptyEmail);
    return false;
  }

  if (!validateEmail(value)) {
    showError(inputEle, errorEle, ERROR_MESSAGE.invalidEmail);
    return false;
  }

  hideError(inputEle, errorEle);
  return true;
}

// 비밀번호 input 유효성 검사
export function validatePasswordField(inputEle, errorEle) {
  const value = inputEle.value.trim();

  if (value === "") {
    showError(inputEle, errorEle, ERROR_MESSAGE.emptyPassword);
    return false;
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    showError(inputEle, errorEle, ERROR_MESSAGE.shortPassword);
    return false;
  }

  hideError(inputEle, errorEle);
  return true;
}

// 닉네임 input 유효성 검사 (회원가입 전용)
export function validateNicknameField(inputEle, errorEle) {
  const value = inputEle.value.trim();

  if (value === "") {
    showError(inputEle, errorEle, ERROR_MESSAGE.emptyNickname);
    return false;
  }

  hideError(inputEle, errorEle);
  return true;
}

// 비밀번호 확인 input 검사 (회원가입 전용)
export function validatePasswordConfirmField(passwordEle, confirmEle, errorEle) {
  const password = passwordEle.value.trim();
  const confirm = confirmEle.value.trim();

  if (password !== confirm) {
    showError(confirmEle, errorEle, ERROR_MESSAGE.passwordMismatch);
    return false;
  }

  hideError(confirmEle, errorEle);
  return true;
}

//버튼 상태 업데이트 (활성화 / 비활성화)
export function updateButtonState(buttonEle, isValid) {
  buttonEle.disabled = !isValid;
}