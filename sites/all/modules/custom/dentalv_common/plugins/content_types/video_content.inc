<?php

$plugin = array(
'title' => t('Video block'),
'descriptions' => t('Blok to show video on front page'),
'single' => TRUE,
'edit form' => '',
'category' => t('Custom'),
);

function dentalv_common_video_content_content_type_render($subtype, $conf, $panel_args, $context){
  $block = new stdClass();
  $data = variable_get('video_settings');
  $block->content = theme('video_block', array('video_id' => $data['video_id'][1]));
  return $block;
}

function dentalv_settings_video_content_form($form, &$form_state){
  $form = array();
  $data = variable_get('video_settings');
  $form['video_url'] = array(
    '#title' => t('URL video with Youtube'),
    '#type' => 'textfield',
    '#description' => t('Enter url video for submitted on front page'),
    '#default_value' => empty($data['id_contacts']) ? '' : $data['id_contacts'],
  );
  $form['submit'] = array(
    '#value' => t('Submit'),
    '#type' => 'submit',
  );
  return $form;
}

function dentalv_settings_video_content_form_submit($form, &$form_state) {
  $data = array();
  $data['video_url'] = $form_state['values']['video_url'];
  $str = $data['video_url'];
  $re = '/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/';
  $prgm = preg_match($re, $str, $matches);
  $data['video_id'] = $matches;
  variable_set('video_settings',$data);
}