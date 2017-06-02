<?php
/**
 * @file
 * Template for a 3 column panel layouts.
 *
 * This template provides a three column panel display layouts, with
 * each column roughly equal in width.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layouts.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layouts. This layouts supports the following sections:
 *   - $content['left']: Content in the left column.
 *   - $content['middle']: Content in the middle column.
 *   - $content['right']: Content in the right column.
 */
?>

<div class="row" <?php !empty($css_id) ? print 'id="' . $css_id . '"' : ''; ?>>
  <div class="medium-4 columns">
    <?php print $content['left']; ?>
  </div>
  <div class="medium-4 columns">
    <?php print $content['middle']; ?>
  </div>
  <div class="medium-4 columns">
    <?php print $content['right']; ?>
  </div>
</div> <!-- panels row -->
