
<?php

$bool = 'auth-true';

if (arg(0) == 'node' && is_numeric(arg(1))) {
  $nid = arg(1);
  $node = node_load($nid);
  $type = $node->type;
  if ($node->type == 'doctors') {
    $bool = 'auth-false';
  }
}

$form['body'][LANGUAGE_NONE]['#title'] = t($form['body'][LANGUAGE_NONE]['#title']);
$form['field_doctors'][LANGUAGE_NONE]['#title_display'] = 'none';
$form['body'][LANGUAGE_NONE][0]['value']['#title_display'] = 'none';

$image = '';
$first_name = '';
$last_name = '';
$bool_sc = 'auth-true';
$bool_us = 'auth-false';
$u_name ='';




unset($form['actions']['submit']['#attributes']['class'][1]);
//unset($form['actions']['submit']['#attributes']['class'][2]);

array_unshift($form['actions']['submit']['#attributes']['class'], 'form-btn');
$form['actions']['submit']['#attributes']['name'][] = 'send';
$form['actions']['submit']['#value'] = t('send');
?>

<?php
if (isset($GLOBALS['user']->name)){
  $user_image = file_load($GLOBALS['user']->picture);
  $image = theme('image_style', array('path' => $user_image->uri, 'style_name' => 'author_reviews'));

  if (isset($user->data['ulogin'])){
    $first_name = $user->data['ulogin']['first_name'];
    $last_name = $user->data['ulogin']['last_name'];
    $u_name = $first_name . ' ' . $last_name;
  } else {
    $u_name = $GLOBALS['user']->name;
  }
  $bool_sc = 'auth-false';
  $bool_us = 'auth-true';
} ?>

<div class="modal fade custom-modal modal-comment" id="comment" tabindex="-1" role="dialog" aria-labelledby="comment">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <form action="">
        <div class="form-inner">
          <span class="close" data-dismiss="modal" aria-label="Close"></span>
          <h3>Ваш отзыв</h3>
          <!--hide next block .social-entry-propose-wrap after authorization complite via change css class from auth-false to auth-true-->
          <div class="social-entry-propose-wrap <?php print $bool_sc; ?>">
            <div class="social-entry-propose"><?php print t('Enter with the help of social. Networks'); ?></div>
            <ul class="social"><?php
              if (module_exists('ulogin') && !user_is_logged_in()) {
              $element['#type'] = 'ulogin_widget';
              print drupal_render($element);
              } ?>
            </ul>
          </div>
          <!--if authorization complite change next block class from auth-false to auth-true-->
          <div class="avatar-name-social <?php print $bool_us; ?>">
            <div class="avatar-from-social-wrap">
              <div class="avatar-from-social">
                <?php print $image; ?>
              </div>
            </div>
            <div class="form-group form-group-special">
              <div class="author__info">
                <span class="name"><?php print $u_name; ?></span>
              </div>
            </div>
          </div>

          <div class="input-goup">
            <!--form-group with class success or error give us needed border effect -->
            <!--if authorization complite change next block class from auth-false to auth-true-->

            <div class="form-group">
              <label for="candidateBrief" class="controls-label special">Отзыв</label>
              <div  class="form-controls"><?php print drupal_render($form['body']); ?></div>
            </div>
          </div>

          <!--add success class to the next doctor-who-divider after inputs
          filled out to show aquamarine block bg-->

          <!--if authorization complite change next block class from auth-false to auth-true-->
          <div class="doctor-who-wrap <?php print $bool; ?>">
            <div class="doctor-who-divider">
              <p>Ваш лечащий дантист</p>
            </div>
            <div class="doctor-who-list">
              <?php print drupal_render($form['field_doctors']); ?>
            </div>
          </div>
          <div class="form-btn-wrap">
           <?php print drupal_render($form['actions']['submit']); ?>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<?php print drupal_render_children($form); ?>

