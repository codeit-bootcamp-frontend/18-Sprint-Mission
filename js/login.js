// 비밀번호 표시/숨기기 기능
function inputPassword(inputId, eyeId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "images/eye-on.png";
    eyeIcon.alt = "비밀번호 보기";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "images/eye-off.png";
    eyeIcon.alt = "비밀번호 숨기기";
  }
}

// 이메일 유효성 검사
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 에러 메시지 표시
function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);

  input.style.border = "1px solid red";
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.fontSize = "12px";
  errorElement.style.marginTop = "5px";
}

// 에러 메시지 제거
function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);

  input.style.border = "";
  errorElement.textContent = "";
}

// 버튼 활성화/비활성화
function toggleLoginButton() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  const isEmailValid =
    emailInput.value.trim() !== "" && validateEmail(emailInput.value);
  const isPasswordValid =
    passwordInput.value.trim() !== "" && passwordInput.value.length >= 8;
  const hasErrors =
    emailError.textContent !== "" || passwordError.textContent !== "";

  loginBtn.disabled = !(isEmailValid && isPasswordValid && !hasErrors);
}

// DOM 로드 후 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginForm = document.getElementById("loginForm");

  // 이메일 입력 필드 이벤트
  emailInput.addEventListener("focusout", function () {
    const email = this.value.trim();

    if (email === "") {
      showError("email", "email-error", "이메일을 입력해주세요.");
    } else if (!validateEmail(email)) {
      showError("email", "email-error", "잘못된 이메일 형식입니다.");
    } else {
      clearError("email", "email-error");
    }

    toggleLoginButton();
  });

  // 비밀번호 입력 필드 이벤트
  passwordInput.addEventListener("focusout", function () {
    const password = this.value.trim();

    if (password === "") {
      showError("password", "password-error", "비밀번호를 입력해주세요.");
    } else if (password.length < 8) {
      showError(
        "password",
        "password-error",
        "비밀번호를 8자 이상 입력해주세요."
      );
    } else {
      clearError("password", "password-error");
    }

    toggleLoginButton();
  });

  // 입력 시에도 버튼 상태 체크
  emailInput.addEventListener("input", toggleLoginButton);
  passwordInput.addEventListener("input", toggleLoginButton);

  // 폼 제출 이벤트
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginBtn = document.getElementById("loginBtn");
    if (!loginBtn.disabled) {
      // 로그인 성공 시 /items로 이동
      window.location.href = "/items";
    }
  });
});
