export function validateEmail(email) {
  if (!email) {
    return "이메일을 입력해주세요.";
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "잘못된 이메일 형식입니다.";
  }

  return null;
}

export function validateUsername(username) {
  if (!username) {
    return "닉네임을 입력해주세요.";
  }

  return null;
}

export function validatePassword(password) {
  if (!password) {
    return "비밀번호를 입력해주세요.";
  }

  if (password.length < 8) {
    return "비밀번호를 8자 이상 입력해주세요.";
  }

  return null;
}

export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword || password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  }

  return null;
}
