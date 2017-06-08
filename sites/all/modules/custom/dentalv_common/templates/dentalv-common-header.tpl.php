<?php
//ctools_include('modal');
//ctools_modal_add_js();
//_dentalv_modal_style_include_modal();
//
//$wf_id = variable_get('wf_id');
//?>

<div class="webform-appointment-main" style="z-index:1100;">
  <?php
  $wf_id = variable_get('wf_id');
  $webFormNode = node_load($wf_id['id_appointment']);
  $form = drupal_get_form('webform_client_form_' . $wf_id['id_appointment'], $webFormNode, FALSE);
  print drupal_render($form);
  ?>
</div>
<div class="modal fade custom-modal thanx-modal" id="thanxModal" tabindex="-1" role="dialog" aria-labelledby="thanxModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="form-inner">
        <span class="close" data-dismiss="modal" aria-label="Close"></span>
        <h3 class="special"><?php print t('Thank you!'); ?></h3>
        <div class="msg"><?php print t('Your application has been submitted. We will call you soon.'); ?></div>
        <p class="advice">
          <?php print t('Do not forget to brush your teeth and use flossing :)'); ?>
        </p>
      </div>
    </div>
  </div>
</div>
<header id="header" class="header header_inner animate-top">

<?php

$wf_id = variable_get('wf_id');
?>
  <div class="burger show-for-small">
    <a href="#" class="burger__trigger">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </a>
  </div>
  <div class="main-menu">
    <a href="tel:+38 048 725-33-55" class="phone_icon"><span class="icon-phone"></span></a>
    <a href="<?php print url('<front>'); ?>" id="logo" class="menu-logo">
      <?php
      $pos = strpos($logo, '>') + 1;
      $edited_logo = substr($logo, $pos, -4);
      print $edited_logo; ?>
      <div class="logo-text"><?php print $site_name; ?></div>
    </a>
    <a href="/ru" class="active"><img class="logo" typeof="foaf:Image" src="http://dentalv.loc/sites/default/files/v-logo.png" alt="Клиника Войнаровских" title="Клиника Войнаровских" /></a>
    <nav class="header-menu">
      <?php if ($main_menu): ?>
        <?php print render($main_menu); ?>
      <?php endif; ?>
    </nav>

    <a id="header-apointment" class="j-btn j-btn_bordered-green main-nav__btn hide-for-small doctorWhoBtn" href="javascript:void(0)">
      <span class="help"><?php print t('Make an appointment') ?></span></a>

    <a href="tel:+380487253355" class="link link_green link_bordered_green phone show-for-small">+38 048 725-33-55</a>

    <a href="javascript:void(0)" class="j-btn j-btn_filled-white show-for-small doctorWhoBtn"><span class="help"><?php print t('Make an appointment') ?></span></a>

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
</header>