export function validateEmail(value) {
  if (!value) {
    return "이메일을 입력해주세요.";
  } else {
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!regex.test(value)) {
      return "잘못된 이메일 형식입니다";
    } else {
      return null;
    }
  }
}

// function validateNickname(value) {
//   if (!isSignup) {
//     return null; // 로그인일 경우 닉네임 검사 안 함
//   } else {
//     if (!value) {
//       return "닉네임을 입력해주세요.";
//     } else {
//       return null;
//     }
//   }
// }

export function validateNickname(value, isSignup) {
  // 로그인에서는 닉네임 검사 안함
  if (!isSignup) return null;
  if (!value) return "닉네임을 입력해주세요.";
  return null;
}

// function validatePassword(value) {
//   if (!value) {
//     return "비밀번호를 입력해주세요.";
//   } else if (value.length < 8) {
//     return "비밀번호를 8자 이상 입력해주세요.";
//   } else {
//     return null;
//   }
// }

export function validatePassword(value) {
  if (!value) return "비밀번호를 입력해주세요.";
  if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
  return null;
}

// function validateConfirmPassword(value, password) {
//   if (!isSignup) {
//     return null;
//   } else if (value !== password) {
//     return "비밀번호가 일치하지 않습니다.";
//   } else {
//     return null;
//   }
// }

export function validateConfirmPassword(value, password, isSignup) {
  // 로그인에서는 비밀번호 확인 검사 안함
  if (!isSignup) return null;
  if (value !== password) return "비밀번호가 일치하지 않습니다.";
  return null;
}