import { validateEmail, validatePassword } from "../src/validator.js";

const INPUT_MESSAGE_ERROR_CLASS = "input-message input-message-error";
const INPUT_BORDER_ERROR_CLASS = "input-border-error";

const $emailInput = document.querySelector("#email-input");
const $passwordInput = document.querySelector("#password-input");
const $loginForm = document.querySelector(".login-form");
const $loginButton = document.querySelector(".login-form .button");

function createErrorMessage(errorMessage) {
  const $errorMessage = document.createElement("div");
  $errorMessage.textContent = errorMessage;
  $errorMessage.className = INPUT_MESSAGE_ERROR_CLASS;
  return $errorMessage;
}

function updateValidationError(target, validator, elementRef) {
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
  updateValidationError(target, validateEmail, emailErrorRef);
  updateLoginButton();
});

const passwordErrorRef = { current: null };
$passwordInput.addEventListener("focusout", ({ target }) => {
  updateValidationError(target, validatePassword, passwordErrorRef);
  updateLoginButton();
});

$loginForm.addEventListener("keyup", updateLoginButton);

const VISIBILITY_ON_IMAGE = "images/icon-visibility-on.svg";
const VISIBILITY_OFF_IMAGE = "images/icon-visibility-off.svg";

const $passwordVisibilityToggle = document.querySelector(
  ".password-visibility-toggle"
);
$passwordVisibilityToggle.addEventListener("click", ({ target }) => {
  let image;
  if (target instanceof HTMLImageElement) {
    image = target;
  } else if (target instanceof HTMLButtonElement) {
    image = target.firstElementChild;
  } else {
    return;
  }

  if (image.src.includes("off")) {
    image.src = VISIBILITY_ON_IMAGE;
    $passwordInput.type = "text";
  } else {
    image.src = VISIBILITY_OFF_IMAGE;
    $passwordInput.type = "password";
  }
});
