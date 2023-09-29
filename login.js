let root = document.querySelector('#root');
let emailInput = document.querySelector('.email');
let email = emailInput.value;
let passwordInput = document.querySelector('.password');
const minLength = 12;
passwordInput.addEventListener('input', function() {
  let password = passwordInput.value;
  let containsLowerCase = /[a-z]/.test(password);
  let containsUperCase = /[A-Z]/.test(password);
  let containsNumber = /\d/.test(password);
  let containsSymbol = /\W/.test(password);  
  let errorElement = document.getElementById('passwordError');
  const infoBaza = {};
  if (password.length < minLength || 
    !containsLowerCase || 
    !containsUperCase || 
    !containsNumber ||
    !containsSymbol
    ) {
    passwordInput.classList.add('error');
    errorElement.textContent = `Password must contain at least 12 characters, 1 uppercase letter, 
    1 lowercase letter, 1 number and 1 symbol.`
    root.classList.add('rootError');
  } else {
    passwordInput.classList.add('okey');
    errorElement.textContent = '';
    infoBaza.password = password;
    infoBaza.email = email;
    localStorage.setItem('infoBaza', JSON.stringify(infoBaza));
  }
});
window.addEventListener('load', function() {
    const storedInfo = localStorage.getItem('infoBaza');
    if (storedInfo) {
      infoBaza = JSON.parse(storedInfo);
      console.log(infoBaza);
      return infoBaza
    }
});



   
    