import {
  form,
  userEmail,
  userPassword,
  loginButton,
  emailErrorMsg,
  pwErrorMsg,
  pwToggle,
  errMsg,
  changeImg,
} from "./shared_variable.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "./login.html";
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

// 이메일 유효성 검사
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

// 닉네임 유효성 검사
const userName = document.querySelector("#user_name");
const nameError = document.querySelector(".info_nickname .error_msg");

userName.addEventListener("focusout", () => {
  if (userName.value === "") {
    showError(userName, nameError, errMsg.name.fail);
  } else {
    hideError(userName, nameError);
  }
  activebutton();
});

// 비밀번호 유효성검사
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

// 비밀번호 확인 유효성검사
const checkPassword = document.querySelector("#password_check");
const checkPwError = document.querySelector(".info_Re_password .error_msg");

checkPassword.addEventListener("focusout", () => {
  if (checkPassword.value === 0) {
    showError(checkPassword, checkPwError, errMsg.pw.voidOut.trim());
  } else if (checkPassword.value !== userPassword.value) {
    showError(checkPassword, checkPwError, errMsg.rePw.trim());
  } else {
    hideError(checkPassword, checkPwError);
  }
  activebutton();
});

// 버튼 활성화

function activebutton() {
  const formValid =
    emailcheck(userEmail.value) &&
    userName.value !== "" &&
    userPassword.value.length >= 8 &&
    userPassword.value === checkPassword.value;

  loginButton.disabled = !formValid;
}

// 비밀번호 보기/숨기기 토글

pwToggle.forEach((button) => {
  button.addEventListener("click", (target) => {
    const clickBtn = target.currentTarget;
    const parentEle = clickBtn.closest(".flex_item");
    const targetInput = parentEle.querySelector(".sign_input_field");
    const img = clickBtn.querySelector(".pw-icon");

    if (targetInput.type === "password") {
      targetInput.type = "text";
      img.src = changeImg.show;
    } else {
      targetInput.type = "password";
      img.src = changeImg.hide;
    }
  });
});
