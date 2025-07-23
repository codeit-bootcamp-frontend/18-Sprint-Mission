import {
  createErrorTag,
  clearErrorTag,
  isValidEmail,
  isValidValue,
} from "../formUtils.js";
const $signupEmail = document.querySelector("#signup-email");
const $signupNickname = document.querySelector("#signup-nickname");
const $signupPassword = document.querySelector("#signup-password");
const $signupCheckPassword = document.querySelector("#signup-checkPassword");
const $signupBtn = document.querySelector("#signup-btn");
const $signupForm = document.querySelector("#signup-form");
const $signupPasswordVisibilityBtn = document.querySelector(
  "#signup-password-visibility-btn"
);
const $signupCheckPasswordVisibilityBtn = document.querySelector(
  "#signup-checkPassword-visibility-btn"
);

$signupEmail.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target;
  if (!value) {
    const errorTag = createErrorTag(e.target, "이메일을 입력해주세요");
    $signupBtn.disabled = true;
    isValidValue.signup.signupEmail = false;
    return errorTag;
  }

  if (!isValidEmail(value)) {
    const errorTag = createErrorTag(e.target, "잘못된 이메일 형식입니다");
    $signupBtn.disabled = true;
    isValidValue.signup.signupEmail = false;
    return errorTag;
  }

  isValidValue.signup.signupEmail = true;
  const checkAll = Object.values(isValidValue.signup).every(
    (bool) => bool === true
  );
  if (checkAll) {
    $signupBtn.disabled = false;
  }
});

$signupNickname.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target;
  if (!value) {
    const errorTag = createErrorTag(e.target, "닉네임을 입력해주세요");
    $signupBtn.disabled = true;
    isValidValue.signup.signupNickname = false;
    return errorTag;
  }

  isValidValue.signup.signupNickname = true;
  const checkAll = Object.values(isValidValue.signup).every(
    (bool) => bool === true
  );
  if (checkAll) {
    $signupBtn.disabled = false;
  }
});

$signupPassword.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target;
  if (!value) {
    const errorTag = createErrorTag(e.target, "비밀번호를 입력해주세요");
    isValidValue.signup.signupPassword = false;
    $signupBtn.disabled = true;
    return errorTag;
  }

  if (value.length < 8) {
    const errorTag = createErrorTag(
      e.target,
      "비밀번호를 8자 이상 입력해주세요."
    );
    isValidValue.signup.signupPassword = false;
    $signupBtn.disabled = true;
    return errorTag;
  }

  if (
    value !== $signupCheckPassword.value &&
    $signupCheckPassword.value !== ""
  ) {
    const errorTag = createErrorTag(e.target, "비밀번호가 일치하지 않습니다");
    isValidValue.signup.signupPassword = false;
    $signupBtn.disabled = true;
    return errorTag;
  }
  isValidValue.signup.signupPassword = true;
  const checkAll = Object.values(isValidValue.signup).every(
    (bool) => bool === true
  );

  if (checkAll) {
    $signupBtn.disabled = false;
  }
});

$signupCheckPassword.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target;
  if (value !== $signupPassword.value) {
    const errorTag = createErrorTag(e.target, "비밀번호가 일치하지 않습니다");
    $signupBtn.disabled = true;
    isValidValue.signup.signupCheckPassword = false;
    return errorTag;
  }

  isValidValue.signup.signupCheckPassword = true;
  const checkAll = Object.values(isValidValue.signup).every(
    (bool) => bool === true
  );

  if (checkAll) {
    $signupBtn.disabled = false;
  }
});

$signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/pages/loginAndSignupPage/loginPage/login.html";
});

$signupPasswordVisibilityBtn.addEventListener("click", (e) => {
  if ($signupPassword.type === "password") {
    $signupPassword.type = "text";
    e.target.src = "../../../images/visibility-on.svg";
  } else {
    $signupPassword.type = "password";
    e.target.src = "../../../images/visibility-icon.svg";
  }
});

$signupCheckPasswordVisibilityBtn.addEventListener("click", (e) => {
  if ($signupCheckPassword.type === "password") {
    $signupCheckPassword.type = "text";
    e.target.src = "../../../images/visibility-on.svg";
  } else {
    $signupCheckPassword.type = "password";
    e.target.src = "../../../images/visibility-icon.svg";
  }
});
