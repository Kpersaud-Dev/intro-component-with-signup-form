const form = document.querySelector('.form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');

// Error Messages
const firstNameError = document.querySelector('.first-name-error'),
      lastNameError = document.querySelector('.last-name-error'),
      emailError = document.querySelector('.email-error'),
      passwordError = document.querySelector('.password-error');


//Validate Names

const validateFirstName = name => {
  if(name.value === '') {
    // Show error message
    firstNameError.classList.add('show');

    //Make Input border red
    firstName.classList.add('error');
  } else {
    firstName.classList.add('success');
    firstName.classList.remove('error');
  }
}

const validateLastName = name => {
  if(name.value === '') {
    // Show error message
    lastNameError.classList.add('show');

    //Make Input border red
    lastName.classList.add('error');
  } else {
    lastName.classList.add('success');
    lastName.classList.remove('error');
  }
}

// Validate Email

const validateEmail = email => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email.value.match(regex)) {
    email.classList.add('success');
    email.classList.remove('error');
    
    // Remove existing error message
    emailError.style.display = 'none';

  } else {
    // Show error message
    emailError.classList.add('show');

    // Make input border red
    email.classList.add('error');
  }
}

// Validate Password

const validatePassword = pass => {
  if(pass.value === '') {
    // Show error message
    passwordError.classList.add('show');

    // Make input border red
    password.classList.add('error');
  } else {
    password.classList.add('success');
    password.classList.remove('error');
    passwordError.style.display = 'none';
  }
}


// Event Listeners

form.addEventListener('submit', e => {
  e.preventDefault();

  validateFirstName(firstName);
  validateLastName(lastName);
  validateEmail(email);
  validatePassword(password);
})

