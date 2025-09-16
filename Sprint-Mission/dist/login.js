const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".form-button");
const form = document.querySelector(".form-container");
const eyebtn = document.querySelector(".pw-visibility");
// -----------------------------------------------------------------------
function showError(inputElement, message) {
    const parentDiv = inputElement.parentElement;
    if (!parentDiv)
        return;
    inputElement.classList.add("errorborder");
    const existError = parentDiv.querySelector('.errortext');
    if (existError)
        existError.remove();
    const span = document.createElement("span");
    span.textContent = message;
    span.classList.add("errortext");
    parentDiv.appendChild(span);
}
function emailError() {
    if (!emailInput)
        return;
    if (emailInput.validity.valueMissing) {
        showError(emailInput, "이메일을 입력해주세요.");
    }
    else if (emailInput.validity.typeMismatch) {
        showError(emailInput, "잘못된 이메일입니다.");
    }
    else {
        emailInput.classList.remove("errorborder");
        const span = emailInput.parentElement?.querySelector('.errortext');
        span?.remove();
    }
}
function passwordError() {
    if (!passwordInput)
        return;
    if (passwordInput.validity.valueMissing) {
        showError(passwordInput, "비밀번호를 입력해주세요.");
    }
    else if (passwordInput.value.length < 8) {
        showError(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
    }
    else {
        passwordInput.classList.remove("errorborder");
        const span = passwordInput.parentElement?.querySelector('.errortext');
        span?.remove();
    }
}
function inputsValid() {
    if (!emailInput || !passwordInput || !loginButton)
        return;
    const inputs = [emailInput, passwordInput];
    const valid = inputs.every((input) => {
        const hasError = input.parentElement?.querySelector(".errortext");
        return input.checkValidity() && !hasError;
    });
    loginButton.disabled = !valid;
}
const emailFunction = () => {
    emailError();
    inputsValid();
};
const passwordFunction = () => {
    passwordError();
    inputsValid();
};
emailInput?.addEventListener("focusout", emailFunction);
passwordInput?.addEventListener("focusout", passwordFunction);
emailInput?.addEventListener("input", emailFunction);
passwordInput?.addEventListener("input", passwordFunction);
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!loginButton?.disabled) {
        window.location.href = "./items.html";
    }
});
// -----------------------------------------------------------------------
eyebtn?.addEventListener("click", () => {
    if (!passwordInput)
        return;
    const eyeIcon = eyebtn.querySelector("img");
    if (!eyeIcon)
        return;
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "images/visible.svg";
    }
    else {
        passwordInput.type = "password";
        eyeIcon.src = "images/hidden.svg";
    }
});
export {};
//# sourceMappingURL=login.js.map