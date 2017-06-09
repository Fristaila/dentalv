<?php
$data_block = variable_get('block_id');
?>
<footer>
  <div class="container">
    <div class="footer_row">
      <div class="block-logo">
        <a href="/" class="logo-group">
          <div class="logo-img">
						<?php
						$pos = strpos($logo, '>') + 1;
						$edited_logo = substr($logo, $pos, -4);
						print $edited_logo; ?>
          </div>
          <div class="logo-text">
            <span><?php print $site_name; ?></span>
          </div>
        </a>
        <a class="j-btn j-btn_bordered-green main-nav__btn doctorWhoBtn" href="#">
          <span class="help"><?php print t('Make an appointment') ?></span>
        </a>
      </div>
      <div class="block-nav">
        <?php if ($main_menu): ?>
          <?php
          $elements = element_children($main_menu);
          foreach ($elements as $id => $value){
            if ($main_menu{$value}['#href'] == 'contacts') {
              $main_menu{$value}['#attributes']['class'][] = 'contact-link';
            }
          }
          print render($main_menu); ?>
        <?php endif; ?>
      </div>
      <div class="p-null">
        <?php
        $block = block_load('block', $data_block['id_block_contact']);
        $block = _block_get_renderable_array(_block_render_blocks(array($block)));
//          $block['locale_language']['#block']->subject = NULL;
        $rendered_block = drupal_render($block);
        print $rendered_block;
        ?>
      </div>

      <div class="block-copy">
        <?php
        $block = block_load('block', $data_block['id_block_mirrolab']);
        $block = _block_get_renderable_array(_block_render_blocks(array($block)));
        //          $block['locale_language']['#block']->subject = NULL;
        $rendered_block = drupal_render($block);
        print $rendered_block;
        ?>
      </div>

    </div>
  </div>
	<div class="thank-visiting">
      <?php print t('Thank you for visiting our website'); ?>
	</div>
</footer>

