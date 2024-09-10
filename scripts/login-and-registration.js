const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Open register form
registerLink.onclick = () => {
  wrapper.classList.add('active');
};

// Show login form
loginLink.onclick = () => {
  wrapper.classList.remove('active');
};

// Open popup
btnPopup.onclick = () => {
  wrapper.classList.add('active-popup');
};

// Close popup
iconClose.onclick = () => {
  wrapper.classList.remove('active-popup');
  wrapper.classList.remove('active');
};
