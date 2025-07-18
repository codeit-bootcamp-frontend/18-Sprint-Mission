function validateInput(e) {
  const parentEl = e.target.parentElement;
  const parentClassName = parentEl.className;
  const targetLabel = parentEl.firstElementChild.textContent;
  let p = document.querySelector(`.${parentClassName} p`);
  if(!p) {
    p = document.createElement("p");
    p.classList.add("invalid-input");
  }

  const { validity } = e.target;
  if (!validity.valid) {
    if (validity.valueMissing) {
      p.textContent = `${targetLabel}을 입력해주세요.`;
    } else if (validity.typeMismatch) {
      p.textContent = "잘못된 이메일 형식입니다.";
    } else if (validity.tooShort) {
      p.textContent = "비밀번호를 8자 이상 입력해주세요.";
    }
    e.target.after(p);
  } else {
    p.remove();
  }
}

const inputIds = ["login_email", 'login_password', 'signup_email','signup_name','signup_password', 'signup_password_check'];
inputIds.forEach(id=>{
  const inputEl = document.getElementById(id);
  inputEl && inputEl.addEventListener("focusout", (e) => validateInput(e));
});
