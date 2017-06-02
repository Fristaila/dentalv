<?php
$page_wrapper_befo = array(
  'front' => ' main-page',
);
$page_query = array(
  '<front>' => '',
);
$doc_wrap = '';
 if (!drupal_is_front_page()){
   $page_wrapper_befo['front'] = '';
}
if (isset($display->context['node']->data->type) && $display->context['node']->data->type == 'doctors'){
   $doc_wrap = ' special';
}
?>
<div class="main-layout-wrapper"
  <?php if (!empty($css_id)) {
  print "id=\"$css_id\"";
} ?>
>
    <div class="large-12 clearfix"><?php print $content['header']; ?></div>

  <div class="wrapper<?php print $page_wrapper_befo['front']; ?><?php print $doc_wrap; ?>">
    <main>
    <div class="large-12 clearfix"><?php print $content['content']; ?></div>
    </main>
  </div>

    <div>
      <div class="large-12 clearfix"><?php print $content['footer']; ?></div>
    </div>
</div>
