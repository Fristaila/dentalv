<?php
$form['submitted']['what_is_your_name']['#title'] = t($form['submitted']['what_is_your_name']['#title']);
$form['submitted']['phone']['#title'] = t($form['submitted']['phone']['#title']);
$form['submitted']['short_about_you_area']['#title'] = t($form['submitted']['short_about_you_area']['#title']);
$form['actions']['submit']['#value'] = t('Send');

$form['submitted']['phone']['#title_display'] = 'none';
$form['submitted']['what_is_your_name']['#title_display'] = 'none';
$form['submitted']['short_about_you_area']['#title_display'] = 'none';

unset($form['actions']['submit']['#attributes']['class'][3]);
unset($form['actions']['submit']['#attributes']['class'][4]);

array_unshift($form['actions']['submit']['#attributes']['class'], 'form-btn');
?>
<div class="modal fade custom-modal" id="vacancyResponse" tabindex="-1" role="dialog" aria-labelledby="vacancyResponse">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <form action="">
        <div class="form-inner">
          <span class="close" data-dismiss="modal" aria-label="Close"></span>
          <h3 class="special"><?php print t('Vacancy: ');?><span class="current-vacancy"></span></h3>
          <div class="input-goup">
            <!--form-group with class success or error give us needed border effect -->
            <div class="form-group" style="display: none" >
              <?php print drupal_render($form['submitted']['vacancies']); ?>
            </div>
            <div class="form-group">
              <label for="name" class="controls-label"><?php print $form['submitted']['what_is_your_name']['#title']; ?></label>
              <div class="form-controls"><?php print drupal_render($form['submitted']['what_is_your_name']); ?></div>
              <span class="help-blocks">Описание ошибки</span>
            </div>
            <div class="form-group">
              <label for="phone" class="controls-label"><?php print $form['submitted']['phone']['#title']; ?></label>
              <div class="form-controls"><?php print drupal_render($form['submitted']['phone']); ?></div>
              <span class="help-blocks">Описание ошибки</span>
            </div>
            <div class="form-group">
              <label for="candidateBrief" class="controls-label special"><?php print $form['submitted']['short_about_you_area']['#title']; ?></label>
              <div  class="form-controls"><?php print drupal_render($form['submitted']['short_about_you_area']); ?></div>
              <span class="help-blocks">Описание ошибки</span>
            </div>
          </div>
          <div class="form-btn-wrap">
           <?php print drupal_render($form['actions']['submit']);?>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<?php print drupal_render_children($form); ?>
