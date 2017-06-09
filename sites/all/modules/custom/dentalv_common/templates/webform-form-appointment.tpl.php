<?php
if (arg(0) == 'node' && is_numeric(arg(1))) {
  $nid = arg(1);
  $node = node_load($nid);
  $type = $node->type;
  if ($node->type == 'doctors') {
    $form['choosen_doctors']['#default_value'] = $nid;
  }
}
$form['submitted']['what_is_your_name']['#title'] = t($form['submitted']['what_is_your_name']['#title']);
$form['submitted']['phone']['#title'] = t($form['submitted']['phone']['#title']);
$form['submitted']['email']['#title'] = t($form['submitted']['email']['#title']);
$form['choosen_doctors']['#title'] = t($form['choosen_doctors']['#title']);
$form['actions']['submit']['#value'] = t('Send');

$form['submitted']['phone']['#title_display'] = 'none';
$form['submitted']['email']['#title_display'] = 'none';
$form['submitted']['what_is_your_name']['#title_display'] = 'none';
$form['choosen_doctors']['#title_display'] = 'none';

unset($form['actions']['submit']['#attributes']['class'][3]);
unset($form['actions']['submit']['#attributes']['class'][4]);

array_unshift($form['actions']['submit']['#attributes']['class'], 'form-btn');
$form['actions']['submit']['#attributes']['name'][] = t('send');

?>

<div class="modal fade custom-modal" id="doctorWhoAppiontment" tabindex="-1" role="dialog" aria-labelledby="doctorWhoAppiontment" style="z-index: 1001">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <form action="">
        <div class="form-inner">
          <span class="close" data-dismiss="modal" aria-label="Close"></span>
          <h3><?php print t('Make an appointment'); ?></h3>
          <div class="input-goup">
          
              <label class="controls-label"><?php print $form['submitted']['what_is_your_name']['#title']; ?></label>
              <?php print drupal_render($form['submitted']['what_is_your_name']); ?>
          
           
              <label class="controls-label"><?php print $form['submitted']['phone']['#title'] ?></label>
              <?php print drupal_render($form['submitted']['phone']); ?>
          
           
              <label class="controls-label"><?php print $form['submitted']['email']['#title'] ?></label>
              <?php print drupal_render($form['submitted']['email']); ?>
         
          </div>
          <div class="doctor-who-divider">
            <p><?php print $form['choosen_doctors']['#title']; ?></p>
          </div>
          <div class="doctor-who-list">
            <?php
            $costom_sort_order =  nodequeue_load_nodes(1, $backward = FALSE, $from = 0, $count = 100, $published_only = TRUE);
            $doctors = $form['choosen_doctors'];
            foreach($doctors as $key => $value) {
              if(array_key_exists($key, $costom_sort_order)) {
                $i = array_search($key, array_keys($costom_sort_order));
                $form['choosen_doctors'][$key]['#weight'] = $i;
              }
            }
            ?>
          <?php print drupal_render($form['choosen_doctors']);?>
          </div>
          <div class="form-btn-wrap">
            <?php print drupal_render($form['actions']['submit']);?>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<?php print drupal_render_children($form); ?>
