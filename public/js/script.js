const passwdBtn = document.querySelector("#passwdBtn");

if (passwdBtn) {
  passwdBtn.addEventListener("click", function() {
    const passwdInput = document.getElementById("account_password");
    const type = passwdInput.getAttribute("type");
    if (type == "password") {
      passwdInput.setAttribute("type", "text");
      passwdBtn.innerHTML = "Hide Password";
    } else {
      passwdInput.setAttribute("type", "password");
      passwdBtn.innerHTML = "Show Password";
    }
  });
}