const emailInput =document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordcheckInput = document.getElementById("passwordcheck");

const emailError =document.getElementById("emailError");
const nicknameError = document.getElementById("nicknameError");
const passwordError = document.getElementById("passwordError");
const passwordcheckError = document.getElementById("passwordcheckError");
const pwtoggle = document.getElementById("pwtoggle");
const pwon = document.getElementById("pwOn");
const pwoff = document.getElementById("pwOff")
const pctoggle = document.getElementById("pctoggle");
const pcon = document.getElementById("pcOn");
const pcoff = document.getElementById("pcOff")

const button = document.getElementById("btn");



const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error={
    email : 0,
    nickname : 0,
    password : 0,
    passwordcheck : 0,
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

nicknameInput.addEventListener("focusout",function(){
    const value = nicknameInput.value;
    if(value == ""){
        nicknameError.textContent = "닉네임을 입력해 주세요";
        nicknameError.style.display = "block";
        nicknameInput.classList.add("errorborder");
        error.nickname =0;
    }else{
        nicknameError.style.display = "none"
        nicknameInput.classList.remove("errorborder");
        error.nickname =1;
    }
    updateButtonState()
})

passwordInput.addEventListener("focusout", function(){
     const value = passwordInput.value;
    if(value == ""){
        passwordError.textContent = "비밀번호를 입력해 주세요";
        passwordError.style.display = "block";
        passwordInput.classList.add("errorborder");
        error.password =0;
    }else if(value.length<8){
        passwordError.textContent = "비밀번호를 8자 이상 입력해 주세요";
        passwordError.style.display = "block";
        passwordInput.classList.add("errorborder");
        error.password =0;
    }else{
        passwordError.style.display="none"
        passwordInput.classList.remove("errorborder");
        error.password =1;
    }
    updateButtonState()
})

passwordcheckInput.addEventListener("focusout",function(){
    const value = passwordcheckInput.value;
    const pw = passwordInput.value;
    if(value.length<8){
        passwordcheckError.textContent = "비밀번호를 8자 이상 입력해 주세요";
        passwordcheckError.style.display = "block";
        passwordcheckInput.classList.add("errorborder");
        error.passwordcheck =0;
    }else if(value != pw){
        passwordcheckError.textContent = "비밀번호가 일치하지 않습니다.";
        passwordcheckError.style.display = "block";
        passwordcheckInput.classList.add("errorborder");
        error.passwordcheck =0;
    }else{
        passwordcheckError.style.display="none"
        passwordcheckInput.classList.remove("errorborder");
        error.passwordcheck =1;
    }
    updateButtonState()
})

let showPw = false;
let showPc = false;

pwtoggle.addEventListener('click', function() {
  showPw = !showPw;
  passwordInput.type = showPw ? 'text' : 'password';

  pwon.style.display = showPw ? 'none' : 'inline';
  pwoff.style.display = showPw ? 'inline' : 'none';
});

pctoggle.addEventListener('click', function() {
  showPc = !showPc;
  passwordcheckInput.type = showPc ? 'text' : 'password';

  pcon.style.display = showPc ? 'none' : 'inline';
  pcoff.style.display = showPc ? 'inline' : 'none';
});

if(error.email * error.nickname * error.password * error. passwordcheck ==0){
    button.classList.remove('disabled');
    btn.disabled = false;
}else{
    button.classList.add('disabled');
    btn.disabled = true;
}
function updateButtonState(){
    const validcheck = error.email * error.password * error.nickname * error.passwordcheck;
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

