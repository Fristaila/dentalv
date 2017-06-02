<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php //if (!empty($title)): ?>
<!--  <h3>--><?php //print $title; ?><!--</h3>-->
<?php //endif; ?>
<div class="tab-content">
  <ul>
<?php foreach ($rows as $id => $row): ?>
<li>
  <div class="article">
    <a href="/build/html/news-inner.html" class="article__img">
      <?php print drupal_render($view->result{$id}->field_field_photo[0]['rendered']); ?>
    </a>
    <div class="article__group clearfix">
      <div class="article__date">
        <span class="text"><?php print format_date($view->result{$id}->_field_data['nid']['entity']->created,'custom','j F, Y',null,$GLOBALS['language_url']->language); ?></span>
      </div>
      <div class="article__views">
        <span class="icon-eye"></span>
        <span class="text"><?php print $view->result{$id}->node_counter_totalcount. ' ' . t('reviews'); ?></span>
      </div>
    </div>
    <div class="article__preview">
      <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
        $view->result{$id}->nid, array('attributes' => array('class' => array('h5 link link_bordered_green')))); ?>
      <p><?php print $view->result{$id}->field_field_body_parag[0]['rendered']['#markup']; ?></p>
    </div>
  </div>
</li>
<?php endforeach; ?>
  </ul>
</div>

