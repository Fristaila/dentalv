<?php
/**
 * Settings map plugin
 */

$plugin = array(
  'title' => t('Map'),
  'descriptions' => t('Blok to show location google map'),
  'single' => TRUE,
  'edit form' => '',
  'category' => t('Custom'),
);

/**
 * Output function for the google map.
 */
function dentalv_common_map_toolbar_content_type_render($subtype, $conf, $panel_args, $context){
  $block = new stdClass();
//  drupal_add_js('http://maps.google.com/maps/api/js?key=AIzaSyBfgm_RsWzUkkcnTd9pTC8DGg7_IihZ9aM');
//
//  drupal_add_js(drupal_get_path('module', 'dentalv_common') . '/js/map.js');
//  $data[] = array(
//    'map_address' => variable_get('site_address', ''),
//  );
//  drupal_add_js(array('common' => array('address' => $data)), 'setting');
  $block->content = theme('google_map', array('place' => ''));
  return $block;
}
