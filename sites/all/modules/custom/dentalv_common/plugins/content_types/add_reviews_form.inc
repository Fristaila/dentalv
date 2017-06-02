<?php

/**
 * @file
 * Plugin to handle the footer toolbar'.
 */
$plugin = array(
  'title' => t('dentalv review form'),
  'single' => TRUE,
  'description' => t('dentalv review form.'),
  'category' => t('Custom'),
);

function dentalv_common_add_reviews_form_content_type_render($subtype, $conf, $panel_args, $context) {
  $block = new stdClass();
  if( ! function_exists("node_add")) {
  include_once(drupal_get_path('module', 'node') . '/node.pages.inc');
  }
  $create_reviews = node_add('testimonial');
  $block->content = theme('add_reviews_form', array('var' => $create_reviews,));
  return $block;
}