function togglePassword(e) {
  const input = e.target.parentElement.querySelector("input");
  const isOpened = input.type === "text";
  input.type = isOpened ? "password" : "text";
  e.target.classList.toggle("visible", !isOpened);
}

const btns = document.querySelectorAll(".btn-show").forEach((btn) => {
  btn.addEventListener("click", (e) => togglePassword(e));
});
