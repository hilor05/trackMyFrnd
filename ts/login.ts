const $ = require('jquery');
$(document).ready(() => {
    const loginForm = $('#loginForm');
    const registerForm = $('#registerForm');
    const loginButton = $('#loginButton');
    const registerButton = $('#registerButton');
  
    loginButton.addEventListener('click', () => {
      loginForm.classList.add('active');
      registerForm.classList.remove('active');
    });
  
    registerButton.addEventListener('click', () => {
      registerForm.classList.add('active');
      loginForm.classList.remove('active');
    });
  
    const loginFormElement = $('#loginForm') as HTMLFormElement;
    loginFormElement.addEventListener('submit', handleLoginSubmit);
  
    const registerFormElement = $('#registerForm') as HTMLFormElement;
    registerFormElement.addEventListener('submit', handleRegisterSubmit);
  });
  
  function handleLoginSubmit(event: Event) {
    event.preventDefault();
  
    const loginUsernameInput = $('#loginUsername') as HTMLInputElement;
    const loginPasswordInput = $('#loginPassword') as HTMLInputElement;
  
    const username = loginUsernameInput.value;
    const password = loginPasswordInput.value;
  
    // Perform login logic here
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      // Redirect to another page or perform any other action
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
  function handleRegisterSubmit(event: Event) {
    event.preventDefault();
  
    const registerUsernameInput = $('#registerUsername') as HTMLInputElement;
    const registerPasswordInput = $('#registerPassword') as HTMLInputElement;
  
    const username = registerUsernameInput.value;
    const password = registerPasswordInput.value;
  
    // Perform registration logic here
    alert(`Registration successful! Username: ${username}, Password: ${password}`);
  }
  