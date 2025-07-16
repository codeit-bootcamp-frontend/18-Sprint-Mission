// DOM 요소 선택
const emailInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.querySelector(".signin-button-content");
const form = document.querySelector(".signin-form-content");

// 유효성 상태 관리
const validationState = {
  email: {
    isValid: false,
    errorElement: null,
  },
  password: {
    isValid: false,
    errorElement: null,
  },
};

// 이메일 유효성 검사 함수
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 에러 메시지 생성 함수
function createErrorMessage(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  return errorDiv;
}

// 에러 표시 함수
function showError(inputElement, message, fieldName) {
  // 기존 에러 메시지 제거
  removeError(fieldName);

  // input에 에러 스타일 적용
  inputElement.style.border = "1px solid #ef4444";

  // 에러 메시지 생성
  const errorElement = createErrorMessage(message);

  // 부모 컨테이너(section) 끝에 에러 메시지 추가
  inputElement.parentElement.appendChild(errorElement);

  // 상태 업데이트
  validationState[fieldName].isValid = false;
  validationState[fieldName].errorElement = errorElement;
}

// 에러 제거 함수
function removeError(fieldName) {
  const state = validationState[fieldName];
  if (state.errorElement) {
    state.errorElement.remove();
    state.errorElement = null;
  }

  // input 스타일 원래대로
  const input = fieldName === "email" ? emailInput : passwordInput;
  input.style.border = "1px solid var(--gray-100)";

  state.isValid = true;
}

// 폼 유효성 상태 업데이트 함수
function updateFormValidation() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  const hasErrors =
    !validationState.email.isValid || !validationState.password.isValid;
  const hasEmptyFields = !emailValue || !passwordValue;

  if (hasErrors || hasEmptyFields) {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "#9ca3af";
    loginButton.style.cursor = "not-allowed";
    loginButton.style.opacity = "0.7";
  } else {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "var(--blue)";
    loginButton.style.cursor = "pointer";
    loginButton.style.opacity = "1";
  }
}

// 이메일 유효성 검사
function validateEmailField() {
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    showError(emailInput, "이메일을 입력해주세요.", "email");
  } else if (!validateEmail(emailValue)) {
    showError(emailInput, "잘못된 이메일 형식입니다.", "email");
  } else {
    removeError("email");
  }
}

// 비밀번호 유효성 검사
function validatePasswordField() {
  const passwordValue = passwordInput.value.trim();

  if (!passwordValue) {
    showError(passwordInput, "비밀번호를 입력해주세요.", "password");
  } else if (passwordValue.length < 8) {
    showError(passwordInput, "비밀번호를 8자 이상 입력해주세요.", "password");
  } else {
    removeError("password");
  }
}

// 이벤트 리스너 등록
emailInput.addEventListener("blur", function () {
  validateEmailField();
  updateFormValidation();
});

emailInput.addEventListener("input", function () {
  updateFormValidation();
});

passwordInput.addEventListener("blur", function () {
  validatePasswordField();
  updateFormValidation();
});

passwordInput.addEventListener("input", function () {
  updateFormValidation();
});

// 폼 제출 처리
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // 최종 유효성 검사
  validateEmailField();
  validatePasswordField();

  // 모든 유효성 검사 통과 시 페이지 이동
  if (validationState.email.isValid && validationState.password.isValid) {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue && passwordValue) {
      window.location.href = "items.html";
    }
  }

  updateFormValidation();
});

// 비밀번호 표시/숨기기 기능
const visibilityBtn = document.querySelector(".visibility-btn");
if (visibilityBtn) {
  visibilityBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.src = "images/password-check/btn_visibility_on_24px.png";
    } else {
      passwordInput.type = "password";
      this.src = "images/password-check/btn_visibility_off_24px.png";
    }
  });
}

// 초기 상태 설정
validationState.email.isValid = false;
validationState.password.isValid = false;
updateFormValidation();
