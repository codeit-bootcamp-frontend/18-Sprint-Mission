import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from "../src/validator.js";

const INPUT_BORDER_ERROR_CLASS = "input-border-error";

const $emailInput = document.querySelector("#email-input");
const $usernameInput = document.querySelector("#username-input");
const $passwordInput = document.querySelector("#password-input");
const $confirmPasswordInput = document.querySelector("#confirm-password-input");
const $signupForm = document.querySelector(".signup-form");
const $signupButton = document.querySelector(".signup-form .button");

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

const VISIBILITY_ON_IMAGE = "images/icon-visibility-on.svg";
const VISIBILITY_OFF_IMAGE = "images/icon-visibility-off.svg";

const $visibilityToggles = document.querySelectorAll(
  ".password-visibility-toggle"
);

$visibilityToggles.forEach((element) =>
  element.addEventListener("click", ({ target }) => {
    let image;
    let input;
    if (target instanceof HTMLImageElement) {
      image = target;
      input = target.parentElement.previousElementSibling;
    } else if (target instanceof HTMLButtonElement) {
      image = target.firstElementChild;
      input = target.previousElementSibling;
    } else {
      return;
    }

    if (image.src.includes("off")) {
      image.src = VISIBILITY_ON_IMAGE;
      input.type = "text";
    } else {
      image.src = VISIBILITY_OFF_IMAGE;
      input.type = "password";
    }
  })
);
