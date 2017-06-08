<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */

$wf_id = variable_get('wf_id');
?>

<section class="section-about">
  <section class="section-vacancy" style="background-color: #fbfbfb">
    <div class="container">
      <div class="heading-help">
        <div class="heading-wrap">
          <h3><?php print t($view->display['default']->display_options['title']); ?></h3>
        </div>
      </div>

      <ul class="vacancy-list">
  <?php foreach ($rows as $id => $row): ?>
    <li class="vacancy-list-item">
      <span class="vacancy-title"><?php print $view->result{$id}->node_title ?></span>
      <p class="vacancy-desc"><?php print $view->result{$id}->field_body[0]['raw']['value']; ?></p>
      <span class="vacancy-link">
        <a class="vacancyResponseBtn link link_bordered_green link_bold" href="javascript:void(0)">
          <span><?php print t('Will respond') ?></span><span class="hide-for-large"><?php print t('to the vacancy'); ?></span></a>
      </span>
    </li>
  <?php endforeach; ?>
  </ul>
  </div>
  </section>
    <div class="webform-vacancy" style="z-index:1100;">
      <?php
      $wf_id = variable_get('wf_id');
      $webFormNode = node_load($wf_id['id_vacancies']);
      $form = drupal_get_form('webform_client_form_' . $wf_id['id_vacancies'], $webFormNode, FALSE);
      print drupal_render($form);
      ?>
    </div>

</section>
