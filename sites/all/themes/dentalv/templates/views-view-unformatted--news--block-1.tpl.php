<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<section class="clinic-articles">
  <div class="container">
    <a href="<?php print url('/news'); ?>" class="h3 link link_bordered_green"><?php print t($view->display['block_1']->display_options['title']); ?></a>
    <div class="articles-slider">

<?php foreach ($rows as $id => $row): ?>

    <div class="article">
      <?php if (isset($view->result{$id}->field_field_photo[0]['rendered'])) :?>
      <a href="<?php print $view->result{$id}->_field_data['nid']['entity_type'] .'/'.$view->result{$id}->nid; ?>" class="article__img">
        <?php if (isset($view->result{$id}->field_field_photo[0]['rendered'])) { print theme('image_style', array(
          'path' => $view->result{$id}->field_field_photo[0]['rendered']['#item']['uri'], 'style_name' => 'cl_article_main'));} ?>
      </a>
    <?php endif; ?>
      <div class="article__group clearfix">
        <div class="article__date">
          <span class="text"><?php print format_date($view->result{$id}->_field_data['nid']['entity']->created,'custom','j F, Y',null,$GLOBALS['language_url']->language); ?></span>
        </div>
        <div class="article__views">
          <span class="icon-eye"></span>
          <span class="text"><?php print $view->result{$id}->node_counter_totalcount . t(' просмотра'); ?></span>
        </div>
      </div>
      <div class="article__preview">
        <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
          $view->result{$id}->nid, array('attributes' => array('class' => array('h5 link link_bordered_green')))); ?>
        <p><?php print render($view->result{$id}->field_field_body_parag[0]['rendered']); ?></p>
      </div>
    </div>
<?php endforeach; ?>
    </div>
    </div>
</section>
