// 비밀번호 표시/숨기기 기능
function inputPassword(inputId, eyeId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "images/eye-on.png";
    eyeIcon.alt = "비밀번호 보기";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "images/eye-off.png";
    eyeIcon.alt = "비밀번호 숨기기";
  }
}

// 비밀번호 확인 표시/숨기기 기능
function confirmPassword(inputId, eyeId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "images/eye-on.png";
    eyeIcon.alt = "비밀번호 보기";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "images/eye-off.png";
    eyeIcon.alt = "비밀번호 숨기기";
  }
}

// 이메일 유효성 검사
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 에러 메시지 표시
function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);
  
  input.style.border = "1px solid red";
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.fontSize = "12px";
  errorElement.style.marginTop = "5px";
}

// 에러 메시지 제거
function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);
  
  input.style.border = "";
  errorElement.textContent = "";
}

// 버튼 활성화/비활성화
function toggleSignupButton() {
  const emailInput = document.getElementById('email');
  const nicknameInput = document.getElementById('nickname');
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('password-confirm');
  const signupBtn = document.getElementById('signupBtn');
  
  const emailError = document.getElementById('email-error');
  const nicknameError = document.getElementById('nickname-error');
  const passwordError = document.getElementById('password-error');
  const passwordConfirmError = document.getElementById('password-confirm-error');
  
  const isEmailValid = emailInput.value.trim() !== '' && validateEmail(emailInput.value);
  const isNicknameValid = nicknameInput.value.trim() !== '';
  const isPasswordValid = passwordInput.value.trim() !== '' && passwordInput.value.length >= 8;
  const isPasswordConfirmValid = passwordConfirmInput.value.trim() !== '' && 
                                 passwordInput.value === passwordConfirmInput.value;
  
  const hasErrors = emailError.textContent !== '' || 
                    nicknameError.textContent !== '' || 
                    passwordError.textContent !== '' || 
                    passwordConfirmError.textContent !== '';
  
  signupBtn.disabled = !(isEmailValid && isNicknameValid && isPasswordValid && isPasswordConfirmValid && !hasErrors);
}

// 비밀번호 확인 검사
function validatePasswordConfirm() {
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('password-confirm');
  
  if (passwordConfirmInput.value.trim() !== '' && passwordInput.value !== passwordConfirmInput.value) {
    showError('password-confirm', 'password-confirm-error', '비밀번호가 일치하지 않습니다.');
  } else {
    clearError('password-confirm', 'password-confirm-error');
  }
}

// DOM 로드 후 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const nicknameInput = document.getElementById('nickname');
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('password-confirm');
  const signupForm = document.getElementById('signupForm');
  
  // 이메일 입력 필드 이벤트
  emailInput.addEventListener('focusout', function() {
    const email = this.value.trim();
    
    if (email === '') {
      showError('email', 'email-error', '이메일을 입력해주세요.');
    } else if (!validateEmail(email)) {
      showError('email', 'email-error', '잘못된 이메일 형식입니다.');
    } else {
      clearError('email', 'email-error');
    }
    
    toggleSignupButton();
  });
  
  // 닉네임 입력 필드 이벤트
  nicknameInput.addEventListener('focusout', function() {
    const nickname = this.value.trim();
    
    if (nickname === '') {
      showError('nickname', 'nickname-error', '닉네임을 입력해주세요.');
    } else {
      clearError('nickname', 'nickname-error');
    }
    
    toggleSignupButton();
  });
  
  // 비밀번호 입력 필드 이벤트
  passwordInput.addEventListener('focusout', function() {
    const password = this.value.trim();
    
    if (password === '') {
      showError('password', 'password-error', '비밀번호를 입력해주세요.');
    } else if (password.length < 8) {
      showError('password', 'password-error', '비밀번호를 8자 이상 입력해주세요.');
    } else {
      clearError('password', 'password-error');
    }
    
    // 비밀번호가 변경되면 비밀번호 확인도 다시 검사
    validatePasswordConfirm();
    toggleSignupButton();
  });
  
  // 비밀번호 확인 입력 필드 이벤트
  passwordConfirmInput.addEventListener('focusout', function() {
    validatePasswordConfirm();
    toggleSignupButton();
  });
  
  // 입력 시에도 버튼 상태 체크
  emailInput.addEventListener('input', toggleSignupButton);
  nicknameInput.addEventListener('input', toggleSignupButton);
  passwordInput.addEventListener('input', function() {
    validatePasswordConfirm();
    toggleSignupButton();
  });
  passwordConfirmInput.addEventListener('input', function() {
    validatePasswordConfirm();
    toggleSignupButton();
  });
  
  // 폼 제출 이벤트
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const signupBtn = document.getElementById('signupBtn');
    if (!signupBtn.disabled) {
      // 회원가입 성공 시 로그인 페이지로 이동
      window.location.href = '/login';
    }
  });
});