<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
// dpm($row);
?>
<main>
  <div class="section-price">

    <div class="container">
      <h1><?php print t('Our price'); ?></h1>
      <h2 class="subheading"><?php print t('We provide you with an incomplete list of prices for our services');?></h2>
    </div>

    <div class="container">
      <div class="form-search">
        <div class="form-group form-group_search">
          <div class="form-controls"><input id="search" name="search" placeholder="<?php print t('Search by price-list'); ?>" type="text"></div>
          <span class="icon-search"></span>
        </div>
      </div>
    </div>

    <article class="article-price">
        <ul class="service-list">
          <?php foreach ($rows as $id => $row): ?>
            <li class="service-item">
              <div class="item-inner">
                <span class="item-name"><?php print $view->result{$id}->node_title; ?></span>
                <span class="item-price"><?php print drupal_render($view->result{$id}->field_field_price[0]['rendered']); ?></span>
              </div>
            </li>
          <?php endforeach; ?>
        </ul>
    </article>

  </div>
</main>