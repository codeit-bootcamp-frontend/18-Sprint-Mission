import {
  clearErrorTag,
  createErrorTag,
  isValidEmail,
  isValidValue,
} from "../formUtils.js";

const $loginForm = document.querySelector("#login-form");
const $loginEmail = document.querySelector("#login-email");
const $loginPassword = document.querySelector("#login-password");
const $loginBtn = document.querySelector("#login-btn");
const $visibilityBtn = document.querySelector(".visibility-img");

$loginEmail.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target;
  if (!value) {
    const errorTag = createErrorTag(e.target, "이메일을 입력해주세요");
    $loginBtn.disabled = true;
    return errorTag;
  }

  if (!isValidEmail(value)) {
    const errorTag = createErrorTag(e.target, "잘못된 이메일 형식입니다");
    $loginBtn.disabled = true;
    return errorTag;
  }
  isValidValue.login.loginEmail = true;
  const checkAll = Object.values(isValidValue.login).every(
    (bool) => bool === true
  );
  if (checkAll) {
    $loginBtn.disabled = false;
  }
});

$loginPassword.addEventListener("focusout", (e) => {
  e.preventDefault();
  clearErrorTag(e.target);
  const { value } = e.target;
  if (!value) {
    const errorTag = createErrorTag(e.target, "비밀번호를 입력해주세요");
    $loginBtn.disabled = true;
    return errorTag;
  }

  if (value.length < 8) {
    const errorTag = createErrorTag(
      e.target,
      "비밀번호를 8자 이상 입력해주세요."
    );
    $loginBtn.disabled = true;
    return errorTag;
  }
  isValidValue.login.loginPassword = true;
  const checkAll = Object.values(isValidValue.login).every(
    (bool) => bool === true
  );

  if (checkAll) {
    $loginBtn.disabled = false;
  }
});

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/items";
});

$visibilityBtn.addEventListener("click", () => {
  const $passwordVisibilityImg = document.querySelector(
    "#password-visibility-img"
  );
  if ($loginPassword.type === "password") {
    $loginPassword.type = "text";
    $passwordVisibilityImg.src = "../../../images/visibility-on.svg";
  } else {
    $loginPassword.type = "password";
    $passwordVisibilityImg.src = "../../../images/visibility-icon.svg";
  }
});
