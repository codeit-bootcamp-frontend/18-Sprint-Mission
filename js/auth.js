// auth.js
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validateConfirmPassword,
} from "./validate.js";

// 에러 상태 저장 객체
const errorState = {
  email: null,
  nickname: null,
  password: null,
  confirmPassword: null,
};

// DOM 요소를 가져옴
const form = document.querySelector("#auth-form");
const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const togglePasswordBtn = document.getElementById("togglePassword");
const toggleConfirmPasswordBtn = document.getElementById("toggleConfirmPassword");
const authBtn = document.getElementById("auth-btn");

const isSignup = Boolean(nicknameInput); // 닉네임 input 존재 여부로 회원가입/로그인 판단

// 에러 메시지를 해당 input에 보여주는 함수
function showError(input, message) {
  const container = input.closest(".form-group");
  const errorEl = container.querySelector(".error-msg");
  input.classList.add("error");
  errorEl.textContent = message; // 에러 메시지 삽입
  errorEl.classList.remove("visually-hidden");
}

// 에러 메시지를 제거하는 함수
function removeError(input) {
  const container = input.closest(".form-group");
  const errorEl = container.querySelector(".error-msg");
  input.classList.remove("error");
  errorEl.textContent = "";
  errorEl.classList.add("visually-hidden"); // 메시지를 다시 숨김
}

// 특정 필드를 검사하고 에러를 처리하는 함수
function validateField(fieldName) {
  // 입력값 가져오기
  const value = {
    email: emailInput?.value, // 없으면 undefined
    nickname: nicknameInput?.value,
    password: passwordInput?.value,
    confirmPassword: confirmPasswordInput?.value,
  }[fieldName];

  let error = null; // 에러 메시지 초기화

   // 필드별 유효성 검사 함수 호출
  switch (fieldName) {
    case "email":
      error = validateEmail(value);
      break;
    case "nickname":
      error = validateNickname(value, isSignup);
      break;
    case "password":
      error = validatePassword(value);
      break;
    case "confirmPassword":
      error = validateConfirmPassword(value, passwordInput.value, isSignup);
      break;
  }

  // 에러 상태 저장
  errorState[fieldName] = error;

  // 해당 input 요소 가져오기
  const input = {
    email: emailInput,
    nickname: nicknameInput,
    password: passwordInput,
    confirmPassword: confirmPasswordInput,
  }[fieldName];

  // 에러 표시 혹은 제거
  if (error) {
    showError(input, error);
  } else {
    removeError(input);
  }
  // 버튼 상태 갱신
  updateButtonState();
}

// 버튼 활성화/비활성화 상태를 갱신하는 함수
function updateButtonState() {
  // 기본으로 이메일, 비밀번호 포함
  const values = [emailInput, passwordInput];
  // 회원가입 시 닉네임, 확인 비번도 추가
  if (isSignup) {
    values.push(nicknameInput, confirmPasswordInput);
  }

  // 빈 값이 있는지 확인
  const hasEmpty = values.some((input) => !input.value.trim());
  // 에러가 있는지 확인
  const hasError = Object.values(errorState).some((msg) => msg !== null);

  // 입력값이 다 채워져 있고 에러가 없으면 버튼 활성화
  if (!hasEmpty && !hasError) {
    authBtn.disabled = false;
    authBtn.classList.remove("disabled");
  } else {
    // 그렇지 않으면 버튼 비활성화
    authBtn.disabled = true;
    authBtn.classList.add("disabled");
  }
}

// 비밀번호 보기/숨기기 토글 기능
function togglePasswordVisibility(input, button) {
  const img = button.querySelector("img");
  const isHidden = input.type === "password"; // 현재 숨겨진 상태인지 확인
  input.type = isHidden ? "text" : "password"; //true면 text, false면 password
  img.src = isHidden
    ? "images/icon/eye-icon.svg"
    : "images/icon/eye-slash-icon.svg";
  img.alt = isHidden
    ? "비밀번호 표시 상태 아이콘"
    : "비밀번호 숨김 상태 아이콘";
}

// 각 필드에 blur 이벤트 연결해서 focus-out 시 유효성 검사
// TypeError 막기위해 옵셔널 체이닝(?.) 활용
emailInput?.addEventListener("blur", () => validateField("email"));
passwordInput?.addEventListener("blur", () => validateField("password"));
nicknameInput?.addEventListener("blur", () => validateField("nickname"));
confirmPasswordInput?.addEventListener("blur", () => validateField("confirmPassword"));

// input 이벤트 - 실시간으로 에러 제거, 버튼 상태 갱신
[emailInput, passwordInput, nicknameInput, confirmPasswordInput]
  .filter(Boolean) // 존재하는 input만 처리
  .forEach((input) => {
    const field = input.id;
    input.addEventListener("input", () => {
      errorState[field] = null; // 에러 상태 초기화
      removeError(input);
      updateButtonState(); // 버튼 상태 갱신
    });
  });

// 비밀번호 보기 버튼에 클릭 이벤트 연결
if (togglePasswordBtn && passwordInput) {
  togglePasswordBtn.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput, togglePasswordBtn);
  });
}
// 비밀번호 확인 보기 버튼도 연결 (회원가입일 때만)
if (toggleConfirmPasswordBtn && confirmPasswordInput) {
  toggleConfirmPasswordBtn.addEventListener("click", () => {
    togglePasswordVisibility(confirmPasswordInput, toggleConfirmPasswordBtn);
  });
}

// 폼 제출 시 처리
form?.addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 제출 막기
  if (authBtn.disabled) return; // 버튼 비활성화 상태면 아무것도 안함

  if (isSignup) {
    window.location.href = "/login.html";
  } else {
    window.location.href = "/items.html";
  }
});