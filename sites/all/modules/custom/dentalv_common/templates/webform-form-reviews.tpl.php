<?php
$form['submitted']['doctors']['#title'] = t($form['submitted']['doctors']['#title']);
$form['submitted']['reviews']['#title'] = t($form['submitted']['reviews']['#title']);
$form['actions']['submit']['#value'] = t('Send');


$form['submitted']['doctors']['#title_display'] = 'none';
$form['submitted']['reviews']['#title_display'] = 'none';

unset($form['actions']['submit']['#attributes']['class'][3]);
unset($form['actions']['submit']['#attributes']['class'][4]);

array_unshift($form['actions']['submit']['#attributes']['class'], 'form-btn');
?>


<?php

$bool_us = 'auth-false';

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
          <h3><?php print t('Your review'); ?></h3>
          <!--hide next block .social-entry-propose-wrap after authorization complite via change css class from auth-false to auth-true-->
          <div class="social-entry-propose-wrap <?php print $bool_us; ?>">
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
                <label for="name" class="controls-label">Как вас зовут</label>
                <div class="form-controls">
                  <input value="<?php print $u_name; ?>" id="name" type="text">
                </div>
            </div>
          </div>

     
            <div class="input-covering">
              <!--form-group with class success or error give us needed border effect -->
              <!--if authorization complite change next block class from auth-false to auth-true-->
                <label for="candidateBrief" class="controls-label special"><?php print $form['submitted']['reviews']['#title']; ?></label>
                <?php print drupal_render($form['submitted']['reviews']); ?>
                <span class="help-blocks"></span>
            </div>

          <!--add success class to the next doctor-who-divider after inputs
          filled out to show aquamarine block bg-->

          <!--if authorization complite change next block class from auth-false to auth-true-->
          <div class="doctor-who-wrap">
            <div class="doctor-who-divider">
              <p><?php print $form['submitted']['doctors']['#title'];?></p>
            </div>
            <div class="doctor-who-list">
              <?php
              $costom_sort_order =  nodequeue_load_nodes(1, $backward = FALSE, $from = 0, $count = 100, $published_only = TRUE);
              $doctors = $form['submitted']['doctors'];
              foreach($doctors as $key => $value) {
                if(array_key_exists($key, $costom_sort_order)) {
                  $i = array_search($key, array_keys($costom_sort_order));
                  $form['submitted']['doctors'][$key]['#weight'] = $i;
                }
              }
              ?>
              <?php print drupal_render($form['submitted']['doctors']); ?>
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