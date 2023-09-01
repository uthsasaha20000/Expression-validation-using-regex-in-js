
// Get the necessary elements
var emailButton = document.getElementById('email');
var phoneButton = document.getElementById('phone');
var postCodeButton = document.getElementById('post-code');
var emailForm = document.getElementById('emailForm');
var phoneForm = document.getElementById('phoneForm');
var postForm = document.getElementById('postForm');



emailButton.addEventListener('click', function() {
    let inputField = document.getElementById('emailinput');
  let submitButton = document.getElementById('emailsubmit');
    emailForm.style.display = 'block';
    phoneForm.style.display = 'none';
    postForm.style.display = 'none';
  emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    

    re=/^\w+@[a-zA-Z\d]+\.[a-zA-Z]{3}$/;

    if(re.test(inputField.value)) {
            alert('It is valid email.');
            inputField.value='';
            return;
     }
     else if(inputField.value=="")
     {
        return;
     }

    else{
            alert('Sorry,it is not a valid email');
            inputField.value='';
            return;
        }
   });
});

phoneButton.addEventListener('click', function() {
    let inputField = document.getElementById('phoneinput');
    let submitButton = document.getElementById('phonesubmit');
    emailForm.style.display = 'none';
    phoneForm.style.display = 'block';
    postForm.style.display = 'none';

      phoneForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let userInput = inputField.value;
        re=/^\+8801\d{9}|^01\d{9}$/;
    
        if(re.test(inputField.value)) {
                alert('It is valid phone.');
                inputField.value='';
                return;
         }  
         else if(inputField.value=="")
         {
            return;
         }
    
        else{
                alert('Sorry,it is not a valid phone');
                inputField.value='';
                return;
            }
            
    
        
      });
});

postCodeButton.addEventListener('click', function() {
  let inputField = document.getElementById('postinput');
  let submitButton = document.getElementById('postsubmit');
  emailForm.style.display = 'none';
  phoneForm.style.display = 'none';
  postForm.style.display = 'block';
   postForm.addEventListener('submit', function(e) {
    e.preventDefault();
    re=/^\d{4}$/;

    if(re.test(inputField.value)) {
            alert('It is valid post code.');
            inputField.value='';
            return;
     } 
     else if(inputField.value=="")
     {
        return;
     } 

    else{
            alert('Sorry,it is not a valid post code');
            inputField.value='';
            return;
        }
  
  });
});
 




    