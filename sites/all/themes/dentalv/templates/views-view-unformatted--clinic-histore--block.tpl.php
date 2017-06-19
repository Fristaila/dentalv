<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
  <?php
  $dent_class = array(
    '0' => 'special',
    '1' => 'particular',
    '2' => 'especial',
    '3' => '',
  );
  $count = 0;
  ?>
<!--<section class="section-about">-->
  <section class="section-history">
      <?php foreach ($rows as $id => $row): ?>
        <?php if ($count == 4) :
          $count = 0;
          endif; ?>
        <div class="triple-block">
          <div class="triple-wrap">
            <div class="bg-image">
              <div class="above-image <?php print $dent_class{$count}; ?>">
                <figure><?php print render($view->result{$count}->field_field_photo[0]['rendered']);?></figure>
              </div>
            </div>
            <div class="triple-text">
              <div class="text-help">
                <?php print render($view->result{$count}->field_body[0]['rendered']); ?>
              </div>
            </div>
          </div>
        </div>
      <?php
      $count++;
      endforeach; ?>
    <div class="container special">
      <div class="heading-help special">
        <div class="heading-wrap">
          <h3><?php print t($view->display['block']->display_options['title']); ?></h3>
        </div>
      </div>
    </div>
  </section>
<!--</section>-->
