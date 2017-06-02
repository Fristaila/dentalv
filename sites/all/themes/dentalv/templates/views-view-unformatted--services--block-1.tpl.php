<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="others-wrap">
  <div class="title"><?php print t('More services'); ?></div>
  <ul class="others">
<?php foreach ($rows as $id => $row): ?>
  <li>
    <a href="<?php print url('node/'.$view->result{$id}->nid); ?>">
      <div class="img-wrap">
        <?php print drupal_render($view->result{$id}->field_field_photo[0]['rendered']); ?>
      </div>
      <div class="text-wrap">
        <span href="#" class="link link_bordered_green"><?php print $view->result{$id}->node_title; ?></span>
      </div>
    </a>
  </li>
<?php endforeach; ?>
  </ul>
</div>
