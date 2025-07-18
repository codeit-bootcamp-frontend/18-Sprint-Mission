function validateInput(el, label) {
  const { validity } = el;
  if (!validity.valid) {
    if (validity.valueMissing) return `${label}을 입력해주세요`;
    if (validity.typeMismatch) return "잘못된 이메일 형식입니다";
    if (validity.tooShort) return "비밀번호를 8자 이상 입력해주세요";
    if (validity.customError) return el.validationMessage;
  }
  return "";
}

function setPasswordValidity() {
  const [pw, pwCheck] = document.querySelectorAll("input[id^=signup_password]");
  if (pw.value !== pwCheck.value) {
    pwCheck.setCustomValidity("비밀번호가 일치하지 않습니다");
  } else {
    pwCheck.setCustomValidity("");
  }
}

function showValidMessage(el) {
  const inputEl = el;
  const parentEl = inputEl.parentElement;
  const targetLabel = parentEl.firstElementChild.textContent;

  let p = parentEl.querySelector("p");
  let errMsg = validateInput(inputEl, targetLabel);

  if (errMsg) {
    if (!p) {
      p = document.createElement("p");
      p.classList.add("invalid-input");
      inputEl.after(p);
    }
    p.textContent = errMsg;
  } else {
    p && p.remove();
  }
}

function checkBtnState(form, inputs) {
  form.id === "signup_form" && setPasswordValidity();
  const btn = form.querySelector("button.large");
  const isValid = [...inputs].every((input) => input.validity.valid);
  btn.classList.toggle("inactive", !isValid);
}

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
inputs.forEach((inputEl) => {
  inputEl.addEventListener("input", () => {
    checkBtnState(form, inputs);
    inputEl.id === "signup_password_check" && showValidMessage(inputEl);
  });
  inputEl.addEventListener("focusout", (e) => showValidMessage(e.target));
});
