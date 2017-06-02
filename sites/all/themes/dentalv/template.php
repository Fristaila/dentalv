<?php

/**
 * Implements template_preprocess_html().
 */
function dentalv_preprocess_html(&$variables) {
  foreach ($variables['classes_array'] as $id => $value){
    if ($value == 'section-contacts') {
      unset($variables['classes_array']{$id});
    }
  }
}

/**
 * Implements template_preprocess_page.
 */
function dentalv_preprocess_page(&$variables) {
}

/**
 * Implements template_preprocess_node.
 */
function dentalv_preprocess_node(&$variables) {
}
