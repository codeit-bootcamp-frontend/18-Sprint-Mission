const emailDiv = document.getElementById('email-input');
const emailInput = document.getElementById('email');
const passwordDiv = document.getElementById('password-input');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn')
const loginForm = document.getElementById('loginForm')

// focus 시 기존 에러 메시지 제거
emailInput.addEventListener('focus', () => {
  const existingError = document.querySelector('.email-error-message');
  if (existingError) {
    emailDiv.removeChild(existingError);
  }
});


passwordInput.addEventListener('focus', () => {
  const existingError = document.querySelector('.password-error-message');
  if (existingError) {
    passwordDiv.removeChild(existingError);
  }
});

// focusout 시 이메일 유효성 검사
emailInput.addEventListener('focusout', () => {
  const email = emailInput.value.trim();
  const existingError = document.querySelector('.email-error-message');

  // 1. 입력 안 했을 경우
  if (email === '') {
    emailInput.classList.add('error');
    
    if (!existingError) {
      const emailBlankMessage = document.createElement('div');
      emailBlankMessage.innerText = '이메일을 입력해주세요.';
      emailBlankMessage.classList.add('email-error-message');
      emailDiv.appendChild(emailBlankMessage);
    }

    return; // 입력이 없으면 형식 검사 안 함
  }

  // 2. 이메일 형식이 올바르지 않은 경우
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    emailInput.classList.add('error');

    if (!existingError) {
      const emailErrorMessage = document.createElement('div');
      emailErrorMessage.innerText = '잘못된 형식입니다.';
      emailErrorMessage.classList.add('email-error-message');
      emailDiv.appendChild(emailErrorMessage);
    }

    return;
  }

  // 3. 정상 입력일 경우
  emailInput.classList.remove('error');
  if (existingError) {
    emailDiv.removeChild(existingError);
  }
    setTimeout(loginAble, 0);
});



passwordInput.addEventListener('focusout', () => {
    const password = passwordInput.value.trim();
    const existingError = document.querySelector('.password-error-message'); 
    if (password.length < 8){
        passwordInput.classList.add('error');
        const passwordShortMessage = document.createElement('div');
        passwordShortMessage.innerText = '비밀번호를 8자 이상 입력해주세요.';
        passwordShortMessage.classList.add('password-error-message');
        passwordDiv.appendChild(passwordShortMessage);
    } else {
        passwordInput.classList.remove('error');
        // 에러 메시지 제거
        if (existingError) {
        passwordDiv.removeChild(existingError);
        }
    }
    setTimeout(loginAble, 0);
  });

loginForm.addEventListener('submit', (e) => {
    if (loginBtn.classList.contains("disable")){
        e.preventDefault();
    }
})

function loginAble() {
  const hasPasswordError = document.querySelector('.password-error-message') !== null;
  const hasEmailError = document.querySelector('.email-error-message') !== null;
  const isEmailEmpty = emailInput.value.trim() === '';
  const isPasswordEmpty = passwordInput.value.trim() === '';

  if (hasPasswordError || hasEmailError || isEmailEmpty || isPasswordEmpty) {
    loginBtn.classList.add('disable');
    loginBtn.classList.remove('enable');
  } else {
    loginBtn.classList.remove('disable');
    loginBtn.classList.add('enable');
  }
}

emailInput.addEventListener('input',loginAble)
passwordInput.addEventListener('input',loginAble)

