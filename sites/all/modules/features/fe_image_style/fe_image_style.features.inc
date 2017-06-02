<?php
/**
 * @file
 * fe_image_style.features.inc
 */

/**
 * Implements hook_image_default_styles().
 */
function fe_image_style_image_default_styles() {
  $styles = array();

  // Exported image style: about_clinic_img.
  $styles['about_clinic_img'] = array(
    'label' => 'about_clinic_img',
    'effects' => array(
      4 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 250,
          'height' => 346,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: author_reviews.
  $styles['author_reviews'] = array(
    'label' => 'author_reviews',
    'effects' => array(
      6 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 93,
          'height' => 93,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: cl_article_main.
  $styles['cl_article_main'] = array(
    'label' => 'cl_article_main',
    'effects' => array(
      5 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 279,
          'height' => 185,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: doctors_small_img.
  $styles['doctors_small_img'] = array(
    'label' => 'doctors_small_img',
    'effects' => array(
      7 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 170,
          'height' => 182,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: image_doctor_100x100.
  $styles['image_doctor_100x100'] = array(
    'label' => 'image_doctor_100x100',
    'effects' => array(
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 100,
          'height' => 100,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: image_news.
  $styles['image_news'] = array(
    'label' => 'image_news',
    'effects' => array(
      2 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 800,
          'height' => 600,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: small_image_news.
  $styles['small_image_news'] = array(
    'label' => 'small_image_news',
    'effects' => array(
      3 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 150,
          'height' => 100,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
