const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const button = document.getElementById("btn");
const pwtoggle = document.getElementById("pwtoggle");
const pwon = document.getElementById("pwOn");
const pwoff = document.getElementById("pwOff")



const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error={
    email : 0,
    password : 0,
};

emailInput.addEventListener("focusout",function() {
    const value = emailInput.value.trim();
    if (value==""){
        emailError.textContent = "이메일을 입력해 주세요";
        emailError.style.display = "block";
        emailInput.classList.add("errorborder");
        error.email =0;
    }else if(!emailPattern.test(value)){
        emailError.textContent = "잘못된 이메일 형식입니다.";
        emailError.style.display = "block";
        emailInput.classList.add("errorborder");
        error.email =0;
    }else{
        emailError.style.display="none"
        emailInput.classList.remove("errorborder");
        error.email =1;
    }
    updateButtonState()
})

passwordInput.addEventListener("focusout", function(){
     const value = passwordInput.value;
    if(value == ""){
        passwordError.textContent = "비밀번호를 입력해 주세요";
        passwordError.style.display = "block";
        passwordInput.classList.add("errorborder");
        error.password=0;
    }else if(value.length<8){
        passwordError.textContent = "비밀번호를 8자 이상 입력해 주세요";
        passwordError.style.display = "block";
        passwordInput.classList.add("errorborder");
        error.password=0;
    }else{
        passwordError.style.display="none"
        error.password = 1;
        passwordInput.classList.remove("errorborder");
        error.password=1;
    }
    updateButtonState()
});

let showPw = false;

pwtoggle.addEventListener('click', function() {
  showPw = !showPw;
  passwordInput.type = showPw ? 'text' : 'password';

  pwon.style.display = showPw ? 'none' : 'inline';
  pwoff.style.display = showPw ? 'inline' : 'none';
});

function updateButtonState(){
    const validcheck = error.email * error.password;
    if(validcheck ==1){
        button.disabled = false;
        button.classList.remove("disabled");
        button.classList.add("enabled");
    }else {
        button.disabled = true;
        button.classList.add("disabled");
        button.classList.remove("enabled");
    }
}

