const emailBox = document.getElementById('email_box');
const pwBox = document.getElementById('pw_box');
const pwCheckBox = document.getElementById('pw_check_box');
const nicknameBox = document.getElementById('nickname_box');
const emailInput = document.getElementById('email');
const pwInput = document.getElementById('pw');
const pwCheckInput = document.getElementById('pw_check');
const nicknameInput = document.getElementById('nickname');
const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let showEmailErr = false;
let showPwErr = false;
let showPwCheckErr = false;

/**
 * 에러 메시지 출력을 위한 p 태그와 내용을 추가한다.
 * @param {document.getElementById} box
 * @param {string} msg
 */
const addParagraphTag = (box, msg) => {
  const paragraphTag = document.createElement('p');
  paragraphTag.append(msg);
  paragraphTag.style.color = '#ff0000';
  paragraphTag.style.marginTop = 0;
  box.appendChild(paragraphTag);
};

/**
 * 입력 창에 에러를 표출한다.
 * @param {document.getElementById} inputBox
 */
const setErrBorder = (inputBox) => {
  inputBox.style.border = '1px solid #ff0000';
};

/**
 * 이메일 입력창이 focus out 될 때 에러메시지 출력
 */
emailInput.addEventListener('blur', () => {
  if (!showEmailErr) {
    if (emailInput.value === '' || !emailRegex.test(emailInput.value)) {
      setErrBorder(emailInput);
      addParagraphTag(emailBox, '잘못된 이메일입니다.');
      showEmailErr = true;
    } else {
      showEmailErr = false;
    }
  }
});

/**
 * 비밀번호 입력창이 focus out 될 때 에러메시지 출력
 */
pwInput.addEventListener('blur', () => {
  if (!showPwErr) {
    setErrBorder(pwInput);
    addParagraphTag(pwBox, '비밀번호를 8자 이상 입력해주세요');
    showPwErr = true;
  }
});

pwCheckInput.addEventListener('blur', () => {
  if (!showPwCheckErr) {
    setErrBorder(pwCheckInput);
    addParagraphTag(pwCheckBox, '비밀번호가 일치하지 않습니다.');
    showPwCheckErr = true;
  }
});
