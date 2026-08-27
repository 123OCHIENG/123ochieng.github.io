const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

/* ---------------------------
   SWITCH ANIMATION
----------------------------*/
function showLogin() {
  signupForm.style.opacity = "0";
  signupForm.style.transform = "translateX(30px)";

  setTimeout(() => {
    signupForm.classList.add("hidden");

    loginForm.classList.remove("hidden");
    setTimeout(() => {
      loginForm.style.opacity = "1";
      loginForm.style.transform = "translateX(0)";
    }, 50);
  }, 200);

  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
}

function showSignup() {
  loginForm.style.opacity = "0";
  loginForm.style.transform = "translateX(-30px)";

  setTimeout(() => {
    loginForm.classList.add("hidden");

    signupForm.classList.remove("hidden");
    setTimeout(() => {
      signupForm.style.opacity = "1";
      signupForm.style.transform = "translateX(0)";
    }, 50);
  }, 200);

  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
}

loginBtn.addEventListener("click", showLogin);
signupBtn.addEventListener("click", showSignup);

/* ---------------------------
   VALIDATION HELPERS
----------------------------*/
function showError(input, message) {
  const error = document.createElement("small");
  error.className = "error-msg";
  error.style.color = "red";
  error.textContent = message;

  if (input.parentNode.querySelector(".error-msg")) return;

  input.parentNode.appendChild(error);
  input.style.border = "2px solid red";
}

function clearErrors(form) {
  form.querySelectorAll(".error-msg").forEach(e => e.remove());
  form.querySelectorAll("input").forEach(i => i.style.border = "none");
}

/* ---------------------------
   EMAIL VALIDATION
----------------------------*/
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ---------------------------
   LOGIN FORM
----------------------------*/
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors(loginForm);

  const email = loginForm.querySelector("input[type='email']");
  const password = loginForm.querySelector("input[type='password']");
  const remember = loginForm.querySelector("input[type='checkbox']");

  let valid = true;

  if (!isValidEmail(email.value)) {
    showError(email, "Enter a valid email");
    valid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  }

  if (!valid) return;

  // REMEMBER ME
  if (remember.checked) {
    localStorage.setItem("rememberEmail", email.value);
  } else {
    localStorage.removeItem("rememberEmail");
  }

  alert("Login successful ✔");
});

/* ---------------------------
   SIGNUP FORM
----------------------------*/
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors(signupForm);

  const name = signupForm.querySelector("input[type='text']");
  const email = signupForm.querySelector("input[type='email']");
  const password = signupForm.querySelector("input[type='password']");

  let valid = true;

  if (name.value.trim().length < 3) {
    showError(name, "Name must be at least 3 characters");
    valid = false;
  }

  if (!isValidEmail(email.value)) {
    showError(email, "Enter a valid email");
    valid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  }

  if (!valid) return;

  alert("Account created successfully ✔");
});

/* ---------------------------
   REMEMBER ME LOAD
----------------------------*/
window.addEventListener("load", () => {
  const savedEmail = localStorage.getItem("rememberEmail");
  if (savedEmail) {
    const emailInput = loginForm.querySelector("input[type='email']");
    const remember = loginForm.querySelector("input[type='checkbox']");

    emailInput.value = savedEmail;
    remember.checked = true;
  }
});