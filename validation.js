function validateEmail(e) {
  const p = e.target.nextElementSibling || document.createElement("p");
  if (!e.target.validity.valid) {
    p.classList.add("invalid-input");
    p.textContent = e.target.value === ""? "이메일을 입력해주세요.": "잘못된 이메일 형식입니다.";
    e.target.after(p);
  } else {
    p.remove();
  }
}

const loginEmail = document.getElementById("login_email");
if(loginEmail) loginEmail.addEventListener("focusout", (e) => validateEmail(e));

const signupEmail = document.getElementById("signup_email");
if(signupEmail) signupEmail.addEventListener("focusout", (e) => validateEmail(e));
