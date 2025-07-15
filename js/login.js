import {
  form,
  userEmail,
  userPassword,
  submitButton,
  emailErrorMsg,
  pwErrorMsg,
  pwToggle,
  errMsg,
  changimg,
} from "./shared_variable.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/item";
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
  } else if (!emailCheck(userEmail.value)) {
    showError(userEmail, emailErrorMsg, errMsg.id.fail.trim());
  } else {
    hideError(userEmail, emailErrorMsg);
  }
  activeButton();
});

// 이메일 정규 표현식 체크
function emailCheck(value) {
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
  activeButton();
});

// 버튼 활성화
function activeButton() {
  if (emailCheck(userEmail.value) && userPassword.value.length >= 8) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// 비밀번호 보기
pwToggle.addEventListener("click", () => {
  const img = document.querySelector(".pw-icon");

  if (userPassword.type === "password") {
    userPassword.type = "text";
    img.src = changImg.show;
  } else {
    userPassword.type = "password";
    img.src = changImg.hide;
  }
});
