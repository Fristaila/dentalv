<?php
/**
 * @file
 * Template for a 3 column panel layouts.
 *
 * This template provides a very simple "one column" panel display layouts.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layouts.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layouts. This layouts supports the following sections:
 *   $content['middle']: The only panel in the layouts.
 */
?>
<div class="row" <?php !empty($css_id) ? print 'id="' . $css_id . '"' : ''; ?>>
  <div class="medium-12 columns">
    <?php print $content['middle']; ?>
  </div>
</div>
