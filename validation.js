function validateInput(el, label) {
  const { validity } = el;

  el.id === "signup_password_check" && setPasswordValidity();

  if (!validity.valid) {
    if (validity.valueMissing) return `${label}을 입력해주세요`;
    if (validity.typeMismatch) return "잘못된 이메일 형식입니다";
    if (validity.tooShort) return "비밀번호를 8자 이상 입력해주세요";
    if (validity.customError) return el.validationMessage;
    console.log(validity);
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

function showValidMessage(e) {
  const inputEl = e.target;
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

const form = document.querySelectorAll("form input").forEach((inputEl) => {
  inputEl.addEventListener("focusout", (e) => showValidMessage(e));
});
