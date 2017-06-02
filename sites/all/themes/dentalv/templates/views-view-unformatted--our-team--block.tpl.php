<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<!--<section class="section-about">-->
<section class="section-team">
  <div class="container">
    <div class="heading-help">
      <div class="heading-wrap">
        <h3><?php print t($view->human_name);  ?></h3>
      </div>
    </div>
    <ul class="team-list">
<?php foreach ($rows as $id => $row):
  $doctor_name = explode(" ", $view->result{$id}->node_title);
if (!isset($doctor_name[0])){$doctor_name[0] = '';};
if (!isset($doctor_name[1])){$doctor_name[1] = '';};
if (!isset($doctor_name[2])){$doctor_name[2] = '';};
?>
  <li class="team-list-item">
							<span class="ava-wrap">
								<?php print render($view->result{$id}->field_field_photo[0]['rendered']); ?>
							</span>
    <span class="member-name">
								<a href="<?php  print url( $view->result{$id}->_field_data['nid']['entity_type']. '/' .$view->result{$id}->nid, array('absolute' => TRUE)); ?>"  class="link link_bordered_green link_bold">
									<span class="last-name"><?php print $doctor_name[0]; ?></span><br>
							<span class="first-name"><?php print $doctor_name[1] .' '. $doctor_name[2]; ?></span>
							</a>
							</span>
    <span class="member-info">
      <?php
      $body_dc = render($view->result{$id}->field_body[0]['rendered']);
      $body_dc = str_replace('</p>','',$body_dc);
      $body_dc = str_replace('<p>','',$body_dc);
      print $body_dc; ?>
    </span>
  </li>
<?php endforeach; ?>
    </ul>
  </div>
</section>
<div class="banner-container">
  <img src="/sites/all/themes/dentalv/images/about/together.jpg" alt="our team">
</div>
<!--</section>-->