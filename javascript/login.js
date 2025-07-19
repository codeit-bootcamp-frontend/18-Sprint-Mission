const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");
const loginForm = document.querySelector(".login-inputForm");

// 이메일 유효시 상태 초기화 함수
const hideError = (input, errorId) => {
  const errorElm = document.getElementById(errorId);
  errorElm.style.display = "none";
  input.style.border = "none";
};

//이메일 오류시 메시지 노출 함수
function showError(input, errorId) {
  const errorElm = document.getElementById(errorId);
  errorElm.style.display = "block";
  input.style.border = "1px solid #f74747";
}

//이메일 형식 유효성 검사. 자바스크립트는 슬래시(/)로 감싸서 정규표현식인지 알아봄. 정규표현식 test()는 boolean 리턴
function validateEmailString(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}

//이메일 인풋 유효성 검사
function checkEmailValidation() {
  const emailInputValue = emailInput.value.trim();
  if (!emailInputValue) {
    showError(emailInput, "emailEmptyErr");
  } else if (!validateEmailString(emailInputValue)) {
    showError(emailInput, "emailInvalidErr");
  } else {
    hideError(emailInput, "emailEmptyErr");
    hideError(emailInput, "emailInvalidErr");
  }
}

//패스워드 인풋 유효성 검사
const checkPasswordValidation = () => {
  const passwordInputValue = passwordInput.value.trim();

  if (!passwordInputValue) {
    showError(passwordInput, "passwordEmptyErr");
  } else if (passwordInputValue < 8) {
    showError(passwordInput, "passwordInvalidErr");
  } else {
    hideError(passwordInput, "passwordEmptyErr");
    hideError(passwordInput, "passwordInvalidErr");
  }
};

emailInput.addEventListener("focusout", checkEmailValidation);
passwordInput.addEventListener("focusout", checkPasswordValidation);

//아이디, 패스워드 유효하면 items으로 이동
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "../items/";
  });
}
