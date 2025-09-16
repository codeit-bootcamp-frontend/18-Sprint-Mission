const emailInput = document.querySelector<HTMLInputElement>("#email");
const nicknameInput = document.querySelector<HTMLInputElement>("#nickname");
const passwordInput = document.querySelector<HTMLInputElement>("#password");
const passwordCheckInput = document.querySelector<HTMLInputElement>("#password-check");
const loginButton = document.querySelector<HTMLButtonElement>(".form-button");
const eyebtns = document.querySelectorAll<HTMLButtonElement>(".pw-visibility");
const form = document.querySelector<HTMLFormElement>(".form-container");

// -----------------------------------------------------------------------

function showError(inputElement: HTMLInputElement, message: string) {
  const parentDiv = inputElement.parentElement;
  if(!parentDiv) return;

  inputElement.classList.add("errorborder");
  
  const existError = parentDiv.querySelector<HTMLSpanElement>('.errortext');
  if(existError) existError.remove();

  const span = document.createElement("span");
  span.textContent = message;
  span.classList.add("errortext");
  parentDiv.appendChild(span);
}

function emailError() {
  if(!emailInput) return;

  if (emailInput.validity.valueMissing) {
    showError(emailInput, "이메일을 입력해주세요.");
  } else if (emailInput.validity.typeMismatch) {
    showError(emailInput, "잘못된 이메일입니다.");
  } else {
    emailInput.classList.remove("errorborder");
  }
}

function passwordError() {
  if(!passwordInput) return;
 
  if (passwordInput.validity.valueMissing) {
    showError(passwordInput, "비밀번호를 입력해주세요.");
  } else if (passwordInput.value.length < 8) {
    showError(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    passwordInput.classList.remove("errorborder");
  }
}

function nicknameError() {
  if(!nicknameInput) return;

  if (nicknameInput.validity.valueMissing) {
    showError(nicknameInput, "닉네임을 입력해주세요.");
  } else {
    nicknameInput.classList.remove("errorborder");
  }
}

function passwordCheckError() {
  if(!passwordInput || !passwordCheckInput) return;
  if (passwordInput.value !== passwordCheckInput.value) {
    showError(passwordCheckInput, "비밀번호가 일치하지 않습니다.");
  } else {
    passwordCheckInput.classList.remove("errorborder");
  }
}

function inputsValid() {
  if(!emailInput || !passwordInput || !nicknameInput || !passwordCheckInput || !loginButton) return;
  
  const inputs = [emailInput, passwordInput, nicknameInput, passwordCheckInput];
  const valid = inputs.every((input) => {
    const hasError = input.parentElement?.querySelector(".errortext");
    return input.checkValidity() && !hasError;
  });
  loginButton.disabled = !valid;
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginButton?.disabled) {
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

emailInput?.addEventListener("focusout", emailFunction);
passwordInput?.addEventListener("focusout", passwordFunction);
nicknameInput?.addEventListener("focusout", nicknameFunction);
passwordCheckInput?.addEventListener("focusout", passwordCheckFunction);

emailInput?.addEventListener("input", emailFunction);
passwordInput?.addEventListener("input", passwordFunction);
nicknameInput?.addEventListener("input", nicknameFunction);
passwordCheckInput?.addEventListener("input", passwordCheckFunction);

// -----------------------------------------------------------------------
eyebtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnInput = btn.previousElementSibling as HTMLInputElement | null;
    const eyeIcon = btn.querySelector<HTMLImageElement>("img");
    if(!btnInput || !eyeIcon) return;
    if (btnInput.type === "password") {
      btnInput.type = "text";
      eyeIcon.src = "images/visible.svg";
    } else {
      btnInput.type = "password";
      eyeIcon.src = "images/hidden.svg";
    }
  });
});
