import 'jquery';

$(() => {
  // cache the DOM
  const textareas       = document.getElementsByTagName('textarea');
  const inputs          = document.getElementsByTagName('input');
  const url             = window.location.href;
  const consist         = url.indexOf('ru');
  const forms           = document.getElementsByTagName('form');
  const thanxService    = require('./modals/thanx-modal.module');
  const $formCallection = $('.form-btn-wrap').parents('form').not('#webform-client-form-61');

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

  // default settings
  // $formCallection.find('button').attr('disabled', 'disabled');
  const errorMsg = consist > -1 ? ruMsg : enMsg;
  let   flag     = false;
  

  // add minlength attr to name fields
  for (const field of inputs) {
    setAttr(field, 'name', 'name', 'minlength', '3');
    field.addEventListener('input', validate, false);
    field.addEventListener('blur', validate, false);

    if (field.attributes.getNamedItem('placeholder')) {
      setAttr(field, 'name', 'phone', 'pattern', '^[0-9, +]*$');      
    }
  }

  // define handlers
  function validate() {
      const self             = this;
      const parent           = this.parentElement;
      const grandParent      = parent.parentElement;
      const grandGrandParent = grandParent.parentElement;
      const children         = grandParent.children;
      const grandChildren    = grandGrandParent.children;
      const $form            = $(self).parents('form');

      checkAll($form);

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
        if (child.tagName.toLowerCase() === 'span') {
          child.innerHTML = `${self.validationMessage}`;
        }
      }
      for (const child of grandChildren) {
        if (child.tagName.toLowerCase() === 'span') {
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

  function afterSubmit() {
    $(this).find('input').val('');
    thanxService();
  }

  function setAttr(toWhom, attr, partAttrVal, newAttr, newAttrVal) {
    if (toWhom.attributes.getNamedItem(attr) !== null) {
      const name     = toWhom.attributes.getNamedItem(attr).value;
      const consists = name.indexOf(partAttrVal);

      if (consists > -1) {
        toWhom.setAttribute(newAttr, newAttrVal);
      }
    }
  }

  function checkAll(form) {
    const checklist = form.find('input, textarea');
    const $element  = form.find('.social-entry-propose-wrap');
    const auth      = $element.hasClass('auth-true');
    const isAuth    = $element.length > 0 ? auth : true;

    for (let i = 0; i < checklist.length; i++) {
      if (!checklist[i].checkValidity()) {
        flag = false;
        break;
      } else {
        flag = true;
        if (!isAuth) {
          break;
        }
        form.find('button, .doctor-who-divider').addClass('success'); 
        form.find('button').removeAttr('disabled');
      }
    }
    if (!flag) {
      form.find('button, .doctor-who-divider').removeClass('success'); 
      form.find('button').attr('disabled', 'disabled');
    }
  }

  // bind events
  // bind to the ares
  for (const area of textareas) {
      setAttr(area, 'class', 'textarea', 'minlength', '5');
      area.addEventListener('input', validate, false);
      area.addEventListener('blur', validate, false);
  }

  // for (const form of $formCallection) {
  //   form.addEventListener('submit', afterSubmit, false);
  // }

        $(document).on('input', "[name='submitted[name_feedback]']",  function () {
            $(this).keyup(function () {
              $("[name='submitted[name_feedback]']").val($(this).val());
            });
        });
        $(document).on('input', "[name='submitted[phone_or_email_feedback]']",  function () {
            $(this).keyup(function () {
              $("[name='submitted[phone_or_email_feedback]']").val($(this).val());
            });
        });
        $(document).on('input', "[name='submitted[message_feedback]']",  function () {
            $(this).keyup(function () {
              $("[name='submitted[message_feedback]']").val($(this).val());
            });
        });

        $('.myTrigger').on('click', handler);
        function handler(e) {
          // const $btn = $('#webform-client-form-61').find('button');
          const $btn = $('#webform-client-form-61').find('button');
          $('#webform-client-form-61').submit();
          // $btn.trigger('submit');
          // e.preventDefault();
          console.log('hello');

          // console.log($btn);

        }
});
