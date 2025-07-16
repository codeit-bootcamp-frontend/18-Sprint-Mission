// validators.js: 입력 검증 함수, 상태 반환 관리 JS
const SUCCESS = { message: "", status: "success" };

// 이메일 입력 검증
export const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
        return { message: "이메일을 입력해주세요.", status: "error" };
    }
    if (!pattern.test(email)) {
        return { message: "잘못된 이메일 형식입니다.", status: "error" };
    }

    return SUCCESS;
};

// 닉네임 입력 검증
export const validateNickName = (nickname) => {
    if (!nickname) {
        return { message: "닉네임을 입력해주세요.", status: "error" };
    }
    return SUCCESS;
};

// 패스워드 입력 검증
export const validatePassword = (password) => {
    if (!password) {
        return { message: "비밀번호를 입력해주세요.", status: "error" };
    }
    if (password.length < 8) {
        return { message: "비밀번호를 8자 이상 입력해주세요.", status: "error" };
    }

    return SUCCESS;
};

// 패스워드 값 일치 검증
export const passwordMatch = (password, passwordConfirm) => {
    if (password !== passwordConfirm) {
        return { message: "비밀번호가 일치하지 않습니다.", status: "error" };
    }
    return SUCCESS;
};