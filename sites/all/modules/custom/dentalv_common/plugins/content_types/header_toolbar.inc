<?php

/**
 * @file
 * Plugin to handle the header toolbar'.
 */
$plugin = array(
  'title' => t('dentalv header toolbar'),
  'single' => TRUE,
  'description' => t('dentalv header toolbar.'),
  'category' => t('Custom'),
);

function dentalv_common_header_toolbar_content_type_render($subtype, $conf, $panel_args, $context) {
  $block = new stdClass();

  //main_menu
  $menu_tree = menu_tree_all_data('main-menu');
  $tree_output_prepare = menu_tree_output($menu_tree);

  //logo
  $logo_path = theme_get_setting('logo');
  $variables = array(
    'path' => $logo_path,
    'alt' => variable_get('site_name'),
    'title' => variable_get('site_name'),
    'attributes' => array('class' => 'logo'),
  );
  $site_name = variable_get('site_name');
  $logo_image = theme('image', $variables);
  $logo = l($logo_image, '<front>', array('html' => TRUE));

  $block->content = theme('dentalv_common_header', array(
    'main_menu' => $tree_output_prepare,
    'logo' => $logo,
    'site_name' => $site_name,
  ));
  return $block;
}