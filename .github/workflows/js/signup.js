const emailDiv = document.getElementById('email-input');
const emailInput = document.getElementById('email');
const passwordDiv = document.getElementById('password-input');
const passwordInput = document.getElementById('password');
const nickNameDiv = document.getElementById('nickName-input');
const nickNameInput = document.getElementById('nickname');
const passwordConfirmationDiv = document.getElementById('passwordConfirmation-input')
const passwordConfirmationInput = document.getElementById('passwordConfirmation')
const signUpForm = document.getElementById('signUpForm')
const signUpBtn = document.getElementById('signUpBtn')

const passwordConfirmationImg = document.getElementById('passwordConfirmationImg')
const passwordImg = document.getElementById('passwordImg')
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

nickNameInput.addEventListener('focus', () => {
  const existingError = document.querySelector('.nickname-error-message');
  if (existingError) {
    nickNameDiv.removeChild(existingError);
  }
});

passwordConfirmationInput.addEventListener('focus', () => {
  const existingError = document.querySelector('.confirmation-error-message');
  if (existingError) {
    passwordConfirmationDiv.removeChild(existingError);
  }
});


// focusout 시 이메일 유효성 검사
emailInput.addEventListener('focusout', () => {
  const email = emailInput.value.trim();
  const existingError = emailDiv.querySelector('.email-error-message');

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
    setTimeout(signUpAble, 0);
});



passwordInput.addEventListener('focusout', () => {
    const password = passwordInput.value.trim();
    const existingError = passwordDiv.querySelector('.password-error-message');
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
    setTimeout(signUpAble, 0);
  });

signUpForm.addEventListener('submit', (e) => {
    if (signUpBtn.classList.contains("disable")){
        e.preventDefault();
    }
})


nickNameInput.addEventListener('focusout', () => {
    const nickName = nickNameInput.value.trim();
    const existingError = nickNameDiv.querySelector('.nickname-error-message');
    setTimeout(signUpAble, 0);
    // 1. 입력 안 했을 경우
    if (nickName === '') {
        nickNameInput.classList.add('error');
        
        if (!existingError) {
            const nickNameBlankMessage = document.createElement('div');
            nickNameBlankMessage.innerText = '닉네임을 입력해주세요.';
            nickNameBlankMessage.classList.add('nickname-error-message');
            nickNameDiv.appendChild(nickNameBlankMessage);
            } 
    }
    else {
            nickNameInput.classList.remove('error');
            // 에러 메시지 제거
            if (existingError) {
                nickNameDiv.removeChild(existingError);
            }
        }
    }
);

passwordConfirmationInput.addEventListener('focusout', () => {
    const password = document.querySelector('#password').value.trim(); 
    const passwordConfirmation = passwordConfirmationInput.value.trim();
    const existingError = passwordConfirmationDiv.querySelector('.confirmation-error-message');

    if (passwordConfirmation !== password) {
            passwordConfirmationInput.classList.add('error')

        if(!existingError) {
            const notPasswordConfirmationMessage = document.createElement('div');
            notPasswordConfirmationMessage.innerText = '비밀번호가 일치하지 않습니다..'
            notPasswordConfirmationMessage.classList.add('confirmation-error-message')
            passwordConfirmationDiv.appendChild(notPasswordConfirmationMessage)
        }
    }
    else {
        passwordConfirmationInput.classList.remove('error');
        // 에러 메시지 제거
        if (existingError) {
            passwordConfirmationDiv.removeChild(existingError);
            }
        }
    setTimeout(signUpAble, 0);
})
    


function signUpAble() {
  const hasPasswordError = document.querySelector('.password-error-message') !== null;
  const hasEmailError = document.querySelector('.email-error-message') !== null;
  const hasNickNameError = document.querySelector('.nickname-error-message') !== null;
  const hasNotPasswordConfirmationError = document.querySelector('.confirmation-error-message') !== null;
  const isEmailEmpty = emailInput.value.trim() === '';
  const isPasswordEmpty = passwordInput.value.trim() === '';
  const isNicknameEmpty = nickNameInput.value.trim() === '';
  const isPasswordConfirmationEmpty = passwordConfirmationInput.value.trim() === '';
  if (hasPasswordError || hasEmailError || isEmailEmpty || isPasswordEmpty || hasNickNameError || hasNotPasswordConfirmationError || isNicknameEmpty || isPasswordConfirmationEmpty) {
    signUpBtn.classList.add('disable');
    signUpBtn.classList.remove('enable');
  } else {
    signUpBtn.classList.remove('disable');
    signUpBtn.classList.add('enable');
  }
}

emailInput.addEventListener('input',signUpAble)
passwordInput.addEventListener('input',signUpAble)
nickNameInput.addEventListener('input',signUpAble)
passwordConfirmationInput.addEventListener('input', signUpAble)



signUpAble();

passwordConfirmationImg.addEventListener('click', () => {
    if (passwordConfirmationImg.classList.contains('invisible')){
        passwordConfirmationImg.classList.remove('invisible')
	    passwordConfirmationImg.classList.add('visible')
	    passwordConfirmationInput.type = 'text'
	    passwordConfirmationImg.src="images/icons/eye-visible.svg"
    }
    else {
        passwordConfirmationImg.classList.remove('visible')
	    passwordConfirmationImg.classList.add('invisible')
	    passwordConfirmationInput.type = 'password'
	    passwordConfirmationImg.src="images/icons/eye-invisible.svg"
    }
})

passwordImg.addEventListener('click', () => {
    if (passwordImg.classList.contains('invisible')){
        passwordImg.classList.remove('invisible')
	    passwordImg.classList.add('visible')
	    passwordInput.type = 'text'
	    passwordImg.src="images/icons/eye-visible.svg"
    }
    else {
        passwordImg.classList.remove('visible')
	    passwordImg.classList.add('invisible')
	    passwordInput.type = 'password  '
	    passwordImg.src="images/icons/eye-invisible.svg"
    }
})