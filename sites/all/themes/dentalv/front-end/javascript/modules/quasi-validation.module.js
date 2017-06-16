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
  // cache the DOM

  const textareas  = document.getElementsByTagName('textarea');
  const inputs = document.getElementsByTagName('input');
  const url = window.location.href;
  const consist = url.indexOf('ru');
  const forms = document.getElementsByTagName('form');

  const $formCallection = $('form');

  $formCallection.find('button').attr('disabled', 'disabled');

  for (const form of forms) {
    form.addEventListener('submit', function () {
      $(this).find('input').val('');
    }, false);
  }

  const ruMsg = {
    numberMsg  : 'Только цифры и знак «+» разрешены.',
    emptyMsg   : 'Не может быть пустым.',
    emailMsg   : 'Придерживайтесь фомата email.',
    shortMsg   : 'Не меньше',
    shortHelper: 'символов.'
    
  };

  const enMsg = {
    numberMsg  : 'Only numbers and + sign are alowed.',
    emptyMsg   : 'Please fill out this field.',
    emailMsg   : 'Please, keep e-mail format.',
    shortMsg   : 'Should be at least',
    shortHelper: 'characters.'
  };

  const errorMsg = consist > -1 ? ruMsg : enMsg;


  // add minlength attr to name fields
  for (const field of inputs) {
    setAttr(field, 'name', 'name', 'minlength', '3');
    field.addEventListener('input', validate, false);

    if (field.attributes.getNamedItem('placeholder')) {
      // console.log(field);
      setAttr(field, 'name', 'phone', 'pattern', '^[0-9, +]*$');      
    }
  }


  // bind events
  // bind to the ares
  for (const area of textareas) {
    area.addEventListener('input', validate, false);
    setAttr(area, 'class', 'textarea', 'minlength', '5');
  }

  function setAttr(toWhom, attr, partAttrVal, newAttr, newAttrVal) {
    const name     = toWhom.attributes.getNamedItem(attr).value;
    const consists = name.indexOf(partAttrVal);

    if (consists > -1) {
      toWhom.setAttribute(newAttr, newAttrVal);
    }
  }
  let flag = false;

  function checkAll(form) {
    const checklist = form.find('input, textarea');

    console.log(flag, 'start');
    console.log(checklist);
    for (let i = 0; i < checklist.length; i++) {
      console.log('check', checklist[i].checkValidity());
      if (!checklist[i].checkValidity()) {
        flag = false;
        console.log(flag, 'break');    
        break;
      } else {
        flag = true;
        console.log(flag, 'true');   
        form.find('button, .doctor-who-divider').addClass('success'); 
        form.find('button').removeAttr('disabled');
      }
    }
    console.log(flag, 'finish');
    if (!flag) {
      form.find('button, .doctor-who-divider').removeClass('success'); 
      form.find('button').attr('disabled', 'disabled');
    }
  }

  function validate() {
      const self             = this;
      const parent           = this.parentElement;
      const grandParent      = parent.parentElement;
      const grandGrandParent = grandParent.parentElement;
      const children         = grandParent.children;
      const grandChildren    = grandGrandParent.children;
      const $form            = $(self).parents('form');


      checkAll($form);

      if (self.validity.valid) {
        $form.addClass('valid');
        $form.removeClass('not');
        // $form.find('button, .doctor-who-divider').addClass('success');
      } else {
        $form.addClass('not');
        $form.removeClass('valid');
        // $form.find('button, .doctor-who-divider').removeClass('success');        
      }
      console.log(self.validity.valid);
      if (self.validity.tooShort) {
        const minlenth = self.attributes.getNamedItem('minlength').value;

        self.setCustomValidity(`${errorMsg.shortMsg} ${minlenth} ${errorMsg.shortHelper}`);
      } else if (self.validity.valueMissing) {
        self.setCustomValidity(errorMsg.emptyMsg);  
      } else if (self.validity.patternMismatch) {
        self.setCustomValidity(errorMsg.numberMsg);  
      } else if (self.validity.typeMismatch) {
        self.setCustomValidity(errorMsg.emailMsg);  
      } else {
        self.setCustomValidity('');
      }
      for (const child of children) {
          // console.log(child.tagName);
        if (child.tagName.toLowerCase() === 'span') {
          // console.log(child);
          child.innerHTML = `${self.validationMessage}`;
        }
      }
      for (const child of grandChildren) {
          // console.log(child.tagName);
        if (child.tagName.toLowerCase() === 'span') {
          // console.log(child);
          child.innerHTML = `${self.validationMessage}`;
        }
      }

      
      if (self.checkValidity()) {
        grandParent.classList.add('input-covering_cu-success');
        grandParent.classList.remove('input-covering_cu-error');
      } else {
        grandParent.classList.add('input-covering_cu-error');
        grandParent.classList.remove('input-covering_cu-success');
      }
  }
});
