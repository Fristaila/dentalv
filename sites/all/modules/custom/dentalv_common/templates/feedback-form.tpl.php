<?php
$form['submitted']['name_feedback']['#title'] = t($form['submitted']['name_feedback']['#title']);
$form['submitted']['message_feedback']['#title'] = t($form['submitted']['message_feedback']['#title']);
$form['submitted']['phone_or_email_feedback']['#title'] = t($form['submitted']['phone_or_email_feedback']['#title']);
$form['actions']['submit']['#value'] = t('Send');
$thank = t('Thank you!');
$thank_t = t('Your message is sent. We will reply shortly.');
$form['actions']['submit']['#attributes']['class'][] =  'disabled';
?>

<div class="section-contacts">
  <div class="container">
    <h1><?php print t('Contacts') ?></h1>
    <div id="feedback" class="page-content_wrap">
      <div class="contacts-directions-wrap">
        <?php print drupal_render($block_rend); ?>
        <div class="form-btn-block hide-for-large">
          <a href="#" class="j-btn j-btn_bordered-green feedBackBtn"><span class="help"><?php print t('Feedback') ?></span></a>
        </div>
        <?php
        print  drupal_render($block_t); ?>
      </div>

        <div class="form-wrap">
          <div class="form-inner-custom">
            <div id="feedback-form">
              <h3><?php print t('Feedback') ?></h3>
              <?php print drupal_render($form); ?>
                <div class="thanx-block" style="display: none"><div class="thanx-help"><h3 class="thanx-heading"><?php print $thank;?></h3><p class="msg"><?php print $thank_t;?></p></div></div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
<?php
$form['submitted']['message_feedback']['#title_display'] = 'none';
$form['submitted']['name_feedback']['#title_display'] = 'none';
$form['submitted']['phone_or_email_feedback']['#title_display'] = 'none';
?>
<div class="modal fade custom-modal" id="feedBack" tabindex="-1" role="dialog" aria-labelledby="feedBack" style="z-index: 1001">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
     <div class="v-feedback">
        <div class="form-inner">
          <span class="close" data-dismiss="modal" aria-label="Close"></span>
          <h3><?php print t('Feedback') ?></h3>
          <div class="input-goup">
            <!--input-covering with class success or error give us needed border effect -->
            <div class="input-covering">
                <label for="edit-submitted-name-feedback controls-label" class="controls-label"><?php print t('Full name'); ?></label>
              <div class="form-item webform-component webform-component-textfield webform-component--name-feedback">
              <input required="required" type="text" id="edit-submitted-name-feedback" name="submitted[name_feedback]" value="" size="60" maxlength="128" class="form-text required" minlength="3">
              </div>
              <span class="help-blocks"></span>
            </div>
            <div class="input-covering">
              <label for="edit-submitted-phone-or-email-feedback controls-label" class="controls-label"><?php print t('Phone or email'); ?></label>
              <div class="form-item webform-component webform-component-textfield webform-component--phone-or-email-feedback">
            <input type="text" id="edit-submitted-phone-or-email-feedback" name="submitted[phone_or_email_feedback]" value="" size="60" maxlength="128" class="form-text">
            </div>
              <span class="help-blocks"></span>
            </div>         
            <div class="input-covering">
              <label for="edit-submitted-message-feedback"  class="controls-label special"><?php print t('Message'); ?></label>
            <div class="form-item webform-component webform-component-textarea webform-component--message-feedback">
            <div class="form-textarea-wrapper resizable textarea-processed resizable-textarea"><textarea required="required" id="edit-submitted-message-feedback" name="submitted[message_feedback]" cols="60" rows="5" class="form-textarea required" minlength="5"></textarea><div class="grippie"></div></div>
            </div>
            <span class="help-blocks"></span>
            </div>
        </div>
            <div class="form-btn-wrap">
              <button class="form-btn myTrigger" name="op" value="Отправить"><?php print t('Send'); ?></button>
            </div>
   </div>
    </div>
  </div>
</div>
