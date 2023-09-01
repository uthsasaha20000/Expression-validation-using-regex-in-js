
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
    let str;
    switch (Type) {
        case 'Email':
        re=/^\w+@[a-zA-Z\d]+\.[a-zA-Z]{3}$/;
        if(re.test(userInput)) {
            alert('It is valid email.');
        }
        else{
            alert('Sorry,it is not a valid email');
        }
          break;
        case 'Phone':
            re=/^\+8801\d{9}|^01\d{9}$/;
            if(re.test(userInput)) {
                alert('It is valid Bangladeshi phone number.');
            }
            else{
                alert('Sorry,it is not a valid Bangladeshi phone number');
            }
          break;
        case 'Post Code':
            re=/^\d{4}$/;
            if(re.test(userInput)) {
                alert('It is valid post code.');
            }
            else{
                alert('Sorry,it is not a valid post');
            }
          break;
        
         
      }
    

    
  });


}
    