export { prove };

// defalt settings
let   flag     = false;
const url      = window.location.href;
const consist  = url.indexOf('ru');
const errorMsg = consist > -1 ? require('./validation-msgs-ru').msg : require('./validation-msgs-en').msg;

function prove() {
  const self             = this;
  const parent           = this.parentElement;
  const grandParent      = parent.parentElement;
  const grandGrandParent = grandParent.parentElement;
  const children         = grandParent.children;
  const grandChildren    = grandGrandParent.children;
  let   $form            = $(self).parents('form');

  if (!$form.length) {
    $form = $(self).parents('.v-feedback');
  }
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
