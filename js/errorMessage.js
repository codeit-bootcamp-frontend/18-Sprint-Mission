//에러 메시지

//에러 메시지 보여주기
export function showError(inputEle, errorEle, message) {
  inputEle.classList.add("error-border");
  errorEle.textContent = message;
  errorEle.style.display = "block";
}

//에러 메세지 숨기기
export function hideError(inputEle, errorEle) {
  inputEle.classList.remove("error-border");
  errorEle.style.display = "none";
}
