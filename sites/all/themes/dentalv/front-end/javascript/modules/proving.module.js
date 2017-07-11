import 'jquery';
import width from '../utils/width-informer.service';
import { prove } from '../utils/proving/prove.service';
import { setAttr } from '../utils/proving/set-attr.service';
import { afterSubmit } from '../utils/proving/after-submit.service';
import { tweenValue } from '../utils/proving/tween-value.service';

$(() => {
  // cache the DOM
  const textareas       = document.getElementsByTagName('textarea');
  const inputs          = document.getElementsByTagName('input');
  const $formCallection = $('.form-btn-wrap').parents('form').not('#webform-client-form-61');

  // default settings
  $formCallection.find('button').attr('disabled', 'disabled');
  $('.v-feedback').find('button').attr('disabled', 'disabled');

  // add minlength attr to name fields and pattern to phone field
  for (const field of inputs) {
    setAttr(field, 'name', 'name', 'minlength', '3');
    field.addEventListener('input', prove, false);

    if (field.attributes.getNamedItem('placeholder')) {
      setAttr(field, 'name', 'phone', 'pattern', '^[0-9, +]*$');      
    }
  }

  // bind events
  // bind to the ares
  for (const area of textareas) {
      setAttr(area, 'class', 'textarea', 'minlength', '5');
      area.addEventListener('input', prove, false);
  }
  for (const form of $formCallection) {
    // form.addEventListener('submit', afterSubmit, false);
  }
  $('#webform-client-form-61').on('submit', function () {
    if (width() <= 992) {
      // afterSubmit();
    }
  });

  // prepare fields to duplicating
  const fieldsNeedDuplicate = [
    "[name='submitted[name_feedback]']",
    "[name='submitted[phone_or_email_feedback]']",
    "[name='submitted[message_feedback]']"
  ];

  // duplicat values from mobile feedback to desktope feedback and vise versa
  fieldsNeedDuplicate.forEach(instance => tweenValue(instance));

  // trigger submit desktope form via mobile form button
  $('.myTrigger').on('click', handler);
  function handler() {
    $('#webform-client-form-61').submit();
  }
});
