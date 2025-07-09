const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailDiv = emailInput.parentElement;
const passwordDiv = passwordInput.parentElement;
const loginButton = document.querySelector(".form-button");
const form = document.querySelector(".form-container");

function emailError() {
  const existError = emailDiv.querySelector(".errortext");
  if (existError) {
    existError.remove();
  }
  if (emailInput.validity.valueMissing) {
    emailInput.classList.add("errorborder");
    const span = document.createElement("span");
    emailDiv.appendChild(span);
    span.textContent = "이메일을 입력해주세요";
    span.classList.add("errortext");
  } else if (emailInput.validity.typeMismatch) {
    emailInput.classList.add("errorborder");
    const span = document.createElement("span");
    emailDiv.appendChild(span);
    span.textContent = "잘못된 이메일입니다. ";
    span.classList.add("errortext");
  } else {
    emailInput.classList.remove("errorborder");
  }
}

function passwordError() {
  const existError = passwordDiv.querySelector(".errortext");
  if (existError) {
    existError.remove();
  }
  if (passwordInput.validity.valueMissing) {
    passwordInput.classList.add("errorborder");
    const span = document.createElement("span");
    passwordDiv.appendChild(span);
    span.textContent = "비밀번호를 입력해주세요";
    span.classList.add("errortext");
  } else if (passwordInput.value.length < 8) {
    passwordInput.classList.add("errorborder");
    const span = document.createElement("span");
    passwordDiv.appendChild(span);
    span.textContent = "비밀번호를 8자 이상 입력해주세요.";
    span.classList.add("errortext");
  } else {
    passwordInput.classList.remove("errorborder");
  }
}

function inputsValid() {
  const inputs = [emailInput, passwordInput];
  const valid = inputs.every((input) => {
    const hasError = input.parentElement.querySelector(".errortext");
    return input.checkValidity() && !hasError;
  });
  loginButton.disabled = !valid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginButton.disabled) {
    window.location.href = "./items.html";
  }
});

const emailFunction = () => {emailError(); inputsValid();}
const passwordFunction = () => {passwordError(); inputsValid();}

emailInput.addEventListener("focusout", emailFunction);
passwordInput.addEventListener("focusout", passwordFunction);

emailInput.addEventListener("input", emailFunction);
passwordInput.addEventListener("input", passwordFunction);
