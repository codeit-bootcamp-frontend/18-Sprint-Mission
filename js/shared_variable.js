export const form = document.querySelector(".form_contorl");
export const userEmail = document.querySelector("#user_email");
export const userPassword = document.querySelector("#user_password");
export const loginButton = document.querySelector(".connection_button");
export const emailErrorMsg = document.querySelector(".info_email .error_msg");
export const pwErrorMsg = document.querySelector(".info_password .error_msg");
export const pwToggle = document.querySelector(".password_toggle");

export const errMsg = {
  id: {
    voidOut: "이메일을 입력해주세요.",
    fail: "잘못된 이메일 형식입니다.",
  },
  pw: {
    voidOut: "비밀번호를 입력해주세요.",
    fail: "비밀번호를 8자 이상 입력해주세요.",
  },
};

export const changimg = {
  hide: "./icon/ic_passwrod_hide.svg",
  show: "./icon/ic_passwrod_open.svg",
};
