const password = document.getElementById("passwordInput");
const showPassBtn = document.getElementById("showPassBtn");
showPassBtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    showPassBtn.classList.remove("fa-eye-slash");
    showPassBtn.classList.add("fa-eye");
  } else {
    password.type = "password";
    showPassBtn.classList.remove("fa-eye");
    showPassBtn.classList.add("fa-eye-slash");
  }
});
