<?php
/**
 * @file
 * fe_paragraph.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function fe_paragraph_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_paragraphs_info().
 */
function fe_paragraph_paragraphs_info() {
  $items = array(
    'image_parag' => array(
      'name' => 'image_parag',
      'bundle' => 'image_parag',
      'locked' => '1',
    ),
    'single_image_parag' => array(
      'name' => 'single image parag',
      'bundle' => 'single_image_parag',
      'locked' => '1',
    ),
    'text_parag' => array(
      'name' => 'text_parag',
      'bundle' => 'text_parag',
      'locked' => '1',
    ),
  );
  return $items;
}
