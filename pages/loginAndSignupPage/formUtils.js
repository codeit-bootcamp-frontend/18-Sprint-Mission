export const isValidValue = {
  login: {
    loginEmail: false,
    loginPassword: false,
  },
  signup: {
    signupEmail: false,
    signupNickname: false,
    signupPassword: false,
    signupCheckPassword: false,
  },
};

export const clearErrorTag = (element) => {
  const errorTag = element.nextElementSibling;
  if (errorTag && errorTag.classList.contains("error-message")) {
    element.classList.remove("error-status");
    errorTag.remove();
  }
};

export const createErrorTag = (element, message) => {
  const tag = document.createElement("p");
  tag.classList.add(`error-message`);
  tag.textContent = message;
  element.classList.add("error-status");
  return element.after(tag);
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
