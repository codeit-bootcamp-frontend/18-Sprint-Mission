const emailInput =document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordcheckInput = document.getElementById("passwordcheck");

const emailError =document.getElementById("emailError");
const nicknameError = document.getElementById("nicknameError");
const passwordError = document.getElementById("passwordError");
const passwordcheckError = document.getElementById("passwordcheckError");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("focusout",function() {
    const value = emailInput.value.trim();
    if (value==""){
        emailError.textContent = "이메일을 입력해 주세요";
        emailError.style.display = "block";
    }else if(!emailPattern.test(value)){
        emailError.textContent = "잘못된 이메일 형식입니다.";
        emailError.style.display = "block";
    }else{
        emailError.style.display="none"
    }
})
