
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
 // Set the form placeholder and display the form
function showForm(type) {
 
  var inputPlaceholder = 'Enter ' + type;
  var Type=type;
  var inputField = document.getElementById('input');
  var submitButton = document.getElementById('submit');

  inputField.placeholder = inputPlaceholder;
  myForm.style.display = 'block';

  // Prevent the default form submission
  myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var userInput = inputField.value;
    validate(Type);
    

    
  });

  function validate(a)
  {
    switch (a) {
        case 'Email':
        
          break;
        case 'Phone':
          
          break;
        case 'Post Code':
        
          break;
        
         
      }
  }
}
    