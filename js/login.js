document.getElementById("login-button").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  if (userEmail == "child@gmail.com" && userPassword == "child1") {
    window.location.href = "banking.html";
  }
});
