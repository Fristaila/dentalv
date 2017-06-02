<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php //if (!empty($title)): ?>
<!--  <h3>--><?php //print $title; ?><!--</h3>-->
<?php //endif; ?>
<!---->
<!--<section class="reviews">-->
<!--    <h1 class="h3">--><?php //print t('Reviews'); ?><!--</h1>-->
<!--<ul class="reviews_row">-->
<?php //foreach ($rows as $id => $row): ?>
<!--<li>-->
<!--    --><?php //$human = user_load($view->result{$id}->_field_data['nid']['entity']->uid) ?>
<!--    <div class="review">-->
<!--      <div class="author">-->
<!--        <div class="author__img">-->
<!--          --><?php //print theme('image_style',array('path' => $human->picture->uri, 'style_name' => 'author_reviews')); ?>
<!--        </div>-->
<!--        <div class="author__info">-->
<!--          <span class="name">-->
<!--            --><?php //if (isset($human->data['ulogin'])){
//            print $human->data['ulogin']['first_name'] . ' ' .$human->data['ulogin']['last_name']; } else {
//              print $human->name;
//            }?>
<!--          </span>-->
<!--          <span class="date">--><?php //print format_date($view->result{$id}->_field_data['nid']['entity']->created,'custom','j F, Y',null,$GLOBALS['language_url']->language); ?><!--</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="review__text">-->
<!--        <p>--><?php //print render($view->result{$id}->field_body[0]['rendered']) ?><!--</p>-->
<!--      </div>-->
<!--      --><?php //if (!empty($view->result{$id}->field_field_doctors)): ?>
<!--      <a href="--><?php //print url($view->result{$id}->_field_data['nid']['entity_type']. '/' . $view->result{$id}->field_field_doctors[0]['raw']['entity']->nid, array('absolute' => TRUE)); ?><!--" class="therapist">-->
<!--        <div class="therapist__img">-->
<!--          --><?php //print theme('image_style',array('path' =>
//                                                  $view->result{$id}->field_field_doctors[0]['raw']['entity']->field_photo[LANGUAGE_NONE][0]['uri'],
//                                                'style_name' => 'doctors_small_img')); ?>
<!--        </div>-->
<!--        <div class="therapist__name">-->
<!--          <span>--><?php //print t('Treating dentist:'); ?><!--</span>-->
<!--          <span>--><?php //print render($view->result{$id}->field_field_doctors[0]['rendered']); ?><!--</span>-->
<!--        </div>-->
<!--      </a>-->
<!--    --><?php //endif; ?>
<!--      --><?php //if (empty($view->result{$id}->field_field_doctors)): ?>
<!--        <a href="javascript:void(0)" class="therapist">-->
<!--          <div class="therapist__img">-->
<!--            <img>-->
<!---->
<!--          </div>-->
<!--          <div class="therapist__name">-->
<!--            <span>--><?php //print t('Treating dentist:'); ?><!--</span>-->
<!--            <span>--><?php //print render($view->result{$id}->field_field_doctors[0]['rendered']); ?><!--</span>-->
<!--          </div>-->
<!--        </a>-->
<!--      --><?php //endif; ?>
<!--    </div>-->
<!--</li>-->
<?php //endforeach; ?>
<!--</ul>-->
<!--</section>-->
