<?php

$wf_id = variable_get('wf_id');
?>

<section id="scrollParallax" class="first-screen animate-opacity">
  <div class="header header_main">
    <div class="burger show-for-small">
      <a href="#" class="burger__trigger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </a>
    </div>

    <div class="main-menu one-menu">
      <nav class="header-menu">
        <?php if ($main_menu): ?>
          <?php print render($main_menu); ?>
        <?php endif; ?>
      </nav>
      <a href="tel:+380487253355" class="phone-btn j-btn j-btn_bordered-green main-nav__btn hide-for-small"><span class="help"><?php print $site_phone; ?></span></a>
      <a href="tel:+380487253355" class="link link_green link_bordered_green phone show-for-small"><?php $site_phone; ?></a>

      <ul class="social show-for-small">
        <li>
          <a href="#">
            <img src="/sites/all/themes/dentalv/icons/socials/vk.svg" alt="Vk">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/sites/all/themes/dentalv/icons/socials/facebook.svg" alt="Vk">
          </a>
        </li>
      </ul>
      <div class="lang">
        <?php
        $raw_block = block_load('locale', 'language');
        $block = _block_render_blocks(array($raw_block));
        $block = _block_get_renderable_array($block);
        $block['locale_language']['#block']->subject = '';
        $rendered_block = drupal_render($block);
        print $rendered_block;
        ?>
      </div>
    </div>
  </div>
  <div class="logo-group">
    <div class="block-logo">
      <div class="logo-img">
        <img src="/sites/all/themes/dentalv/images/v-logo.png" alt="Logo">
      </div>
      <div class="logo-text">
        <h1 class="h1"><?php print $site_name; ?></h1>
        <span class="logo-help"><?php print $site_slogan; ?></span>
      </div>
    </div>
    <div class="block-btn">
      <a href="javascript:void(0)" class="j-btn j-btn_bordered-green doctorWhoBtn">
        <span class="help"><?php print t('Make an appointment') ?></span>
      </a>
    </div>
  </div>
</section>

