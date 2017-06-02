<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php //if (!empty($view->human_name)): ?>
<!--  --><?php //
//  $title = t($view->human_name);
//  ?>
  <h3><?php print $title; ?></h3>
<?php //endif; ?>
<?php
$dent_class = array(
  '0' => 'special',
  '1' => 'particular',
  '2' => 'especial',
  '3' => '',
);
?>

<section class="short-about" id="pinContainer">
  <h3 class="h3 hide-for-large hide-from-768"><?php print t('Short about us');?></h3>
  <div class="about-slider" id="slideContainer">
    <h3 class="h3 hide-for-small"><?php print t('Short about us');?></h3>
<?php foreach ($rows as $id => $row): ?>

  <div class="triple-block">
    <div class="triple-wrap">
      <div class="bg-image">
        <div class="above-image  <?php print $dent_class{$id}; ?>">
          <figure><?php print render($view->result{$id}->field_field_photo[0]['rendered']);?></figure>
        </div>
      </div>
      <div class="triple-text">
        <div class="text-help">
          <?php print render($view->result{$id}->field_body[0]['rendered']); ?>
        </div>
      </div>
    </div>
  </div>
<?php endforeach; ?>
</div>
</section>