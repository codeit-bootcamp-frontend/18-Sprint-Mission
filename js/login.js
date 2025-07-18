import {
  validateEmailField,
  validatePasswordField,
  updateButtonState,
} from './validation.js';

import { ROUTES } from './shared_variable.js';

// DOM 요소 선택
const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const emailErrorMsg = document.querySelector('#emailErrorMsg');
const passwordErrorMsg = document.querySelector('#passwordErrorMsg');
const loginButton = document.querySelector('#submitButton');
const loginForm = document.querySelector('#loginForm');
const toggleButton = document.querySelector('.togglePassword');
const passwordIcon = toggleButton.querySelector('img');

// 유효성 상태 변수
let isEmailValid = false;
let isPasswordValid = false;

// 에러 메시지 존재 여부 검사
function hasAnyErrorMessages(...errorElements) {
  return errorElements.some((el) => el.textContent.trim() !== '');
}

// 폼 전체 검사 → 버튼 활성화 여부 결정
function checkFormValidity() {
  const hasError = hasAnyErrorMessages(emailErrorMsg, passwordErrorMsg);
  const isFormValid = isEmailValid && isPasswordValid && !hasError;
  updateButtonState(loginButton, isFormValid);
}

// 이메일 유효성 검사
userEmail.addEventListener('focusout', () => {
  isEmailValid = validateEmailField(userEmail, emailErrorMsg);
  checkFormValidity();
});

// 비밀번호 유효성 검사
userPassword.addEventListener('focusout', () => {
  isPasswordValid = validatePasswordField(userPassword, passwordErrorMsg);
  checkFormValidity();
});

// 비밀번호 보기 토글
toggleButton.addEventListener('click', () => {
  const isVisible = userPassword.type === 'text';
  userPassword.type = isVisible ? 'password' : 'text';
  passwordIcon.src = isVisible
    ? '../assets/img/btn_visibility_off.svg'
    : '../assets/img/btn_visibility_on.svg';
});

// 로그인 시 이동
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isEmailValid && isPasswordValid) {
    window.location.href = ROUTES.items;
  }
});