const emailInput = document.querySelector("#email");
const nicknameInput = document.querySelector("#nickname");
const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password-check");
const emailDiv = emailInput.parentElement;
const passwordDiv = passwordInput.parentElement;
const nicknameDiv = nicknameInput.parentElement;
const passwordCheckDiv = passwordCheckInput.parentElement;
const loginButton = document.querySelector(".form-button");
const eyebtns = document.querySelectorAll(".pw-visibility");
const form = document.querySelector(".form-container");

// -----------------------------------------------------------------------

function showError(inputElement, message) {
  const parentDiv = inputElement.parentElement;
  inputElement.classList.add("errorborder");
  const span = document.createElement("span");
  span.textContent = message;
  span.classList.add("errortext");
  parentDiv.appendChild(span);
}

function emailError() {
  const existError = emailDiv.querySelector(".errortext");
  if (existError) {
    existError.remove();
  }
  if (emailInput.validity.valueMissing) {
    showError(emailInput, "이메일을 입력해주세요.");
  } else if (emailInput.validity.typeMismatch) {
    showError(emailInput, "잘못된 이메일입니다.");
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
    showError(passwordInput, "비밀번호를 입력해주세요.");
  } else if (passwordInput.value.length < 8) {
    showError(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    passwordInput.classList.remove("errorborder");
  }
}

function nicknameError() {
  const existError = nicknameDiv.querySelector(".errortext");
  if (existError) {
    existError.remove();
  }
  if (nicknameInput.validity.valueMissing) {
    showError(nicknameInput, "닉네임을 입력해주세요.");
  } else {
    nicknameInput.classList.remove("errorborder");
  }
}

function passwordCheckError() {
  const existError = passwordCheckDiv.querySelector(".errortext");
  if (existError) {
    existError.remove();
  }
  if (passwordInput.value !== passwordCheckInput.value) {
    showError(passwordCheckInput, "비밀번호가 일치하지 않습니다.");
  } else {
    passwordCheckInput.classList.remove("errorborder");
  }
}

function inputsValid() {
  const inputs = [emailInput, passwordInput, nicknameInput, passwordCheckInput];
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

const emailFunction = () => {
  emailError();
  inputsValid();
};
const passwordFunction = () => {
  passwordError();
  inputsValid();
};
const nicknameFunction = () => {
  nicknameError();
  inputsValid();
};

const passwordCheckFunction = () => {
  passwordCheckError();
  inputsValid();
};

emailInput.addEventListener("focusout", emailFunction);
passwordInput.addEventListener("focusout", passwordFunction);
nicknameInput.addEventListener("focusout", nicknameFunction);
passwordCheckInput.addEventListener("focusout", passwordCheckFunction);

emailInput.addEventListener("input", emailFunction);
passwordInput.addEventListener("input", passwordFunction);
nicknameInput.addEventListener("input", nicknameFunction);
passwordCheckInput.addEventListener("input", passwordCheckFunction);

// -----------------------------------------------------------------------
eyebtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnInput = btn.previousElementSibling;
    const eyeIcon = btn.querySelector("img");
    if (btnInput.type === "password") {
      btnInput.type = "text";
      eyeIcon.src = "images/visible.svg";
    } else {
      btnInput.type = "password";
      eyeIcon.src = "images/hidden.svg";
    }
  });
});
