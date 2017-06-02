<?php
/**
 * @file
 * fe_reviews.features.node_export_features.inc
 */

/**
 * Implements hook_node_export_features_default().
 */
function fe_reviews_node_export_features_default() {
  $node_export = array(
  'code_string' => 'array(
  (object) array(
      \'changed\' => NULL,
      \'cid\' => \'0\',
      \'comment\' => \'1\',
      \'comment_count\' => \'0\',
      \'created\' => NULL,
      \'data\' => NULL,
      \'files\' => array(),
      \'language\' => \'und\',
      \'last_comment_name\' => NULL,
      \'last_comment_timestamp\' => NULL,
      \'last_comment_uid\' => \'1\',
      \'log\' => \'\',
      \'menu\' => NULL,
      \'name\' => \'admin\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'34\',
      \'promote\' => \'1\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'1\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Review\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'type\' => \'webform\',
      \'uid\' => \'1\',
      \'uuid\' => \'a69979a4-a06a-47ec-a609-019e1257c4e9\',
      \'vid\' => NULL,
      \'vuuid\' => \'fc379d24-68e1-4f34-8a43-20ae515829d9\',
      \'webform\' => array(
        \'nid\' => \'331\',
        \'next_serial\' => \'12\',
        \'confirmation\' => \'\',
        \'confirmation_format\' => \'filtered_html\',
        \'redirect_url\' => \'<none>\',
        \'status\' => \'1\',
        \'block\' => \'0\',
        \'allow_draft\' => \'0\',
        \'auto_save\' => \'0\',
        \'submit_notice\' => \'1\',
        \'confidential\' => \'0\',
        \'submit_text\' => \'\',
        \'submit_limit\' => \'-1\',
        \'submit_interval\' => \'-1\',
        \'total_submit_limit\' => \'-1\',
        \'total_submit_interval\' => \'-1\',
        \'progressbar_bar\' => \'1\',
        \'progressbar_page_number\' => \'0\',
        \'progressbar_percent\' => \'0\',
        \'progressbar_pagebreak_labels\' => \'1\',
        \'progressbar_include_confirmation\' => \'1\',
        \'progressbar_label_first\' => \'Start\',
        \'progressbar_label_confirmation\' => \'Complete\',
        \'preview\' => \'0\',
        \'preview_next_button_label\' => \'\',
        \'preview_prev_button_label\' => \'\',
        \'preview_title\' => \'\',
        \'preview_message\' => \'\',
        \'preview_message_format\' => \'filtered_html\',
        \'preview_excluded_components\' => array(),
        \'webform_ajax\' => \'0\',
        \'record_exists\' => TRUE,
        \'roles\' => array(
          \'2\',
        ),
        \'emails\' => array(),
        \'components\' => array(
          1 => array(
            \'nid\' => 331,
            \'cid\' => \'1\',
            \'pid\' => \'0\',
            \'form_key\' => \'doctors\',
            \'name\' => \'doctors\',
            \'type\' => \'node_reference\',
            \'value\' => \'\',
            \'extra\' => array(
              \'widget_type\' => \'checkbox_radio\',
              \'multiple\' => 0,
              \'use_view\' => 0,
              \'referenceable_types\' => array(
                \'doctors\' => \'doctors\',
                \'article\' => 0,
                \'page\' => 0,
                \'forum\' => 0,
                \'price_list\' => 0,
                \'services\' => 0,
                \'vacancies\' => 0,
                \'webform\' => 0,
                \'clinic_history\' => 0,
                \'clinic_standart\' => 0,
                \'testimonial\' => 0,
              ),
              \'reference_view\' => \'\',
              \'view_args\' => \'\',
              \'default_value\' => \'\',
              \'title_display\' => \'none\',
              \'description_above\' => 0,
              \'private\' => 0,
              \'wrapper_classes\' => \'\',
              \'css_classes\' => \'\',
              \'attributes\' => array(),
              \'description\' => \'\',
              \'empty_option\' => \'None\',
              \'sort\' => array(
                \'sort_by\' => \'nid\',
                \'order\' => \'ASC\',
              ),
            ),
            \'required\' => \'1\',
            \'weight\' => \'0\',
            \'mandatory\' => 0,
            \'page_num\' => 1,
          ),
          2 => array(
            \'nid\' => 331,
            \'cid\' => \'2\',
            \'pid\' => \'0\',
            \'form_key\' => \'reviews\',
            \'name\' => \'Reviews\',
            \'type\' => \'textarea\',
            \'value\' => \'\',
            \'extra\' => array(
              \'title_display\' => \'none\',
              \'description_above\' => 0,
              \'private\' => 0,
              \'wrapper_classes\' => \'\',
              \'css_classes\' => \'\',
              \'cols\' => \'\',
              \'rows\' => \'\',
              \'resizable\' => 1,
              \'disabled\' => 0,
              \'description\' => \'\',
              \'placeholder\' => \'\',
              \'attributes\' => array(),
              \'analysis\' => FALSE,
            ),
            \'required\' => \'1\',
            \'weight\' => \'1\',
            \'page_num\' => 1,
          ),
        ),
        \'conditionals\' => array(),
      ),
    ),
)',
);
  return $node_export;
}
