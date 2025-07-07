const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirm");
const registerButton = document.querySelector(".button-primary");

// 에러 메시지 생성
function showError(input, message) {
  removeError(input);
  input.classList.add("error");
  input.style.border = "1px solid #F74747";
  const error = document.createElement("p");
  error.className = "error-message";
  error.style.color = "#F74747";
  error.style.fontSize = "14px";
  error.style.lineHeight = "24px";
  error.style.fontWeight = "600";
  error.style.marginLeft = "16px";
  error.textContent = message;
  input.closest(".input").appendChild(error);
}

// 에러 메시지 제거
function removeError(input) {
  input.classList.remove("error");
  input.style.border = "";
  const existing = input.closest(".input").querySelector(".error-message");
  if (existing) existing.remove();
}

// 이메일 형식 검증
function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// 입력값 검증
function validateInputs() {
  const hasError = document.querySelectorAll(".error-message").length > 0;

  let allFilled;
  if (nicknameInput && passwordConfirmInput) { // 회원가입 페이지
    allFilled = emailInput.value && nicknameInput.value && passwordInput.value && passwordConfirmInput.value; // 회원가입 페이지
  } else {
    allFilled = emailInput.value && passwordInput.value; // 로그인 페이지
  }

  registerButton.classList.toggle("disabled", hasError || !allFilled);
}

// 이메일 검증
emailInput.addEventListener("blur", () => {
  removeError(emailInput);
  if (!emailInput.value) {
    showError(emailInput, "이메일을 입력해주세요.");
  } else if (!isEmail(emailInput.value)) {
    showError(emailInput, "잘못된 이메일입니다");
  }
  validateInputs();
});

// 닉네임 검증
nicknameInput && nicknameInput.addEventListener("blur", () => {
  removeError(nicknameInput);
  if (!nicknameInput.value) {
    showError(nicknameInput, "닉네임을 입력해주세요.");
  }
  validateInputs();
});

// 비밀번호 검증
passwordInput.addEventListener("blur", () => {
  console.log('blur event fired');
  removeError(passwordInput);
  if (!passwordInput.value) {
    showError(passwordInput, "비밀번호를 입력해주세요.");
  } else if (passwordInput.value.length < 8) {
    showError(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
  }
  validateInputs();
});

// 비밀번호 확인 검증
passwordConfirmInput && passwordConfirmInput.addEventListener("blur", () => {
  removeError(passwordConfirmInput);
  if (!passwordConfirmInput.value) {
    showError(passwordConfirmInput, "비밀번호를 다시 입력해주세요.");
  } else if (passwordConfirmInput.value !== passwordInput.value) {
    showError(passwordConfirmInput, "비밀번호가 일치하지 않습니다.");
  }
  validateInputs();
});

// 입력 값 변경 시 버튼 활성화 여부 확인
document.querySelector("main").addEventListener("input", validateInputs);

// 비활성화된 버튼 클릭 시 동작 방지
registerButton.addEventListener("click", (e) => {
  if (registerButton.classList.contains("disabled")) {
    e.preventDefault();
  }
});

// 비밀번호 눈 아이콘
const toggleIcon = document.querySelector(".eye-toggle");

toggleIcon.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleIcon.src = isPassword ? "./source/eye_open.svg" : "./source/eye_close.svg";
  toggleIcon.alt = isPassword ? "eye_open" : "eye_close";
});

// 비밀번호 확인 눈 아이콘
const toggleConfirmIcon = passwordConfirmInput?.nextElementSibling;

toggleConfirmIcon?.addEventListener("click", () => {
  const isPassword = passwordConfirmInput.type === "password";
  passwordConfirmInput.type = isPassword ? "text" : "password";
  toggleConfirmIcon.src = isPassword ? "./source/eye_open.svg" : "./source/eye_close.svg";
  toggleConfirmIcon.alt = isPassword ? "eye_open" : "eye_close";
});