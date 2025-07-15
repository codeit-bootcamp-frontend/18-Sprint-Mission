document.addEventListener('DOMContentLoaded', function() {
  //DOMContentLoaded --> HTML이 완전히 로드된 후 실행
  
  // DOM 요소 선택
  const emailInput = document.getElementById('email');
  const nicknameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const passwordCheckInput = document.getElementById('password-check');
  const signupButton = document.querySelector('.signup-button-content');
  const form = document.querySelector('.signup-form-content');

  // 유효성 상태 관리
  const validationState = {
    email: {
      isValid: false,
      errorElement: null
    },
    nickname: {
      isValid: false,
      errorElement: null
    },
    password: {
      isValid: false,
      errorElement: null
    },
    passwordCheck: {
      isValid: false,
      errorElement: null
    }
  };

  // 이메일 유효성 검사 함수
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // 에러 메시지 생성 함수
  function createErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    return errorDiv;
  }

  // 에러 표시 함수
  function showError(inputElement, message, fieldName) {
    // 기존 에러 메시지 제거
    removeError(fieldName);
    
    // input에 에러 스타일 적용
    inputElement.style.border = '1px solid #ef4444';
    
    // 에러 메시지 생성
    const errorElement = createErrorMessage(message);
    
    // 부모 컨테이너(section) 끝에 에러 메시지 추가
    inputElement.parentElement.appendChild(errorElement);
    
    // 상태 업데이트
    validationState[fieldName].isValid = false;
    validationState[fieldName].errorElement = errorElement;
  }

  // 에러 제거 함수
  function removeError(fieldName) {
    const state = validationState[fieldName];
    if (state.errorElement) {
      state.errorElement.remove();
      state.errorElement = null;
    }
    
    // input 스타일 원래대로
    let input;
    switch(fieldName) {
      case 'email':
        input = emailInput;
        break;
      case 'nickname':
        input = nicknameInput;
        break;
      case 'password':
        input = passwordInput;
        break;
      case 'passwordCheck':
        input = passwordCheckInput;
        break;
    }
    input.style.border = '1px solid var(--gray-100)';
    
    state.isValid = true;
  }

  // 폼 유효성 상태 업데이트 함수
  function updateFormValidation() {
    const emailValue = emailInput.value.trim();
    const nicknameValue = nicknameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const passwordCheckValue = passwordCheckInput.value.trim();
    
    const hasErrors = !validationState.email.isValid || 
                     !validationState.nickname.isValid || 
                     !validationState.password.isValid || 
                     !validationState.passwordCheck.isValid;
    const hasEmptyFields = !emailValue || !nicknameValue || !passwordValue || !passwordCheckValue;
    
    if (hasErrors || hasEmptyFields) {
      signupButton.disabled = true;
      signupButton.style.backgroundColor = '#9ca3af';
      signupButton.style.cursor = 'not-allowed';
      signupButton.style.opacity = '0.7';
    } else {
      signupButton.disabled = false;
      signupButton.style.backgroundColor = 'var(--blue)';
      signupButton.style.cursor = 'pointer';
      signupButton.style.opacity = '1';
    }
  }

  // 이메일 유효성 검사
  function validateEmailField() {
    const emailValue = emailInput.value.trim();
    
    if (!emailValue) {
      showError(emailInput, '이메일을 입력해주세요.', 'email');
    } else if (!validateEmail(emailValue)) {
      showError(emailInput, '잘못된 이메일입니다.', 'email');
    } else {
      removeError('email');
    }
  }

  // 닉네임 유효성 검사
  function validateNicknameField() {
    const nicknameValue = nicknameInput.value.trim();
    
    if (!nicknameValue) {
      showError(nicknameInput, '닉네임을 입력해주세요.', 'nickname');
    } else {
      removeError('nickname');
    }
  }

  // 비밀번호 유효성 검사
  function validatePasswordField() {
    const passwordValue = passwordInput.value.trim();
    
    if (!passwordValue) {
      showError(passwordInput, '비밀번호를 입력해주세요.', 'password');
    } else if (passwordValue.length < 8) {
      showError(passwordInput, '비밀번호를 8자 이상 입력해주세요.', 'password');
    } else {
      removeError('password');
    }
  }

  // 비밀번호 확인 유효성 검사
  function validatePasswordCheckField() {
    const passwordValue = passwordInput.value.trim();
    const passwordCheckValue = passwordCheckInput.value.trim();
    
    if (!passwordCheckValue) {
      showError(passwordCheckInput, '비밀번호 확인을 입력해주세요.', 'passwordCheck');
    } else if (passwordValue !== passwordCheckValue) {
      showError(passwordCheckInput, '비밀번호가 일치하지 않습니다.', 'passwordCheck');
    } else {
      removeError('passwordCheck');
    }
  }

  // 이벤트 리스너 등록
  emailInput.addEventListener('blur', function() {
    validateEmailField();
    updateFormValidation();
  });

  emailInput.addEventListener('input', function() {
    updateFormValidation();
  });

  nicknameInput.addEventListener('blur', function() {
    validateNicknameField();
    updateFormValidation();
  });

  nicknameInput.addEventListener('input', function() {
    updateFormValidation();
  });

  passwordInput.addEventListener('blur', function() {
    validatePasswordField();
    updateFormValidation();
  });

  passwordInput.addEventListener('input', function() {
    // 비밀번호가 변경되면 비밀번호 확인도 다시 검사
    if (passwordCheckInput.value.trim()) {
      validatePasswordCheckField();
    }
    updateFormValidation();
  });

  passwordCheckInput.addEventListener('blur', function() {
    validatePasswordCheckField();
    updateFormValidation();
  });

  passwordCheckInput.addEventListener('input', function() {
    updateFormValidation();
  });

  // 폼 제출 처리
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 최종 유효성 검사
    validateEmailField();
    validateNicknameField();
    validatePasswordField();
    validatePasswordCheckField();
    
    // 모든 유효성 검사 통과 시 페이지 이동
    if (validationState.email.isValid && 
        validationState.nickname.isValid && 
        validationState.password.isValid && 
        validationState.passwordCheck.isValid) {
      const emailValue = emailInput.value.trim();
      const nicknameValue = nicknameInput.value.trim();
      const passwordValue = passwordInput.value.trim();
      const passwordCheckValue = passwordCheckInput.value.trim();
      
      if (emailValue && nicknameValue && passwordValue && passwordCheckValue) {
        window.location.href = 'signin.html';
      }
    }
    
    updateFormValidation();
  });

  // 비밀번호 표시/숨기기 기능
  const visibilityBtns = document.querySelectorAll('.visibility-btn');
  visibilityBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      // 첫 번째 버튼은 비밀번호, 두 번째 버튼은 비밀번호 확인
      const targetInput = index === 0 ? passwordInput : passwordCheckInput;
      
      if (targetInput.type === 'password') {
        targetInput.type = 'text';
        this.src = 'images/password-check/btn_visibility_on_24px.png';
      } else {
        targetInput.type = 'password';
        this.src = 'images/password-check/btn_visibility_off_24px.png';
      }
    });
  });

  // 초기 상태 설정
  validationState.email.isValid = false;
  validationState.nickname.isValid = false;
  validationState.password.isValid = false;
  validationState.passwordCheck.isValid = false;
  updateFormValidation();
});
