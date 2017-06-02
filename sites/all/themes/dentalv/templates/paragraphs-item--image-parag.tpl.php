<?php

/**
 * @file
 * Default theme implementation for a single paragraph item.
 *
 * Available variables:
 * - $content: An array of content items. Use render($content) to print them
 *   all, or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. By default the following classes are available, where
 *   the parts enclosed by {} are replaced by the appropriate values:
 *   - entity
 *   - entity-paragraphs-item
 *   - paragraphs-item-{bundle}
 *
 * Other variables:
 * - $classes_array: Array of html class attribute values. It is flattened into
 *   a string within the variable $classes.
 *
 * @see template_preprocess()
 * @see template_preprocess_entity()
 * @see template_process()
 */


$img_closed = '';
?>
<?php if (isset($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE][1])) :?>
<!--  <div class="content">-->
    <div class="article-tab">
      <div class="gallery-component">
        <div class="pack-chief-img">
          <?php foreach ($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE] as $id => $value) :
            if ($id > 0 ){ $img_closed = 'closed '; }?>
              <div style="background-image: url(<?php print file_create_url($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE]{$id}['uri']); ?>)"
                 id="gallery-item<?php print $id; ?>" data-gallery="<?php print $id+1; ?>" class="cover<?php print $id;
                 ?> tabCover chief-img-cover <?php print $img_closed; ?>animate-opacity">
              </div>
            <?php endforeach;
            $img_closed = ''; ?>
        </div>

        <div class="pack-thumbs">
          <?php foreach ($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE] as $id => $value) :?>
            <div style="background-image: url(<?php print file_create_url($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE]{$id}['uri']); ?>)" data-image="<?php print $id; ?>" class="thumbs-img-cover tabInvoke ">
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>

  <div class="modal fade gallery-modal custom-modal" id="galleryModal" tabindex="-1" role="dialog" aria-labelledby="galleryModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div  class="gallery-component form-inner">
          <span class="close special" data-dismiss="modal" aria-label="Close"></span>
          <div class="pack-chief-img">
            <span  class="icon-arrow-right"></span>
            <span  class="icon-arrow-left"></span>
            <?php foreach ($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE] as $id => $value) :
              if ($id > 0 ){ $img_closed = 'closed '; }?>
              <div style="background-image: url(<?php print file_create_url($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE]{$id}['uri']); ?>)"
                   id="gallery-item<?php print $id; ?>" class="slidesImages chief-img-cover <?php print $img_closed; ?>animate-opacity">
              </div>
            <?php endforeach; ?>
          </div>
          <div class="pack-thumbs">
            <?php foreach ($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE] as $id => $value) :?>
              <div style="background-image: url(<?php print file_create_url($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE]{$id}['uri']); ?>)" data-currentDiv="<?php print $id+1; ?>" class="thumbs-img-cover thumsDots ">
              </div>
            <?php endforeach; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--  </div>-->
<?php else: ?>
  <div class="content__img">
    <img src="<?php print file_create_url($paragraphs_item->field_paragraph_photo[LANGUAGE_NONE][0]['uri']); ?>" alt="">
  </div>

<?php endif; ?>

