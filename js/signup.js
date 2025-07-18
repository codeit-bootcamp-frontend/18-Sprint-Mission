import {
  validateEmailField,
  validatePasswordField,
  validateNicknameField,
  validatePasswordConfirmField,
  updateButtonState
} from './validation.js';

import { ROUTES } from './shared_variable.js';

// DOM 요소 선택
const userEmail = document.querySelector('#userEmail');
const userNickname = document.querySelector('#userNickname');
const userPassword = document.querySelector('#userPassword');
const passwordConfirm = document.querySelector('#passwordConfirm');

const emailErrorMsg = document.querySelector('#emailErrorMsg');
const nicknameErrorMsg = document.querySelector('#nicknameErrorMsg');
const pwErrorMsg = document.querySelector('#passwordErrorMsg');
const pwConfirmErrorMsg = document.querySelector('#pwConfirmErrorMsg');

const signupButton = document.querySelector('#submitButton');
const signupForm = document.querySelector('#signupForm');
const toggleButtons = document.querySelectorAll('.togglePassword');

// 유효성 상태
let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordMatch = false;

// 에러 메시지 존재 여부 검사
function hasAnyErrorMessages(...errorElements) {
  return errorElements.some((el) => el.textContent.trim() !== '');
}

// 전체 유효성 검사 후 버튼 상태 갱신
function checkFormValidity() {
  const hasError = hasAnyErrorMessages(
    emailErrorMsg,
    nicknameErrorMsg,
    pwErrorMsg,
    pwConfirmErrorMsg
  );
  const isFormValid =
    isEmailValid && isNicknameValid && isPasswordValid && isPasswordMatch && !hasError;
  updateButtonState(signupButton, isFormValid);
}

// 이벤트 바인딩
userEmail.addEventListener('focusout', () => {
  isEmailValid = validateEmailField(userEmail, emailErrorMsg);
  checkFormValidity();
});

userNickname.addEventListener('focusout', () => {
  isNicknameValid = validateNicknameField(userNickname, nicknameErrorMsg);
  checkFormValidity();
});

userPassword.addEventListener('focusout', () => {
  isPasswordValid = validatePasswordField(userPassword, pwErrorMsg);
  isPasswordMatch = validatePasswordConfirmField(userPassword, passwordConfirm, pwConfirmErrorMsg);
  checkFormValidity();
});

passwordConfirm.addEventListener('focusout', () => {
  isPasswordMatch = validatePasswordConfirmField(userPassword, passwordConfirm, pwConfirmErrorMsg);
  checkFormValidity();
});

// 비밀번호 보기 토글
toggleButtons.forEach((btn) => {
  const input = btn.previousElementSibling;
  const icon = btn.querySelector('img');

  btn.addEventListener('click', () => {
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    icon.src = showing
      ? '../assets/img/btn_visibility_off.svg'
      : '../assets/img/btn_visibility_on.svg';
  });
});

// 회원가입 완료 시 → 로그인 페이지로 이동
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (isEmailValid && isNicknameValid && isPasswordValid && isPasswordMatch) {
    window.location.href = ROUTES.login;
  }
});