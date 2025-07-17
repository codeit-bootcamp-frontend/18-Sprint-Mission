// auth.js: 폼 UI, 이벤트, 유효성 체크 JS
import { validateEmail, validateNickName, validatePassword, passwordMatch } from "../utils/validators.js";

const form = document.querySelector(".form");
const formFields = form.querySelectorAll("input");
const togglePasswordBtn = form.querySelectorAll(".password-input__toggle");
const submitBtn = form.querySelector(".btn--submit");
const authType = form.dataset.auth;

/* 유효성 검사 함수 매핑(id 기반) 객체이기 때문에 
객체 key 관리 시, 지정한 각 폼 요소 id 이름하고 동일하게 작성 */
const validators = {
    email: validateEmail,
    nickname: validateNickName,
    password: validatePassword,
    passwordConfirm: (passwordConfirm) => {
        const password = form.querySelector("#password").value;
        return passwordMatch(password, passwordConfirm);
    },
}

// 상태 메시지 관리
const setStatusMessage = (field, message, statusType = "") => {
    const formField = field.closest(".form-field");
    const currentMessage = formField.querySelector(".message");

    if (currentMessage) {
        currentMessage.remove();
    }
    formField.classList.forEach(className => {
        if (className.startsWith("status--")) {
            formField.classList.remove(className);
        }
    });

    if (message) {
        const messageEl = document.createElement("span");
        messageEl.className = "message";
        messageEl.textContent = message;

        if (statusType) {
            formField.classList.add(`status--${statusType}`);
        }

        field.after(messageEl);

    }
};

// 폼 유효성 체크
const checkForm = () => {
    for (const field of formFields) {
        const targetFieldId = validators[field.id];
        if (!targetFieldId) {
            continue;
        };

        const { status } = targetFieldId(field.value);
        if (status !== "success") {
            submitBtn.disabled = true;
            return;
        }
    }
    submitBtn.disabled = false;
}

// s: 이벤트 관리
// click: 패스워드 비밀번호 표시/숨기기 버튼 토글 기능
togglePasswordBtn.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
        const isPressed = toggleBtn.getAttribute("aria-pressed") === "true";
        const inputType = toggleBtn.closest(".password-input").querySelector("input");

        toggleBtn.setAttribute("aria-pressed", isPressed ? "false" : "true");
        inputType.type = isPressed ? "password" : "text";
    });
});

// focusout: targetFieldId 검증, 폼 체크
form.addEventListener("focusout", (e) => {
    const targetField = e.target;
    const targetFieldId = validators[targetField.id];
    if (!targetFieldId) {
        return;
    };

    const { message, status } = targetFieldId(targetField.value);
    setStatusMessage(targetField, message, status);

    checkForm();
});

// submit: 폼 제출 페이지 이동
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (authType === "login") {
        window.location.href = "/pages/products/items.html";
    } else if (authType === "signup") {
        window.location.href = "./login.html";
    }
});