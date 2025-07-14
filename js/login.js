import {
  form,
  userEmail,
  userPassword,
  loginButton,
  emailErrorMsg,
  pwErrorMsg,
  pwToggle,
  errMsg,
  changimg,
} from "./shared_variable.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// error messsage show
function showError(inputEle, errorEle, message) {
  inputEle.style.border = "1px solid #f74747";
  errorEle.innerHTML = message;
  errorEle.style.display = "block";
}

// error message hide
function hideError(inputEle, errorEle) {
  inputEle.style.border = "none";
  errorEle.style.display = "none";
}

// 이메일 focusout
userEmail.addEventListener("focusout", () => {
  if (userEmail.value === "") {
    showError(userEmail, emailErrorMsg, errMsg.id.voidOut.trim());
  } else if (!emailcheck(userEmail.value)) {
    showError(userEmail, emailErrorMsg, errMsg.id.fail.trim());
  } else {
    hideError(userEmail, emailErrorMsg);
  }
  activebutton();
});

// 이메일 정규 표현식 체크
function emailcheck(value) {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return emailRegex.test(value);
}

// 비밀번호 focusout
userPassword.addEventListener("focusout", () => {
  if (userPassword.value.length === 0) {
    showError(userPassword, pwErrorMsg, errMsg.pw.voidOut.trim());
  } else if (userPassword.value.length < 8) {
    showError(userPassword, pwErrorMsg, errMsg.pw.fail.trim());
  } else {
    hideError(userPassword, pwErrorMsg);
  }
  activebutton();
});

// 버튼 활성화
function activebutton() {
  if (emailcheck(userEmail.value) && userPassword.value.length >= 8) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

// 비밀번호 보기
pwToggle.addEventListener("click", () => {
  const img = document.querySelector(".pw-icon");

  if (userPassword.type === "password") {
    userPassword.type = "text";
    img.src = changimg.show;
  } else {
    userPassword.type = "password";
    img.src = changimg.hide;
  }
});
