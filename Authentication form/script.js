let registerForm = document.querySelector(".register");
let loginForm = document.querySelector(".login");

let registerBtn = document.getElementById("registerBtn");
let loginBtn = document.getElementById("loginBtn");

registerBtn.addEventListener("click", function () {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
});
loginBtn.addEventListener("click", function () {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

let submitBtnRegister = document.getElementById("submit1");

let username = document.getElementById("usernameR");
let email = document.getElementById("email");
let password = document.getElementById("password1");
let age = document.getElementById("age");

let usernameLabel = document.getElementById("invalidUsername");
let emailLabel = document.getElementById("invalidEmail");
let passwordLabel = document.getElementById("invalidPassword");
let ageLabel = document.getElementById("invalidAge");

let users = [];
submitBtnRegister.addEventListener("click", function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  usernameLabel.innerText = "";
  emailLabel.innerText = "";
  passwordLabel.innerText = "";
  ageLabel.innerText = "";

  let isValid = true;
  if (username.value.length > 25) {
    usernameLabel.innerText +=
      "*username should not be longer that 25 characters";
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    emailLabel.innerText += "*invalid email address";
    isValid = false;
  } else if (password.value.length < 8) {
    passwordLabel.innerText += "*should be at least 8 characters";
    isValid = false;
  } else if (age.value < 18) {
    ageLabel.innerText += "*your age should be over 18";
    isValid = false;
  } else if (isValid) {
    users.push({
      username: username.value,
      email: email.value,
      pass: password.value,
      age: parseInt(age.value),
    });
    console.log(users);
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  }
});

let usernameLogin = document.getElementById("usernameL");
let passwordLogin = document.getElementById("password2");
let submitBtnLogin = document
  .getElementById("submit2")
  .addEventListener("click", function () {
    let findUser = users.find(
      (user) =>
        user.username === usernameLogin.value &&
        user.pass === passwordLogin.value
    );
    if (findUser) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password, try register first!");
    }
  });
