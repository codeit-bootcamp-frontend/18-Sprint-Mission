function validateInput(e, label) {
  const { validity } = e.target;
  if (!validity.valid) {
    if (validity.valueMissing) return `${label}을 입력해주세요`;
    if (validity.typeMismatch) return "잘못된 이메일 형식입니다";
    if (validity.tooShort) return "비밀번호를 8자 이상 입력해주세요";
  }
  if(label==='비밀번호 확인' && !validatePWCheck()) return "비밀번호가 일치하지 않습니다";

  return "";
}

function validatePWCheck() {
  const [pw,pwCheck] = document.querySelectorAll('input[id^=signup_password]');
  return pw.value===pwCheck.value;
}

function showValidMessage(e) {
  const parentEl = e.target.parentElement;
  const parentClassName = parentEl.className;
  const targetLabel = parentEl.firstElementChild.textContent;
  let p = document.querySelector(`.${parentClassName} p`);
  if (!p) {
    p = document.createElement("p");
    p.classList.add("invalid-input");
  }

  const errMsg = validateInput(e, targetLabel);
  if (errMsg) {
    p.textContent = errMsg;
    e.target.after(p);
  } else {
    p.remove();
  }
}

const inputIds = [
  "login_email",
  "login_password",
  "signup_email",
  "signup_name",
  "signup_password",
  "signup_password_check",
];
inputIds.forEach((id) => {
  const inputEl = document.getElementById(id);
  inputEl && inputEl.addEventListener("focusout", (e) => showValidMessage(e));
});