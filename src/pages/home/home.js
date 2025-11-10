import { applyTheme, loadTheme } from '../../../utils/themeUtils.js';
import { THEMES } from '../../../constants/themeConstants.js';

const themeToggle = document.getElementById('themeToggle');

loadTheme((theme) => {
  themeToggle.textContent = theme === THEMES.DARK ? 'Light Mode' : 'Dark Mode';
});

themeToggle.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('bg-gray-900') ? THEMES.LIGHT : THEMES.DARK;
  applyTheme(newTheme, (updatedTheme) => {
    themeToggle.textContent = updatedTheme === THEMES.DARK ? 'Light Mode' : 'Dark Mode';
  });
});
// Elements
const signInBtn = document.getElementById("signInBtn"); // Navbar button
const mobileSignInBtn = document.getElementById("mobileSignInBtn"); // Mobile menu
const signInModal = document.getElementById("signInModal");
const closeSignIn = document.getElementById("closeSignIn");
const signInSubmit = document.getElementById("signInSubmit");

// Functions to open/close modal
const openModal = modal => modal.classList.remove("hidden");
const closeModal = modal => modal.classList.add("hidden");

// Open modal on button click
signInBtn.addEventListener("click", () => openModal(signInModal));
mobileSignInBtn.addEventListener("click", () => openModal(signInModal));

// Close modal
closeSignIn.addEventListener("click", () => closeModal(signInModal));

// Sign In submit action
signInSubmit.addEventListener("click", () => {
  const username = document.getElementById("signInUsername").value;
  const password = document.getElementById("signInPassword").value;

  if(username === "" || password === "") {
    alert("Please enter both username and password!");
    return;
  }

  // For now, simple alert (later can add backend authentication)
  alert(`Welcome, ${username}! You are signed in.`);
  
  // Close modal after successful sign in
  closeModal(signInModal);
});
