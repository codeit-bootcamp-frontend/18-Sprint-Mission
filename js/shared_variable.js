export const form = document.querySelector(".form_contorl");
export const userEmail = document.querySelector("#user_email");
export const userPassword = document.querySelector("#user_password");
export const submitButton = document.querySelector(".connection_button");
export const emailErrorMsg = document.querySelector(".info_email .error_msg");
export const pwErrorMsg = document.querySelector(".info_password .error_msg");
export const pwToggle = document.querySelectorAll(".password_toggle");

export const errMsg = {
  id: {
    voidOut: "이메일을 입력해주세요.",
    fail: "잘못된 이메일 형식입니다.",
  },
  name: {
    fail: "닉네임을 입력해주세요.",
  },
  pw: {
    voidOut: "비밀번호를 입력해주세요.",
    fail: "비밀번호를 8자 이상 입력해주세요.",
  },
  rePw: "비밀번호가 일치하지 않습니다.",
};

export const changeImg = {
  hide: "./icon/ic_passwrod_hide.svg",
  show: "./icon/ic_passwrod_open.svg",
};
