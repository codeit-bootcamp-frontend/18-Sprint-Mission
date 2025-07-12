const INPUT_BORDER_ERROR_CLASS = "input-border-error";

const $emailInput = document.querySelector("#email-input");
const $usernameInput = document.querySelector("#username-input");
const $passwordInput = document.querySelector("#password-input");
const $confirmPasswordInput = document.querySelector("#confirm-password-input");

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

function validateUsername(username) {
  if (!username) {
    return "닉네임을 입력해주세요.";
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

function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword || password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  }

  return null;
}

function updateValidationError(target, validator) {
  const container = target.parentElement;
  const $errorMessage = container.nextElementSibling;
  const error = validator(target.value);

  if (error) {
    container.classList.add(INPUT_BORDER_ERROR_CLASS);
    $errorMessage.style.display = "block";
    $errorMessage.textContent = error;
  } else {
    container.classList.remove(INPUT_BORDER_ERROR_CLASS);
    $errorMessage.style.display = "none";
    $errorMessage.textContent = "";
  }
}

function checkCanSignup(input) {
  return (
    input.value.length > 0 &&
    input.parentElement.nextElementSibling.style.display !== "block"
  );
}

function updateSignupButton() {
  const canSignup =  
    checkCanSignup($emailInput) &&
    checkCanSignup($usernameInput) &&
    checkCanSignup($passwordInput) &&
    checkCanSignup($confirmPasswordInput);

  if (canSignup) {
    $signupButton.disabled = false;
    $signupButton.className = "button button-primary";
  } else {
    $signupButton.disabled = true;
    $signupButton.className = "button button-secondary";
  }
}

$emailInput.addEventListener("focusout", ({ target }) => {
  updateValidationError(target, validateEmail);
  updateSignupButton();
});

$usernameInput.addEventListener("focusout", ({ target }) => {
  updateValidationError(target, validateUsername);
  updateSignupButton();
});

$passwordInput.addEventListener("focusout", ({ target }) => {
  updateValidationError(target, validatePassword);
  updateSignupButton();
});

$confirmPasswordInput.addEventListener("focusout", ({ target }) => {
  updateValidationError(target, (value) =>
    validateConfirmPassword($passwordInput.value, value)
  );
  updateSignupButton();
});

$signupForm.addEventListener("keyup", updateSignupButton);
