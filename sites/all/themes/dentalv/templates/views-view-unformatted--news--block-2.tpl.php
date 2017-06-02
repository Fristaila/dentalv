<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="others-wrap">
  <h3 class="article-footer-heading hide-from-medium"><?php print t('More articles'); ?></h3>
  <ul class="another-articles-list">
<?php foreach ($rows as $id => $row): ?>
      <li class="which-article active">
        <a href="<?php print url('node/'.$view->result{$id}->nid); ?>" >
          <div class="which-article-inner">
                                    <span class="link link_bordered_green">
                                        <?php print $view->result{$id}->node_title; ?>
                                    </span>
          </div>
        </a>
      </li>
<?php endforeach; ?>
  </ul>
</div>