/*눈 아이콘*/
function inputPassword(inputId, eyeId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.src = 'images/eye-on.svg';
  } else {
    passwordInput.type = 'password';
    eyeIcon.src = 'images/eye-off.svg';
  }
}

function confirmPassword(inputId, eyeId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.src = 'images/eye-on.svg';
  } else {
    passwordInput.type = 'password';
    eyeIcon.src = 'images/eye-off.svg';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const nicknameInput = document.getElementById('nickname');
  const passwordInput = document.getElementById('password');
  const confirmInput = document.getElementById('password-confirm');
  const emailError = document.getElementById('email-error');
  const nicknameError = document.getElementById('nickname-error');
  const passwordError = document.getElementById('password-error');
  const confirmError = document.getElementById('confirm-error');
  const signupButton = document.getElementById('signup-button');

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function updateButtonState() {
    const emailValue = emailInput.value.trim();
    const nickValue = nicknameInput.value.trim();
    const pwValue = passwordInput.value.trim();
    const confirmValue = confirmInput.value.trim();
    const emailValid = emailValue !== '' && validateEmail(emailValue);
    const nickValid = nickValue !== '';
    const pwValid = pwValue !== '' && pwValue.length >= 8;
    const confirmValid =
      confirmValue !== '' &&
      confirmValue.length >= 8 &&
      pwValue === confirmValue;
    if (emailValid && nickValid && pwValid && confirmValid) {
      signupButton.disabled = false;
      signupButton.classList.add('enabled');
    } else {
      signupButton.disabled = true;
      signupButton.classList.remove('enabled');
    }
  }

  emailInput.addEventListener('blur', function () {
    const value = emailInput.value.trim();
    if (value === '') {
      emailInput.classList.add('error-input');
      emailError.textContent = '이메일을 입력해주세요.';
      emailError.style.display = 'block';
    } else if (!validateEmail(value)) {
      emailInput.classList.add('error-input');
      emailError.textContent = '잘못된 이메일 형식입니다.';
      emailError.style.display = 'block';
    } else {
      emailInput.classList.remove('error-input');
      emailError.textContent = '';
      emailError.style.display = 'none';
    }
    updateButtonState();
  });

  nicknameInput.addEventListener('blur', function () {
    const value = nicknameInput.value.trim();
    if (value !== '') {
      nicknameInput.classList.add('correct-input');
    } else {
      nicknameInput.classList.remove('correct-input');
    }
    updateButtonState();
  });

  passwordInput.addEventListener('blur', function () {
    const value = passwordInput.value.trim();
    if (value === '') {
      passwordInput.classList.add('error-input');
      passwordError.textContent = '비밀번호를 입력해주세요.';
      passwordError.style.display = 'block';
    } else if (value.length < 8) {
      passwordInput.classList.add('error-input');
      passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
      passwordError.style.display = 'block';
    } else {
      passwordInput.classList.remove('error-input');
      passwordError.textContent = '';
      passwordError.style.display = 'none';
    }
    updateButtonState();
  });

  confirmInput.addEventListener('blur', function () {
    const pwValue = passwordInput.value.trim();
    const value = confirmInput.value.trim();
    if (value === '') {
      confirmInput.classList.add('error-input');
      confirmError.textContent = '비밀번호 확인을 입력해주세요.';
      confirmError.style.display = 'block';
    } else if (value.length < 8) {
      confirmInput.classList.add('error-input');
      confirmError.textContent = '비밀번호 확인을 8자 이상 입력해주세요.';
      confirmError.style.display = 'block';
    } else if (pwValue !== value) {
      confirmInput.classList.add('error-input');
      confirmError.textContent = '비밀번호가 일치하지 않습니다.';
      confirmError.style.display = 'block';
    } else {
      confirmInput.classList.remove('error-input');
      confirmError.textContent = '';
      confirmError.style.display = 'none';
    }
    updateButtonState();
  });

  emailInput.addEventListener('input', updateButtonState);
  nicknameInput.addEventListener('input', updateButtonState);
  passwordInput.addEventListener('input', updateButtonState);
  confirmInput.addEventListener('input', updateButtonState);

  signupButton.addEventListener('click', function () {
    if (!this.disabled) {
      window.location.href = 'login.html';
    }
  });

  updateButtonState();
});
