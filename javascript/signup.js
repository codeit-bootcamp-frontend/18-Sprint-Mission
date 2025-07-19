const emailInput = document.getElementById("signupEmail");
const nicknameInput = document.getElementById("signupNickname");
const passwordInput = document.getElementById("signupPassword");
const passwordConfirmInput = document.getElementById("signupPasswordCheck");
const signupForm = document.getElementById("signupInputForm");

const showError = (input, errorId) => {
  const errorElm = document.getElementById(errorId);
  errorElm.style.display = "block";
  input.style.border = "1px solid #f74747";
};

const hideError = (input, errorId) => {
  const errorElm = document.getElementById(errorId);
  errorElm.style.display = "none";
  input.style.border = "none";
};

function validateEmailString(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}

const checkEmailValidation = () => {
  const emailInputValue = emailInput.value.trim();

  if (!emailInputValue) {
    showError(emailInput, "emailEmptyErr");
  } else if (!validateEmailString(emailInputValue)) {
    showError(emailInput, "emailInvalidErr");
  } else {
    hideError(emailInput, "emailEmptyErr");
    hideError(emailInput, "emailInvalidErr");
  }
};

const checkNicknameValidation = () => {
  const nicknameInputValue = nicknameInput.value.trim();

  if (!nicknameInputValue) {
    showError(nicknameInput, "nicknameEmptyErr");
  } else {
    hideError(nicknameInput, "nicknameEmptyErr");
  }
};

const checkPasswordValidation = () => {
  const passwordInputValue = passwordInput.value.trim();

  if (!passwordInputValue) {
    showError(passwordInput, "passwordEmptyErr");
  } else if (passwordInputValue.length < 8) {
    showError(passwordInput, "passwordInvalidErr");
  } else {
    hideError(passwordInput, "passwordEmptyErr");
    hideError(passwordInput, "passwordInvalidErr");
  }
};

const checkPasswordConfirmationValidation = () => {
  const passwordInputConfirmValue = passwordConfirmInput.value.trim();
  const passwordInputValue = passwordInput.value.trim();

  if (passwordInputConfirmValue !== passwordInputValue) {
    showError(passwordConfirmInput, "passwordConfirmErr");
  } else {
    hideError(passwordConfirmInput, "passwordConfirmErr");
  }
};

emailInput.addEventListener("focusout", checkEmailValidation);
nicknameInput.addEventListener("focusout", checkNicknameValidation);
passwordInput.addEventListener("focusout", checkPasswordValidation);
passwordConfirmInput.addEventListener(
  "focusout",
  checkPasswordConfirmationValidation
);

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "../login/";
  });
}

//눈 모양 비밀번호 표시 상태 토글 버튼
function togglePasswordVisibility(event) {
  const button = event.currentTarget;
  const inputField = button.parentElement.querySelector("input");
  const toggleIcon = button.querySelector(".password-toggle-eye");

  const isPasswordVisible = inputField.type === "text";

  const toggleButtons = document.querySelectorAll(
    ".password-toggle-eye-button"
  );
  toggleButtons.forEach((button) => {
    button.addEventListener("click", togglePasswordVisibility);
  });
}
