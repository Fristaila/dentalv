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
                <div class="thanx-block" style="display: none"><div class="thanx-help"><h3 class="thanx-heading"><?php print $thank;?></h3><p class="msg"><?php print $thank_t;?></p></div></div>
        <div class="form-wrap">
          <div class="form-inner-custom">
            <div id="feedback-form">
              <h3><?php print t('Feedback') ?></h3>
              <?php print drupal_render($form); ?>
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
      <form action="">
        <div class="form-inner">
          <span class="close" data-dismiss="modal" aria-label="Close"></span>
          <h3><?php print t('Feedback') ?></h3>
          <div class="input-goup">
            <!--input-covering with class success or error give us needed border effect -->
            <div class="input-covering">
              <label for="name" class="controls-label"><?php print $form['submitted']['name_feedback']['#title']; ?></label>
              <?php print drupal_render($form['submitted']['name_feedback']); ?>
              <span class="help-blocks">Описание ошибки</span>
            </div>
            <div class="input-covering">
              <label for="phone" class="controls-label"><?php print $form['submitted']['phone_or_email_feedback']['#title']; ?></label>
              <?php print drupal_render($form['submitted']['phone_or_email_feedback']);?>
              <span class="help-blocks">Описание ошибки</span>
            </div>
            <div class="input-covering">
              <label for="candidateBrief" class="controls-label special"><?php print $form['submitted']['message_feedback']['#title']; ?></label>
             
<!--                <textarea id="candidateBrief" type="text"></textarea>-->
              <?php print drupal_render($form['submitted']['message_feedback']);?>
             
              <span class="help-blocks">Описание ошибки</span>
            </div>
          </div>
            <?php print drupal_render($form['actions']['submit']['disabled']);?>
          <div class="form-btn-wrap">
            <!--disabled until fields are success then add class success to btn and remove disabled -->
<!--            <button value="here you will see vacancy name after modal openning" disabled="disabled" class="form-btn" type="submit" name="send">Отправить</button>-->
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<?php print drupal_render_children($form); ?>
