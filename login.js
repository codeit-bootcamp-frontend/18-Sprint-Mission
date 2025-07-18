const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const button = document.getElementsByClassName("btn");
const pwtoggle = document.getElementById("pwtoggle");
const pwon = document.getElementById("pwOn");
const pwoff = document.getElementById("pwOff")



const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error={
    email : 1,
    password : 1,
};
emailInput.addEventListener("focusout",function() {
    const value = emailInput.value.trim();
    if (value==""){
        emailError.textContent = "이메일을 입력해 주세요";
        emailError.style.display = "block";
        emailInput.classList.add("errorborder");
    }else if(!emailPattern.test(value)){
        emailError.textContent = "잘못된 이메일 형식입니다.";
        emailError.style.display = "block";
        emailInput.classList.add("errorborder");
    }else{
        emailError.style.display="none"
        emailInput.classList.remove("errorborder");
    }
})

passwordInput.addEventListener("focusout", function(){
     const value = passwordInput.value;
    if(value == ""){
        passwordError.textContent = "비밀번호를 입력해 주세요";
        passwordError.style.display = "block";
        passwordInput.classList.add("errorborder");
    }else if(value.length<8){
        passwordError.textContent = "비밀번호를 8자 이상 입력해 주세요";
        passwordError.style.display = "block";
        passwordInput.classList.add("errorborder");
    }else{
        passwordError.style.display="none"
        error.password = 1;
        passwordInput.classList.remove("errorborder");
    }
});

let showPw = false;

pwtoggle.addEventListener('click', function() {
  showPw = !showPw;
  passwordInput.type = showPw ? 'text' : 'password';

  pwon.style.display = showPw ? 'none' : 'inline';
  pwoff.style.display = showPw ? 'inline' : 'none';
});


if(error.email  * error.password ==1){
    button.classList.remove('disabled');
    btn.disabled = false;
}else{
    button.classList.add('disabled');
    btn.disabled = true;
}

