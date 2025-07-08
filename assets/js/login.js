import { $btn, $inputBoxes, $inputs } from './tags.js';

// 버튼 활성화 & 비활성화
function changeButton() {
  // input_box 중에서 .input_error 클래스가 있는 게 하나라도 있으면 true
  const hasError = Array.from($inputBoxes).some(box => box.classList.contains("input_disabled_btn"));

  if (!hasError) {
    $btn.disabled = false;            // 버튼 활성화
    $btn.classList.remove("disabled"); // 클래스 제거 (필요시)
  } else {
    $btn.disabled = true;             // 버튼 비활성화
    $btn.classList.add("disabled");    // 클래스 추가 (필요시)
  }
}

$inputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    const value = input.value.trim();
    const type = input.type;
    const $inputBox = input.closest(".input_box");
    const $errText = $inputBox.querySelector(".input_error_text");

    // 이메일
    if (type === "email") {
      const pattern = /^\S+@\S+\.\S+$/;
      if (value === "") {
        $inputBox.classList.add("input_error");
        $inputBox.classList.add("input_disabled_btn");
        $errText.style.display = "block";
        $errText.textContent = "이메일을 입력해주세요.";
      } else if (!pattern.test(value)) {
        $inputBox.classList.add("input_error");
        $inputBox.classList.add("input_disabled_btn");
        $errText.style.display = "block";
        $errText.textContent = "잘못된 이메일입니다.";
      } else {
        $inputBox.classList.remove("input_error");
        $inputBox.classList.remove("input_disabled_btn");
        $errText.style.display = "none";
      }
    }

    // 닉네임
    if (input.id === "panda_aka") {
      if (value === "") {
        $inputBox.classList.add("input_error");
        $inputBox.classList.add("input_disabled_btn");
        $errText.style.display = "block";
        $errText.textContent = "닉네임을 입력해주세요.";
      } else {
        $inputBox.classList.remove("input_error");
        $inputBox.classList.remove("input_disabled_btn");
        $errText.style.display = "none";
      }
    }

    // 비밀번호
    if (input.id === "panda_password") {
      if (value === "") {
        $inputBox.classList.add("input_error");
        $inputBox.classList.add("input_disabled_btn");
        $errText.style.display = "block";
        $errText.textContent = "비밀번호를 입력해주세요.";
      } else if (value.length < 8) {
        $inputBox.classList.add("input_error");
        $inputBox.classList.add("input_disabled_btn");
        $errText.style.display = "block";
        $errText.textContent = "비밀번호를 8자 이상 입력해주세요.";
      } else {
        $inputBox.classList.remove("input_error");
        $inputBox.classList.remove("input_disabled_btn");
        $errText.style.display = "none";
      }
    }

    // 비밀번호 확인
    if (input.id === "panda_password_confirm") {
      const $passwordInput = document.querySelector("#panda_password");
      if (value === "") {
        $inputBox.classList.add("input_error");
        $inputBox.classList.add("input_disabled_btn");
        $errText.style.display = "block";
        $errText.textContent = "비밀번호를 입력해주세요.";
      } else if (value.length < 8) {
        $inputBox.classList.add("input_error");
        $inputBox.classList.add("input_disabled_btn");
        $errText.style.display = "block";
        $errText.textContent = "비밀번호를 8자 이상 입력해주세요.";
      } else if (value !== $passwordInput.value.trim()) {
        $inputBox.classList.add("input_error");
        $inputBox.classList.add("input_disabled_btn");
        $errText.style.display = "block";
        $errText.textContent = "비밀번호가 일치하지 않습니다.";
      } else {
        $inputBox.classList.remove("input_error");
        $inputBox.classList.remove("input_disabled_btn");
        $errText.style.display = "none";
      }
    }
    changeButton();
  });
});