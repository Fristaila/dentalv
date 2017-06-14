// text fields
// required not empty
// min length 3 chars

// email
// sholud be imail 

// phone 
// only numbers

// msg
// not empty
// mo then 3 chars

import 'jquery';

$(() => {
  console.log(document.getElementById('edit-submitted-name-feedback').validity); 

  const myinp = document.getElementById('edit-submitted-name-feedback');


  function validateMinLength(){
    
  }
  function validate() {
  const input = document.getElementById('edit-submitted-name-feedback');
      console.log(this, "this here");
      //logically decide and set custom validation message
      if (input.value.length < 3) {
          // set custom validation message
          input.setCustomValidity(`Your Age${input.value}) is in a transition phase`);
      } else {
          // reset the validation message - makes it valid for checkValidity function
          input.setCustomValidity('');
      }
      // document.getElementById('validateMsg').innerHTML = 'Validation Message: "' + input.validationMessage + '"';
      // document.getElementById('validity').innerHTML = 'checkValidity function output: "' + input.checkValidity() + '"';
      console.log(`Validation Message:${input.validationMessage}`); 
      console.log(`checkValidity function output:${input.checkValidity()}`); 
  }
  myinp.addEventListener('input', validate, false);
});
