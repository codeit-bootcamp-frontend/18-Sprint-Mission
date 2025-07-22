const SUBMIT = document.querySelector(".full-button"); // 전송 버튼
const USER_INPUT = Array.from(document.getElementsByTagName("input")).filter(
  (input) => {
    return input.getAttribute("name") !== "showCheck";
  }
); // 비밀번호 입력 보기 체크 박스 제외

const delay = 500; // 0.5초 후 감지
let timer;
let targetInput;
let inputParent;

//submit 버튼 링크 막기
function submitOff(e) {
  e.preventDefault();
}

//비밀번호 입력 보기
export function passwordShow() {
  document.querySelector("form").addEventListener("click", (e) => {
    if (e.target.getAttribute("name") === "showCheck") {
      let password = e.target.closest(".input-box").querySelector("input"); // 패스워드 인풋

      // 체크 상태에 따라 타입 변환
      password.setAttribute("type", e.target.checked ? "text" : "password");
    }
  });
}

//입력중 이벤트
export function writeCheck() {
  //비밀번호 입력 모드 시 비밀번호확인 인풋도 에러메세지 삭제
  document.querySelector("#password").addEventListener("input", () => {
    document.querySelector("#passwordCheck").classList.remove("err");
    document
      .querySelector("#passwordCheck")
      .closest(".input-group")
      .querySelector(".alert-box")
      .remove();
  });
}

//유효 체크
export function formCheck() {
  for (let i = 0; i < USER_INPUT.length; i++) {
    //포커스를 잃었을때
    USER_INPUT[i].addEventListener("focusout", (e) => {
      targetInput = e.target;
      inputParent = targetInput.closest(".input-group");

      let moveTarget = e.relatedTarget;
      let targetTag = moveTarget.tagName == "INPUT"; //이동한 요소 확인

      //input으로 이동 했을 때만 에러 메세지 출력
      if (targetTag) {
        callBackCheck();
      } else {
        targetInput = "";
        inputParent = "";
      }
    });

    // 입력이 끝났을 때
    USER_INPUT[i].addEventListener("keyup", (e) => {
      targetInput = e.target;
      inputParent = targetInput.closest(".input-group");

      clearTimeout(timer);
      timer = setTimeout(() => {
        targetInput.value !== "" ? callBackCheck() : false;
      }, delay);
    });
  }
}

//입력 오류 체크 콜백
function callBackCheck() {
  errorCheck(targetInput, inputParent, function (errorCallback) {
    targetInput.classList.toggle("err", errorCallback);

    if (!errorCallback) {
      inputParent.querySelector(".alert-box")?.remove();
    }
    allCheck();
  });
}

//입력 오류 체크
function errorCheck(input, wrap, callback) {
  let error = true;
  if (input.value === "") {
    error = spaceCheck(wrap);
  } else {
    switch (input.getAttribute("name")) {
      case "userEmail":
        error = checkEmail(input, wrap);
        break;
      case "nickName":
        error = nickNameCheck(input, wrap);
        break;
      case "password":
        error = checkPassword(input, wrap);
        break;
      case "passwordCheck":
        error = reconfirm(input, wrap);
        break;
    }
  }

  callback(error);
}

//이메일 체크
function checkEmail(input, wrap) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(input.value)) {
    createAlert(wrap, "유효하지 않은 이메일입니다.");
    return true;
  }
  return false;
}

//닉네임 체크
function nickNameCheck(input, wrap) {
  if (input.value.length < 2) {
    createAlert(wrap, "닉네임을 2자 이상 입력해주세요.");
    return true;
  }
  return false;
}

// 비밀 번호 입력 체크
function checkPassword(input, wrap) {
  const kor = /[가-힣]/;
  if (kor.test(input.value)) {
    createAlert(wrap, "한글을 사용할 수 없습니다.");
    return true;
  } else {
    if (input.value.length < 8) {
      createAlert(wrap, "비밀번호를 8자 이상 입력해주세요.");
      return true;
    }
  }
  return false;
}

// 비밀번호 확인 체크
function reconfirm(input, wrap) {
  let firstPassword = document.querySelector("#password");
  if (firstPassword.value.length < 8) {
    createAlert(wrap, "비밀번호를 8자 이상 입력해주세요.");
    return true;
  } else {
    if (firstPassword.value !== input.value) {
      createAlert(wrap, "비밀번호가 일치하지 않습니다.");
      return true;
    }
  }
  return false;
}

//전체 유효성 확인
function allCheck() {
  let errorFound = false; // 오류가 발견되면 true로 변경

  for (let i = 0; i < USER_INPUT.length; i++) {
    errorFound = USER_INPUT.some((item) => item.value === "");
    if (errorFound) break; // 오류 발견 시 반복 종료
    errorCheck(
      USER_INPUT[i],
      USER_INPUT[i].closest(".input-group"),
      function (error) {
        //오류 리턴 일때
        if (error) {
          USER_INPUT[i].classList.add("err");
          errorFound = true;
        }
      }
    );
  }

  if (errorFound) {
    SUBMIT.addEventListener("click", submitOff);
    SUBMIT.classList.add("disabled-button");
  } else {
    SUBMIT.removeEventListener("click", submitOff);
    SUBMIT.classList.remove("disabled-button");
  }
}

//공백체크
function spaceCheck(wrap) {
  // 공백일때
  let text = wrap.querySelector(".input-label").innerText;
  let suffix = text === "비밀번호" ? "를 " : "을";

  createAlert(wrap, `${text}${suffix} 입력해 주세요.`);
  return true;
}

//ALERT_BOX 생성
function createAlert(wrap, text) {
  if (!wrap.querySelector(".alert-box")) {
    //alert-box가 없을때만 새로 만듦
    const ALERT_BOX = document.createElement("div");
    ALERT_BOX.classList.add("alert-box");
    ALERT_BOX.innerText = text;
    wrap.appendChild(ALERT_BOX);
  } else {
    wrap.querySelector(".alert-box").innerText = text;
  }
}

// SUBMIT 버튼
SUBMIT.addEventListener("click", submitOff);
SUBMIT.addEventListener("click", () => {
  allCheck();
});
SUBMIT.addEventListener("focusin", () => {
  allCheck();
});
