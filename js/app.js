//Variables 
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form') ;

      //

//Event Listeners
eventListeners();

function eventListeners() {
  //app init
  document.addEventListener('DOMContentLoaded', appInit);


  //Validating the forms
  email.addEventListener('blur', validateField);
  subject.addEventListener('blur', validateField);
  message.addEventListener('blur', validateField);

  //Send email and reset button
  sendEmailForm.addEventListener('submit', sendEmail);

  resetBtn.addEventListener('click', resetForm);

}


//Functions

// App Initialisation
function appInit() {
  
  //Disable the send button on load
  sendBtn.disabled = true;
}

function sendEmail(e) {
  e.preventDefault();

  //Show the spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'block';

  //Show the Image
  const sendEmailImg = document.createElement('img');
  sendEmailImg.src = 'img/mail.gif';
  sendEmailImg.style.display = 'block';

  setTimeout( () => {
    spinner.style.display = 'none';
   
    //Show email GIF
    document.querySelector('#loaders').appendChild(sendEmailImg);
    
    // And after 5 seconds , hide image and reset form
     setTimeout( () => { 
      sendEmailForm.reset();
      sendEmailImg.remove();
    }, 5000 ); 

  }, 3000 );
}

function validateField() {
  let errors;

  //Validate length of the field 
  validateLength(this);

  //Validate email
  if (this.type === 'email') {
    validateEmail(this);
  }

  errors = document.querySelectorAll('.error');

  //Check that are inputs are not empty
  if (email.value !== ''  && subject.value !== '' && message.value !== '' ) {
    if ( errors.length === 0 ) {
      sendBtn.disabled = false;
    }
    
  }

}

//Validate the length of the fields
function validateLength(field){
  
  if (field.value.length > 0) {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }
}

//Checks for @ in the email
function validateEmail(field) {
  let emailText = field.value;

  //Check if the email text contains @
  if (emailText.indexOf('@') != -1 )  {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
   } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error');
  }

}

function resetForm() {
  sendEmailForm.reset();
}

