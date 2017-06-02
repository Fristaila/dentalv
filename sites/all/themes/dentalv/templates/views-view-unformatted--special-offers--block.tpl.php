<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<section class="special-offers">
  <div class="container">
    <h3 class="h3"><?php print t('Special offers'); ?></h3>
    <div class="offers-wrap">
      <ul class="offers">
<?php foreach ($rows as $id => $row): ?>
  <li>
    <?php print drupal_render($view->result{$id}->field_field_photo_offer[0]['rendered']); ?>
    <?php  if (isset($view->result{$id}->field_field_link[0]['rendered'])): ?>
    <a href="<?php  print $view->result{$id}->field_field_link[0]['rendered']['#element']['url'];?>">
      <span class="title"><?php print $view->result{$id}->node_title; ?></span>
      <span class="terms"><?php if (isset($view->result{$id}->field_field_description[0]['rendered'])){ print $view->result{$id}->field_field_description[0]['rendered']['#markup'];} ?></span>
    </a>
    <?php else : ?>
      <a>
      <span class="title"><?php print $view->result{$id}->node_title; ?></span>
      <span class="terms"><?php if (isset($view->result{$id}->field_field_description[0]['rendered'])){ print $view->result{$id}->field_field_description[0]['rendered']['#markup'];} ?></span>
      </a>
        <?php endif; ?>
  </li>
<?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>
