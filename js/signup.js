function inputPassword(inputId, eyeId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "images/eye-on.png";
  } else {
    passwordInput.type === "password";
    eyeIcon.src = "images/eye-off.png";
  }
}

function confirmPassword(inputId, eyeId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "images/eye-on.png";
  } else {
    passwordInput.type === "password";
    eyeIcon.src = "images/eye-off.png";
  }
}

