<?php
/**
 * Settings map plugin
 */

$plugin = array(
  'title' => t('Error 404'),
  'descriptions' => t('Blok to show at page 404'),
  'single' => TRUE,
  'edit form' => '',
  'category' => t('Custom'),
);

/**
 * Output function for the google map.
 */
function dentalv_common_custom_not_found_content_type_render($subtype, $conf, $panel_args, $context){
  $block = new stdClass();
  $data = 'NOT FOUND';
  $block->content = theme('custom_not_found', array('var' => $data));
  return $block;
}