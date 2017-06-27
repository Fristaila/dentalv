<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */

$backg = 'style="background-color: #F7F7F5;"';
?>

<section class="section-about">
  <section class="section-standarts">
    <h1><?php print t('About clinic'); ?></h1>
    <div class="article-list">
      <?php foreach ($rows as $id => $row): ?>
        <?php if ($id % 2 == 0) {
          $res = TRUE;
        }
        else {
          $res = FALSE;
        } ?>
        <?php if ($res == TRUE) {
          $c_special = 'special';
          $backg = '';
        }
        else {
          $c_special = '';
          $backg = 'style="background-color: #F7F7F5;"';
          $class = 'default-article_video';
        }; ?>
        <div class="default-article <?php print $class; ?>" <?php #print $backg; ?>>
          <?php if (!empty($view->result{$id}->field_field_photo[0]['rendered'])): ?>
            <div class="image-wrap <?php print $c_special; ?>"
                style="background-image: url(<?php print file_create_url($view->result{$id}->field_field_photo[0]['rendered']['#item']['uri']); ?>)"></div>
          <?php else: ?>
            <!--<div class="coub-i">
              <div class="coub-inner">-->
                <?php //if (!empty($view->result{$id}->field_field_coub_vid[0]['rendered']['#markup'])) {
                  //print $view->result{$id}->field_field_coub_vid[0]['rendered']['#markup']; } ?>
              <!--</div>
            </div>-->
          <div class="image-wrap" style="background-image: url(http://dentalv/sites/default/files/cover-drill-bg.jpg)" >
          <img src="http://dentalv/sites/default/files/cover-drill-bg.jpg" alt="">
						<div class="covervid-wrapper">
                <video class="covervid-video" autoplay loop poster="http://dentalv/sites/default/files/cover-drill-bg.jpg">
                    <source src="http://dentalv/sites/default/files/drill.mp4" type="video/mp4">
                </video>
            </div>
          </div>
          <?php endif; ?>
          <div class="text-wrap">
            <div class="text-help">
              <?php if ($id == 0): ?>
                <h3><?php print t($view->display['block']->display_options['title']); ?></h3>
              <?php endif; ?>
              <?php print $view->result{$id}->field_body[0]['rendered']['#markup']; ?>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
  </section>
</section>

