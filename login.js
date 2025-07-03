const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirm");

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