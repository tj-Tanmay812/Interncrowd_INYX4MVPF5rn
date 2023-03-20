// Switch between login and signup tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  // Login form submission
  function login(event) {
    event.preventDefault();
    var emailInput = document.getElementById("login-email");
    var passwordInput = document.getElementById("login-password");
    var messageBox = document.getElementById("login-message");
    var email = emailInput.value;
    var password = passwordInput.value;
    if (!email) {
      messageBox.innerText = "Please enter your email address.";
      return;
    }
    if (!password) {
      messageBox.innerText = "Please enter your password.";
      return;
    }
    // Send AJAX request to server to authenticate user
    // If authentication succeeds, redirect user to dashboard
    // If authentication fails, display error message
  }
  
  // Signup form submission
  function signup(event) {
    event.preventDefault();
    var emailInput = document.getElementById("signup-email");
    var passwordInput = document.getElementById("signup-password");
    var confirmPasswordInput = document.getElementById("signup-confirm-password");
    var messageBox = document.getElementById("signup-message");
    var email = emailInput.value;
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    if (!email) {
      messageBox.innerText = "Please enter your email address.";
      return;
    }
    if (!password) {
      messageBox.innerText = "Please enter a password.";
      return;
    }
    if (password.length < 8) {
      messageBox.innerText = "Password must be at least 8 characters long.";
      return;
    }
    if (!/\d/.test(password)) {
      messageBox.innerText = "Password must contain at least one number.";
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      messageBox.innerText = "Password must contain at least one special character (!@#$%^&*).";
      return;
    }
    if (password !== confirmPassword) {
      messageBox.innerText = "Passwords do not match.";
      return;
    }
    // Send AJAX request to server to create new user
    // If user creation succeeds, redirect user to dashboard
    // If user creation fails, display error message
  }
  
  // Clear message box when user starts typing
  function clearMessage(event) {
    var messageBox = event.target.nextElementSibling;
    messageBox.innerText = "";
  }
  
  // Initialize event listeners
  document.getElementById("login-form").addEventListener("submit", login);
  document.getElementById("signup-form").addEventListener("submit", signup);
  document.querySelectorAll(".input-field input").forEach(function(input) {
    input.addEventListener("input", clearMessage);
  });
  