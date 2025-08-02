// 에러메세지
const createErrorMsg = (name, msg) => {
  const input = document.querySelector(`[name="${name}"]`);
  const parent = input.closest(".form-field");
  const msgBox = parent.lastElementChild;
  if (msgBox.classList.contains("form-error-msg")) {
    msgBox.textContent = msg;
  } else {
    input.classList.add("error");
    parent.insertAdjacentHTML("beforeend", `<div class="form-error-msg">${msg}</div>`);
  }
  updateFormState(name, false);
};
const removeErrorMsg = (name) => {
  const input = document.querySelector(`[name="${name}"]`);
  const parent = input.closest(".form-field");
  const msgBox = parent.lastElementChild;
  if (input.classList.contains("error")) {
    input.classList.remove("error");
    msgBox.remove();
  }
  updateFormState(name, true);
};

// 이메일 정규식 검사
const isValidEmailFormat = (email) => {
  const reg = /^[0-9a-zA-Z]([\w.-]*[0-9a-zA-Z])?@[0-9a-zA-Z]([\w.-]*[0-9a-zA-Z])?\.[a-zA-Z]{2,}$/;
  return reg.test(email);
};
// 이메일 유효성 검사
const validateEmail = (name, email) => {
  if (email.trim().length === 0) {
    createErrorMsg(name, "이메일을 입력해주세요.");
  } else {
    !isValidEmailFormat(email) ? createErrorMsg(name, "잘못된 이메일 형식입니다.") : removeErrorMsg(name);
  }
};
// 비밀번호 검사
const validatePassword = (name, password) => {
  if (password.length === 0) {
    createErrorMsg(name, "비밀번호를 입력해주세요.");
  } else if (password.length < 8) {
    createErrorMsg(name, "비밀번호를 8자 이상 입력해주세요.");
  } else {
    removeErrorMsg(name);
  }
};

// 폼 유효성 검사
const validateForm = (name, value) => {
  if (name === "userEmail") {
    validateEmail(name, value);
  } else if (name === "password") {
    validatePassword(name, value);
  }
};
const form = document.querySelector(".form-wrapper");
const submitBtn = form.elements.submitBtn;
const formState = {
  userEmail: false,
  password: false,
};
// 폼 상태 관리
const updateFormState = (name, isValid) => {
  formState[name] = isValid;
  submitBtn.disabled = !Object.values(formState).every(Boolean);
};
// 폼 이벤트 등록
form.addEventListener("input", (e) => {
  const { name, value } = e.target;
  validateForm(name, value);
});

// 전송 이벤트 등록
submitBtn.addEventListener("click", (e) => {
  const field = form.querySelectorAll("input");
  field.forEach((input) => {
    validateForm(input.name, input.value); // 전송 전 유효성 한번 더 체크
  });
  e.preventDefault(); // submit 막기
  submitBtn = location.href = "../items";
});

// 비밀번호 숨김/보기 토글
const passwordToggle = (target) => {
  const btn = target;
  if (!btn.classList.contains("show")) {
    btn.classList.remove("hide");
    btn.classList.add("show");
    btn.setAttribute("aria-label", "비밀번호 보기");
    btn.previousElementSibling.setAttribute("type", "text");
  } else {
    btn.classList.remove("show");
    btn.classList.add("hide");
    btn.setAttribute("aria-label", "비밀번호 숨기기");
    btn.previousElementSibling.setAttribute("type", "password");
  }
};

// 비밀번호 토글 이벤트 등록
const pwToggle = document.querySelectorAll(".password-toggle");
pwToggle.forEach((btn) => {
  btn.addEventListener("click", ({ target }) => {
    passwordToggle(target);
  });
});
