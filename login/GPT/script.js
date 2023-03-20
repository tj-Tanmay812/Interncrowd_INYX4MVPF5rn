// DOM elements
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const loginToggle = document.querySelector('#login-toggle');
const signupToggle = document.querySelector('#signup-toggle');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const capsLockWarning = document.querySelector('#caps-lock-warning');
const passwordRequirements = document.querySelector('#password-requirements');
const loginWithGoogleButton = document.querySelector('#login-with-google');
const rememberMeCheckbox = document.querySelector('#remember-me');
const forgotPasswordLink = document.querySelector('#forgot-password');

// Input validation functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
}

// Show/hide forms
function showLoginForm() {
  loginForm.classList.add('show');
  signupForm.classList.remove('show');
}

function showSignupForm() {
  signupForm.classList.add('show');
  loginForm.classList.remove('show');
}

// Input validation and feedback
emailInput.addEventListener('input', function() {
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add('invalid');
    emailInput.nextElementSibling.innerText = 'Please enter a valid email address';
  } else {
    emailInput.classList.remove('invalid');
    emailInput.nextElementSibling.innerText = '';
  }
});

passwordInput.addEventListener('input', function() {
  if (passwordInput.value.length < 8) {
    passwordInput.classList.add('invalid');
    passwordRequirements.innerText = 'Password must be at least 8 characters long';
  } else if (!/\d/.test(passwordInput.value)) {
    passwordInput.classList.add('invalid');
    passwordRequirements.innerText = 'Password must contain at least 1 number';
  } else if (!/[!@#$%^&*]/.test(passwordInput.value)) {
    passwordInput.classList.add('invalid');
    passwordRequirements.innerText = 'Password must contain at least 1 special character';
  } else if (!/[a-z]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value)) {
    passwordInput.classList.add('invalid');
    passwordRequirements.innerText = 'Password must contain at least 1 uppercase and 1 lowercase letter';
  } else {
    passwordInput.classList.remove('invalid');
    passwordRequirements.innerText = '';
  }
});

confirmPasswordInput.addEventListener('input', function() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add('invalid');
    confirmPasswordInput.nextElementSibling.innerText = 'Passwords do not match';
  } else {
    confirmPasswordInput.classList.remove('invalid');
    confirmPasswordInput.nextElementSibling.innerText = '';
  }
});

// Caps lock warning
passwordInput.addEventListener('keydown', function(event) {
  if (event.getModifierState('CapsLock')) {
    capsLockWarning.style.display = 'block';
  } else {
    capsLockWarning.style.display = 'none';
  }
});

// Toggle between forms
loginToggle.addEventListener('click', showLoginForm);
signupToggle.addEventListener('click', showSignupForm);

// Sign up with social media
loginWithGoogleButton.addEventListener('click', function() {
 
