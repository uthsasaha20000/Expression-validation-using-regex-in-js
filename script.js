
// Get the necessary elements
var emailButton = document.getElementById('email');
var phoneButton = document.getElementById('phone');
var postCodeButton = document.getElementById('post-code');
var myForm = document.getElementById('myForm');

// Add event listeners to buttons
emailButton.addEventListener('click', function() {
  showForm('Email');
});

phoneButton.addEventListener('click', function() {
  showForm('Phone');
});

postCodeButton.addEventListener('click', function() {
  showForm('Post Code');
});

function showForm(type) {
  // Set the form placeholder and display the form
  var inputPlaceholder = 'Enter ' + type;
  var inputField = document.getElementById('input');
  var submitButton = document.getElementById('submit');

  inputField.placeholder = inputPlaceholder;
  myForm.style.display = 'block';

  // Prevent the default form submission
  myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var userInput = inputField.value;

    // Here you can add your regex validation logic for the user input

    console.log('User input:', userInput);
  });
}
    