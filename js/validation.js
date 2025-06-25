/**
 * 이메일
 */
const emailBox = document.getElementById('email_box');
const emailInput = document.getElementById('email');

/**
 * 비밀번호
 */
const pwBox = document.getElementById('pw_box');
const pwInput = document.getElementById('pw');

/**
 * 비밀번호 확인
 */
const pwCheckBox = document.getElementById('pw_check_box');
const pwCheckInput = document.getElementById('pw_check');

/**
 * 닉네임
 */
const nicknameBox = document.getElementById('nickname_box');
const nicknameInput = document.getElementById('nickname');

/**
 * 로그인, 회원가입 버튼
 */
const loginBtn = document.getElementById('login_btn');
const joinBtn = document.getElementById('join_btn');

/**
 * 버튼 활성화를 위한 flag
 */
let emailValidate = false;
let pwValidate = false;
let pwCheckValidate = false;
let nicknameValidate = false;

/**
 * 에러 메시지 출력을 위한 p 태그와 내용을 추가한다.
 * @param {document.getElementById} box
 * @param {string} msg
 */
const addErrTag = (box, msg) => {
  if (!box.hasAttribute('name')) {
    const paragraphTag = document.createElement('p');
    box.setAttribute('name', 'err');
    paragraphTag.setAttribute('id', box.id + '_err');
    paragraphTag.append(msg);
    paragraphTag.style.color = '#ff0000';
    paragraphTag.style.marginTop = 0;
    box.appendChild(paragraphTag);
  }
};

/**
 * 에러 메시지를 제거한다.
 */
const removeErrTag = (box) => {
  box.removeAttribute('name');
  if (document.getElementById(box.id + '_err')) {
    document.getElementById(box.id + '_err').remove();
  }
};

/**
 * 입력 창의 테두리 색을 변경한다.
 * @param {document.getElementById} inputBox
 */
const setErrBorder = (inputBox) => {
  inputBox.style.border = '1px solid #ff0000';
};

/**
 * 입력 창의 테두리 색을 제거한다.
 * @param {document.getElementById} inputBox
 */
const removeErrBorder = (inputBox) => {
  inputBox.style.border = 'none';
};

/**
 * 각 input 태그마다 유효성 검사를 진행하고 결과 반환
 * @param {document.getElementById} input
 * @returns {boolean}
 */
const validationCheck = (input) => {
  const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  let result = false;

  switch (input.id) {
    case 'email':
      result = emailRegex.test(input.value);
      emailValidate = result ? true : false;
      break;
    case 'pw':
      result = pwRegex.test(input.value);
      pwCheckValidate = result ? true : false;
      break;
    case 'pw_check':
      result = pwInput.value === input.value;
      pwCheckValidate = result ? true : false;
      break;
    case 'nickname':
      result = input.value !== '';
      nicknameValidate = result ? true : false;
      break;
    default:
      result = false;
      break;
  }
  return result;
};

/**
 * 로그인창, 회원가입창의 모든 input 값의 유효성 검사가 통과되면 버튼을 활성화한다.
 */
const activeBtn = () => {
  let countInput = document.querySelectorAll('#form input');

  switch (countInput.length) {
    case 2:
      if (validationCheck(emailInput) && validationCheck(pwInput)) {
        loginBtn.removeAttribute('type');
        loginBtn.style.backgroundColor = '#3692ff';
        loginBtn.style.cursor = 'pointer';
      } else {
        loginBtn.setAttribute('type', 'button');
        loginBtn.style.backgroundColor = '#9ca3af';
        loginBtn.style.cursor = 'default';
      }
      break;
    case 4:
      if (
        validationCheck(emailInput) &&
        validationCheck(pwInput) &&
        validationCheck(pwCheckInput) &&
        validationCheck(nicknameInput)
      ) {
        joinBtn.removeAttribute('type');
        joinBtn.style.backgroundColor = '#3692ff';
        joinBtn.style.cursor = 'pointer';
      } else {
        joinBtn.setAttribute('type', 'button');
        joinBtn.style.backgroundColor = '#9ca3af';
        joinBtn.style.cursor = 'default';
      }
      break;
  }
};

/**
 * 입력받은 내용에 대한 검사를 진행하고 오류를 표출한다.
 * @param {document.getElementById} inputTag
 * @param {document.getElementById} box
 * @param {string} valdationErrMsg
 * @param {string} emptyErrMsg
 */
const checkInput = (inputTag, box, valdationErrMsg, emptyErrMsg) => {
  if (inputTag.value !== '') {
    if (validationCheck(inputTag)) {
      removeErrBorder(inputTag);
      removeErrTag(box);
    } else {
      removeErrTag(box);
      addErrTag(box, valdationErrMsg);
    }
  } else {
    setErrBorder(inputTag);
    addErrTag(box, emptyErrMsg);
  }
};

/**
 * 이메일 입력창이 focus out 될 때 값을 검사한다.
 */
emailInput.addEventListener('blur', () => {
  checkInput(
    emailInput,
    emailBox,
    '잘못된 이메일 형식입니다.',
    '이메일을 입력해주세요'
  );
});
emailInput.addEventListener('input', activeBtn);

/**
 * 비밀번호 입력창이 focus out 될 때 값을 검사한다.
 */
pwInput.addEventListener('blur', () => {
  checkInput(
    pwInput,
    pwBox,
    '비밀번호를 8자 이상 입력해주세요',
    '비밀번호를 입력해주세요'
  );
});
pwInput.addEventListener('input', activeBtn);

/**
 * 비밀번호 확인 입력창이 focus out 될 때 값을 검사한다.
 */
pwCheckInput.addEventListener('blur', () => {
  checkInput(
    pwCheckInput,
    pwCheckBox,
    '비밀번호가 일치하지 않습니다.',
    '비밀번호를 8자 이상 입력해주세요'
  );
});
pwCheckInput.addEventListener('input', activeBtn);

/**
 * 닉네임 입력창이 focus out 될 때 값을 검사한다.
 */
nicknameInput.addEventListener('blur', () => {
  checkInput(
    nicknameInput,
    nicknameBox,
    '닉네임을 입력해주세요',
    '닉네임을 입력해주세요'
  );
});
nicknameInput.addEventListener('input', activeBtn);
