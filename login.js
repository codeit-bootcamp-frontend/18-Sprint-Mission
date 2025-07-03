// 비밀번호 눈 아이콘
const passwordInput = document.getElementById("password");
const toggleIcon = document.querySelector(".eye-toggle");

toggleIcon.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";
  toggleIcon.src = isPassword ? "./source/eye_open.svg" : "./source/eye_close.svg";
  toggleIcon.alt = isPassword ? "eye_open" : "eye_close";
});

// 비밀번호 확인 눈 아이콘
const passwordConfirmInput = document.getElementById("passwordConfirm");
const toggleConfirmIcon = passwordConfirmInput?.nextElementSibling;

toggleConfirmIcon?.addEventListener("click", () => {
  const isPassword = passwordConfirmInput.type === "password";
  passwordConfirmInput.type = isPassword ? "text" : "password";
  toggleConfirmIcon.src = isPassword ? "./source/eye_open.svg" : "./source/eye_close.svg";
  toggleConfirmIcon.alt = isPassword ? "eye_open" : "eye_close";
});