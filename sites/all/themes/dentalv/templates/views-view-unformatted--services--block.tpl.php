<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
$count = 0;
$ct = count($rows);
?>


<div class="main-services">
  <h1 class="h3"><?php print t($view->display['block']->display_options['title']); ?></h1>
<?php foreach ($rows as $id => $row): ?>
  <?php switch($count): ?>
<?php case 0: ?>
  <section class="jaws-section">
    <div class="container">
    <div class="jaws horizontal-group">
      <div class="img-wrap">
        <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
      </div>
      <div class="text-group">
        <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
          $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
        <div class="text-holder">
          <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
        </div>
      </div>
    </div>
  <?php
  break; ?>
  <?php case 1: ?>
  <div class="jaws horizontal-group">
    <div class="vertical-group">

            <div class="text-group">
              <div class="img-wrap">
                <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
              </div>
              <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
              $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
              <div class="text-holder">
                <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
              </div>
            </div>
    </div>
  <?php
  if ($id == ($ct-1)){ print '</div>';}
  break; ?>
    <?php case 2: ?>
<div class="bordered-wrap">
<div class="bordered-group">
            <div class="img-wrap">
              <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
            </div>
            <div class="text-group">
              <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
              $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
              <div class="text-holder">
                <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
              </div>
            </div>
            </div>
</div>
  </div>
      <?php break; ?>
    <?php case 3: ?>
  </div>
    </section><section class="whitening-section">
  <div class="img-wrap">
    <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
  </div>
  <div class="bg">
    <div class="text-group">
      <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
        $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
      <div class="text-holder">
        <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
      </div>
    </div>
  </div>
</section>
    <?php
    break; ?>
    <?php case 4: ?>
    <section class="tooth-section"><div class="container"><div class="teeth horizontal-group">
        <div class="horizontal-group bordered-group">

          <div class="img-wrap">
            <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
          </div>
          <div class="text-group">
            <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
              $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
            <div class="text-holder">
              <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
            </div>
          </div>
        </div>
    <?php
    if ($id == ($ct-1)){ print '</div></div>';}
    break; ?>
        <?php case 5: ?>
            <div class="vertical-group">
              <div class="img-wrap">
                <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
              </div>
              <div class="text-group">
                <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
                  $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
                <div class="text-holder">
                  <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
                </div>
              </div>
            </div>
        </div>
            <?php
//            $count = -1;
            if ($id == ($ct-1)){ print '</div>';}
            break; ?>
      <?php case 6: ?>
        <div class="teeth horizontal-group">
          <div class="img-wrap">
            <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
          </div>
          <div class="text-group">
            <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
              $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
            <div class="text-holder">
              <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
            </div>
          </div>
        </div>
      <?php if ($id == ($ct-1)){ print '</div>';} break; ?>
        <?php case 7: ?>
        <div class="teeth horizontal-group">
        <div class="vertical-group">
          <div class="img-wrap">
            <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
          </div>
          <div class="text-group">
            <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
              $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
            <div class="text-holder">
              <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
            </div>
          </div>
        </div>
        <?php if ($id == ($ct-1)){ print '</div></div>';} break; ?>
          <?php case 8: ?>
          <div class="bordered-group">
            <div class="text-group">
              <?php print l($view->result{$id}->node_title ,$view->result{$id}->_field_data['nid']['entity_type'].'/'.
                $view->result{$id}->nid, array('attributes' => array('class' => array('title link link_bordered_green link_bold')))); ?>
              <div class="text-holder">
                <?php print $view->style_plugin->rendered_fields[$id]['body']; ?>
              </div>
            </div>
            <div class="img-bottom">
              <?php print $view->style_plugin->rendered_fields[$id]['field_photo']; ?>
            </div>
          </div>
          </div>
        </div>
      </section>
          <?php $count = -1; break; ?>
  <?php endswitch; ?>
<?php $count++; endforeach; ?>
  </div>
</section>
</div>
