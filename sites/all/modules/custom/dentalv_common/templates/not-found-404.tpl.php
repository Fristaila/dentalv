<div class="error-page">
  <div class="container">

<?php
$block = block_load('block', '4');
$block = _block_get_renderable_array(_block_render_blocks(array($block)));
//  $block['locale_language']['#block']->subject = NULL;
$rendered_block = drupal_render($block);
print $rendered_block; ?>
    </div>
</div>