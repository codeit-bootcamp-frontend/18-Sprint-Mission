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

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  const loginButton = document.getElementById('login-button');

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function updateButtonState() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const emailValid = emailValue !== '' && validateEmail(emailValue);
    const passwordValid = passwordValue !== '' && passwordValue.length >= 8;
    if (emailValid && passwordValid) {
      loginButton.disabled = false;
      loginButton.classList.add('enabled');
    } else {
      loginButton.disabled = true;
      loginButton.classList.remove('enabled');
    }
  }

  emailInput.addEventListener('input', function () {
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

  passwordInput.addEventListener('input', function () {
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

  loginButton.addEventListener('click', function () {
    if (!this.disabled) {
      window.location.href = '/items';
    }
  });

  updateButtonState();
});
