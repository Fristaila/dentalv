<?php

$plugin = array(
  'title' => t('Front Parallax effect'),
  'descriptions' => t('Blok to show parallax effect on front page'),
  'single' => TRUE,
  'edit form' => '',
  'category' => t('Custom'),
);

function dentalv_common_main_background_content_type_render($subtype, $conf, $panel_args, $context){
  $block = new stdClass();

  $menu_tree = menu_tree_all_data('main-menu');
  $tree_output_prepare = menu_tree_output($menu_tree);

  $site_name = variable_get('site_name');
  $site_slogan = variable_get('site_slogan');
  $site_phone = variable_get('site_phone');

  $block->content = theme('main_parallax', array('main_menu' => $tree_output_prepare,
                                                 'site_name' => $site_name,
                                                 'site_slogan' => $site_slogan,
                                                 'site_phone' => $site_phone,));
  return $block;
}