<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<section class="clinic-reviews">
  <div class="container">
    <a href="/reviews" class="h3 link link_bordered_green"><?php print t($view->display['block_1']->display_options['title']) ?></a>
    <div class="reviews-slider">
<?php foreach ($rows as $id => $row): ?>
  <?php $human = user_load($view->result{$id}->users_webform_submissions_uid);
  $data = webform_get_submission($view->result{$id}->webform_submissions_nid,$view->result{$id}->sid);
  $doctor = node_load($data->data[1][0]);
  ?>

    <div class="review">
      <div class="author">
        <div class="author__img">
          <img src="<?php print file_create_url($human->picture->uri); ?>">
        </div>
        <div class="author__info">
          <span class="name">
            <?php if (isset($human->data['ulogin'])){
              print $human->data['ulogin']['first_name'] . ' ' .$human->data['ulogin']['last_name']; } else {
              print $human->name;
            }?>
          </span>
          <span class="date"><?php print format_date($data->submitted,'custom','j F, Y',null,$GLOBALS['language_url']->language); ?></span>
        </div>
      </div>
      <div class="review__text">
        <p><?php print $data->data[2][0]; ?></p>
      </div>

      <a href="<?php print url('node/' . $data->data[1][0], array('absolute' => TRUE)); ?>" class="therapist">
        <div class="therapist__img">

          <?php print theme('image_style',array('path' =>
                                                  $doctor->field_photo[LANGUAGE_NONE][0]['uri'],
                                                'style_name' => 'doctors_small_img')); ?>

        </div>
        <div class="therapist__name">
          <span><?php print t('Treating dentist:'); ?></span>
          <span><?php print $doctor->title; ?></span>
        </div>
      </a>

    </div>
<?php endforeach; ?>
    </div>
  </div>
</section>
