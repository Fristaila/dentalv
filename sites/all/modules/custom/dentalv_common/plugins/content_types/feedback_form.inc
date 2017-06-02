<?php

/**
 * @file
 * Plugin to handle the feedback page'.
 */
$plugin = array(
  'title' => t('dentalv feedback form'),
  'single' => TRUE,
  'description' => t('dentalv feedback form.'),
  'category' => t('Custom'),
);

function dentalv_common_feedback_form_content_type_render($subtype, $conf, $panel_args, $context) {
  $block = new stdClass();

  $wf_id = variable_get('wf_id');
  $data_block = variable_get('block_id');

  $wid = $wf_id['id_contacts'];
  $webFormNode = node_load($wid);
  $form = drupal_get_form('webform_client_form_' . $wid, $webFormNode);


  $block_rend = block_load('block', $data_block['id_block_contact']);
  $block_rend = _block_get_renderable_array(_block_render_blocks(array($block_rend)));

  $block_t = block_load('block', $data_block['id_block_transport']);
  $block_t = _block_get_renderable_array(_block_render_blocks(array($block_t)));

  $block->content = theme('feedback_form',
    array('form' => $form,
          'block_rend' => $block_rend,'block_t' => $block_t));
  return $block;
}