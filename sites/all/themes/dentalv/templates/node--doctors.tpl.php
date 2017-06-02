<?php

/**
 * @file
 * Default theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all, or
 *   print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct url of the current node.
 * - $terms: the themed list of taxonomy term links output from theme_links().
 * - $display_submitted: whether submission information should be displayed.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the following:
 *   - node: The current template type, i.e., "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined, e.g. $node->body becomes $body. When needing to access
 * a field's raw values, developers/themers are strongly encouraged to use these
 * variables. Otherwise they will have to explicitly specify the desired field
 * language, e.g. $node->body['en'], thus overriding any language negotiation
 * rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 */
?>
      <section class="section-doctor">
        <article id="node-<?php print $node->nid; ?>" class="article-doctor <?php print $classes; ?>"<?php print $attributes; ?>>
          <?php print render($title_prefix); ?>
          <?php if (!$page): ?>
            <?php if (!$page): ?>
              <h2<?php print $title_attributes; ?>>
                <a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
            <?php endif; ?>
          <?php endif; ?>
          <?php print render($title_suffix); ?>
          <header class="header-doctor" rel="url(<?php print file_create_url($field_background_photo[0]['uri']);?>)"
                  style="background-image: url(<?php print file_create_url($field_background_photo[0]['uri']);?>);">
            <?php print l('',$_SERVER['HTTP_REFERER'],array('attributes'=> array('class' => array('close')))); ?>
            <h1 class="heading">
              <?php print $elements['#node']->title ?>
            </h1>
            <ul class="link-list">
              <?php if ($field_doctor[0]['value'] == TRUE): ?>
              <li class="link-list-item link-list-item_button">
                <a id="current-doctor-appointment" href="javascript:void(0)" class="j-btn j-btn_bordered-green doctorWhoBtn">
                  <span class="help"><?php print t('Make an appointment');?></span>
                </a>
              </li>
              <?php endif; ?>
              <li class="link-list-item">
                <a id="current-doctor-comment" href="javascript:void(0)" class="link link_bordered_green commentBtn">
                  <span><?php print t('Write review');?></span>
                </a>
              </li>
            </ul>
          </header>
          <div class="doctor-boigraphy">
            <?php $body = field_view_field('node', $node, 'body');
            $body['#label_display'] = 'hidden';
            print render($body); ?>
          </div>
          <div class="large-6 columns">
            <?php
            // $image = field_view_field('node', $node, 'field_photo');
            // $image['#label_display'] = 'hidden';
            // print render($image); ?>
          </div>
        </article>
      </section>

<?php
//module_load_include('inc', 'node', 'node.pages');
//global $user;
//$node = (object) array(
//  'uid' => $user->uid,
//  'name' => (isset($user->name) ? $user->name : ''),
//  'type' => 'testimonial',
//  'language' => LANGUAGE_NONE,
//);
//
//$form = drupal_get_form("testimonial_node_form", $node);
//  print drupal_render($form);
//?>

<div class="webform-cur" style="z-index:1100;">
  <?php
  $wf_id = variable_get('wf_id');
  $webFormNode = node_load($wf_id['id_webform_review']);
  $form = drupal_get_form('webform_client_form_' . $wf_id['id_webform_review'], $webFormNode, FALSE);
  print drupal_render($form);
  ?>
</div>
