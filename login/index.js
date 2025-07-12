const INPUT_MESSAGE_ERROR_CLASS = "input-message input-message-error";
const INPUT_BORDER_ERROR_CLASS = "input-border-error";

const $emailInput = document.querySelector("#email-input");
const $passwordInput = document.querySelector("#password-input");
const $loginForm = document.querySelector(".login-form");
const $loginButton = document.querySelector(".login-form button");

function validateEmail(email) {
  if (!email) {
    return "이메일을 입력해주세요.";
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "잘못된 이메일 형식입니다.";
  }

  return null;
}

function validatePassword(password) {
  if (!password) {
    return "비밀번호를 입력해주세요.";
  }

  if (password.length < 8) {
    return "비밀번호를 8자 이상 입력해주세요.";
  }

  return null;
}

function createErrorMessage(errorMessage) {
  const $errorMessage = document.createElement("div");
  $errorMessage.textContent = errorMessage;
  $errorMessage.className = INPUT_MESSAGE_ERROR_CLASS;
  return $errorMessage;
}

function handleValidationError(target, validator, elementRef) {
  const container = target.parentElement;
  const error = validator(target.value);

  if (!error) {
    container.classList.remove(INPUT_BORDER_ERROR_CLASS);
    elementRef.current?.remove();
    elementRef.current = null;
    return;
  }

  container.classList.add(INPUT_BORDER_ERROR_CLASS);

  if (elementRef.current) {
    elementRef.current.textContent = error;
    return;
  }

  const errorMessage = createErrorMessage(error);
  container.parentElement.append(errorMessage);
  elementRef.current = errorMessage;
}

function updateLoginButton() {
  const canLogin =
    $emailInput.value.length > 0 &&
    $passwordInput.value.length > 0 &&
    emailErrorRef.current == null &&
    passwordErrorRef.current == null;

  if (canLogin) {
    $loginButton.disabled = false;
    $loginButton.className = "button button-primary";
  } else {
    $loginButton.disabled = true;
    $loginButton.classList = "button button-secondary";
  }
}

const emailErrorRef = { current: null };
$emailInput.addEventListener("focusout", ({ target }) => {
  handleValidationError(target, validateEmail, emailErrorRef);
  updateLoginButton();
});

const passwordErrorRef = { current: null };
$passwordInput.addEventListener("focusout", ({ target }) => {
  handleValidationError(target, validatePassword, passwordErrorRef);
  updateLoginButton();
});

$loginForm.addEventListener("keyup", updateLoginButton);
