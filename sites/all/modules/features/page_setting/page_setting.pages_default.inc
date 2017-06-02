<?php
/**
 * @file
 * page_setting.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function page_setting_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'site_template__panel_context_df029844-7992-42c1-b5bd-8c999e2fe687';
  $handler->task = 'site_template';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => '',
  );
  $display = new panels_display();
  $display->layout = 'main_layout';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'header' => NULL,
      'content' => NULL,
      'footer' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = 'b21e94ec-5d68-47ac-9ea6-66733ea75f1e';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'site_template__panel_context_df029844-7992-42c1-b5bd-8c999e2fe687';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-6b24fed4-54fe-4c8f-8c48-7cc1686bf64e';
  $pane->panel = 'content';
  $pane->type = 'page_content';
  $pane->subtype = 'page_content';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'argument_page_content_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '6b24fed4-54fe-4c8f-8c48-7cc1686bf64e';
  $display->content['new-6b24fed4-54fe-4c8f-8c48-7cc1686bf64e'] = $pane;
  $display->panels['content'][0] = 'new-6b24fed4-54fe-4c8f-8c48-7cc1686bf64e';
  $pane = new stdClass();
  $pane->pid = 'new-2f007706-861d-462c-9e6c-6fc13f315621';
  $pane->panel = 'footer';
  $pane->type = 'map_toolbar';
  $pane->subtype = 'map_toolbar';
  $pane->shown = TRUE;
  $pane->access = array(
    'plugins' => array(
      0 => array(
        'name' => 'path_visibility',
        'settings' => array(
          'visibility_setting' => '0',
          'paths' => 'not-found',
        ),
        'context' => 'argument_string_1',
        'not' => FALSE,
      ),
      1 => array(
        'name' => 'node_type',
        'settings' => array(
          'type' => array(
            'doctors' => 'doctors',
          ),
        ),
        'context' => 'node',
        'not' => TRUE,
      ),
    ),
  );
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '2f007706-861d-462c-9e6c-6fc13f315621';
  $display->content['new-2f007706-861d-462c-9e6c-6fc13f315621'] = $pane;
  $display->panels['footer'][0] = 'new-2f007706-861d-462c-9e6c-6fc13f315621';
  $pane = new stdClass();
  $pane->pid = 'new-63faac6b-ddca-4adb-90b2-ec363cc14e34';
  $pane->panel = 'footer';
  $pane->type = 'footer_toolbar';
  $pane->subtype = 'footer_toolbar';
  $pane->shown = TRUE;
  $pane->access = array(
    'plugins' => array(
      0 => array(
        'name' => 'path_visibility',
        'settings' => array(
          'visibility_setting' => '0',
          'paths' => 'not-found',
        ),
        'context' => 'argument_string_1',
        'not' => FALSE,
      ),
      1 => array(
        'name' => 'node_type',
        'settings' => array(
          'type' => array(
            'doctors' => 'doctors',
          ),
        ),
        'context' => 'node',
        'not' => TRUE,
      ),
    ),
  );
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '63faac6b-ddca-4adb-90b2-ec363cc14e34';
  $display->content['new-63faac6b-ddca-4adb-90b2-ec363cc14e34'] = $pane;
  $display->panels['footer'][1] = 'new-63faac6b-ddca-4adb-90b2-ec363cc14e34';
  $pane = new stdClass();
  $pane->pid = 'new-249bbed0-c5c1-49f9-866f-8edd7445a942';
  $pane->panel = 'header';
  $pane->type = 'header_toolbar';
  $pane->subtype = 'header_toolbar';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '249bbed0-c5c1-49f9-866f-8edd7445a942';
  $display->content['new-249bbed0-c5c1-49f9-866f-8edd7445a942'] = $pane;
  $display->panels['header'][0] = 'new-249bbed0-c5c1-49f9-866f-8edd7445a942';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-249bbed0-c5c1-49f9-866f-8edd7445a942';
  $handler->conf['display'] = $display;
  $export['site_template__panel_context_df029844-7992-42c1-b5bd-8c999e2fe687'] = $handler;

  return $export;
}

/**
 * Implements hook_default_page_manager_pages().
 */
function page_setting_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = '404';
  $page->task = 'page';
  $page->admin_title = '404';
  $page->admin_description = '';
  $page->path = 'not-found';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_404__panel';
  $handler->task = 'page';
  $handler->subtask = '404';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = 'b91f469f-5cc1-480d-8f1d-d8dd93b84ffe';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_404__panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-6315c4d2-8f1d-4919-8543-15a5c0e69937';
  $pane->panel = 'middle';
  $pane->type = 'not_found';
  $pane->subtype = 'not_found';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '6315c4d2-8f1d-4919-8543-15a5c0e69937';
  $display->content['new-6315c4d2-8f1d-4919-8543-15a5c0e69937'] = $pane;
  $display->panels['middle'][0] = 'new-6315c4d2-8f1d-4919-8543-15a5c0e69937';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['404'] = $page;

  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'about_';
  $page->task = 'page';
  $page->admin_title = 'About ';
  $page->admin_description = '';
  $page->path = 'about-clinic';
  $page->access = array();
  $page->menu = array(
    'type' => 'normal',
    'title' => 'About the clinic',
    'name' => 'main-menu',
    'weight' => '0',
    'parent' => array(
      'type' => 'none',
      'title' => '',
      'name' => 'navigation',
      'weight' => '0',
    ),
  );
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_about___panel';
  $handler->task = 'page';
  $handler->subtask = 'about_';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = 'd2347ac9-259f-4fae-af3a-ab9c1aa85264';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_about___panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-48f3e7f7-0fa9-4a93-b4b3-a32f680de6fa';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'clinic_standart';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '6',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '48f3e7f7-0fa9-4a93-b4b3-a32f680de6fa';
  $display->content['new-48f3e7f7-0fa9-4a93-b4b3-a32f680de6fa'] = $pane;
  $display->panels['middle'][0] = 'new-48f3e7f7-0fa9-4a93-b4b3-a32f680de6fa';
  $pane = new stdClass();
  $pane->pid = 'new-03c6b108-055d-4edf-93db-12543fc6a712';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'clinic_histore';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '0',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h4',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '03c6b108-055d-4edf-93db-12543fc6a712';
  $display->content['new-03c6b108-055d-4edf-93db-12543fc6a712'] = $pane;
  $display->panels['middle'][1] = 'new-03c6b108-055d-4edf-93db-12543fc6a712';
  $pane = new stdClass();
  $pane->pid = 'new-7dbeac03-48ee-425a-b8da-def12a5f4bde';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'our_team';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 1,
    'nodes_per_page' => '8',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h4',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = '7dbeac03-48ee-425a-b8da-def12a5f4bde';
  $display->content['new-7dbeac03-48ee-425a-b8da-def12a5f4bde'] = $pane;
  $display->panels['middle'][2] = 'new-7dbeac03-48ee-425a-b8da-def12a5f4bde';
  $pane = new stdClass();
  $pane->pid = 'new-d48daa67-37ae-4a6a-b47a-011ffc578786';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'vacancies';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '0',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h3',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 3;
  $pane->locks = array();
  $pane->uuid = 'd48daa67-37ae-4a6a-b47a-011ffc578786';
  $display->content['new-d48daa67-37ae-4a6a-b47a-011ffc578786'] = $pane;
  $display->panels['middle'][3] = 'new-d48daa67-37ae-4a6a-b47a-011ffc578786';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['about_'] = $page;

  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'contacts';
  $page->task = 'page';
  $page->admin_title = 'Contacts';
  $page->admin_description = '';
  $page->path = 'contacts';
  $page->access = array();
  $page->menu = array(
    'type' => 'normal',
    'title' => 'Contacts',
    'name' => 'main-menu',
    'weight' => '0',
    'parent' => array(
      'type' => 'none',
      'title' => '',
      'name' => 'navigation',
      'weight' => '0',
    ),
  );
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_contacts__panel';
  $handler->task = 'page';
  $handler->subtask = 'contacts';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '359f6a68-26ff-4f72-8232-682c2815cc51';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_contacts__panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-3d56bbfa-b9bf-4128-bd00-b4a94f000318';
  $pane->panel = 'middle';
  $pane->type = 'feedback_form';
  $pane->subtype = 'feedback_form';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => 'large-10 large-offset-1 columns',
  );
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '3d56bbfa-b9bf-4128-bd00-b4a94f000318';
  $display->content['new-3d56bbfa-b9bf-4128-bd00-b4a94f000318'] = $pane;
  $display->panels['middle'][0] = 'new-3d56bbfa-b9bf-4128-bd00-b4a94f000318';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['contacts'] = $page;

  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'home';
  $page->task = 'page';
  $page->admin_title = 'home';
  $page->admin_description = '';
  $page->path = '<front>';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_home__panel';
  $handler->task = 'page';
  $handler->subtask = 'home';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '2c542d17-7f20-490d-a157-cb23412276a3';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_home__panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-7ab20e01-daf6-4b02-ba37-917b1e5c12ac';
  $pane->panel = 'middle';
  $pane->type = 'main_background';
  $pane->subtype = 'main_background';
  $pane->shown = TRUE;
  $pane->access = array(
    'plugins' => array(
      0 => array(
        'name' => 'front',
        'settings' => NULL,
        'not' => FALSE,
      ),
    ),
  );
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '7ab20e01-daf6-4b02-ba37-917b1e5c12ac';
  $display->content['new-7ab20e01-daf6-4b02-ba37-917b1e5c12ac'] = $pane;
  $display->panels['middle'][0] = 'new-7ab20e01-daf6-4b02-ba37-917b1e5c12ac';
  $pane = new stdClass();
  $pane->pid = 'new-31727fc6-44a8-4abd-8824-f9a1896af936';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'clinic_histore';
  $pane->shown = TRUE;
  $pane->access = array(
    'plugins' => array(),
  );
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '0',
    'pager_id' => '0',
    'offset' => '2',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block_1',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '31727fc6-44a8-4abd-8824-f9a1896af936';
  $display->content['new-31727fc6-44a8-4abd-8824-f9a1896af936'] = $pane;
  $display->panels['middle'][1] = 'new-31727fc6-44a8-4abd-8824-f9a1896af936';
  $pane = new stdClass();
  $pane->pid = 'new-001ee4a6-6bfd-4ab5-b0db-0df0f1bd29dd';
  $pane->panel = 'middle';
  $pane->type = 'video_content';
  $pane->subtype = 'video_content';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = '001ee4a6-6bfd-4ab5-b0db-0df0f1bd29dd';
  $display->content['new-001ee4a6-6bfd-4ab5-b0db-0df0f1bd29dd'] = $pane;
  $display->panels['middle'][2] = 'new-001ee4a6-6bfd-4ab5-b0db-0df0f1bd29dd';
  $pane = new stdClass();
  $pane->pid = 'new-149930b3-7214-4150-b69a-0f7686037cba';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'news';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '6',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 3;
  $pane->locks = array();
  $pane->uuid = '149930b3-7214-4150-b69a-0f7686037cba';
  $display->content['new-149930b3-7214-4150-b69a-0f7686037cba'] = $pane;
  $display->panels['middle'][3] = 'new-149930b3-7214-4150-b69a-0f7686037cba';
  $pane = new stdClass();
  $pane->pid = 'new-620f4fdd-9d47-4205-8552-b3fd8bcb21b0';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'reviews';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '6',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 4;
  $pane->locks = array();
  $pane->uuid = '620f4fdd-9d47-4205-8552-b3fd8bcb21b0';
  $display->content['new-620f4fdd-9d47-4205-8552-b3fd8bcb21b0'] = $pane;
  $display->panels['middle'][4] = 'new-620f4fdd-9d47-4205-8552-b3fd8bcb21b0';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['home'] = $page;

  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'news';
  $page->task = 'page';
  $page->admin_title = 'news';
  $page->admin_description = '';
  $page->path = 'news';
  $page->access = array();
  $page->menu = array(
    'type' => 'normal',
    'title' => 'News',
    'name' => 'main-menu',
    'weight' => '0',
    'parent' => array(
      'type' => 'none',
      'title' => '',
      'name' => 'navigation',
      'weight' => '0',
    ),
  );
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_news__panel';
  $handler->task = 'page';
  $handler->subtask = 'news';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '81bc39f7-d657-4dc8-9df3-597808e1109d';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_news__panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-57e187e5-c1f0-4445-805b-75bc9acff40e';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'news';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 1,
    'nodes_per_page' => '4',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '57e187e5-c1f0-4445-805b-75bc9acff40e';
  $display->content['new-57e187e5-c1f0-4445-805b-75bc9acff40e'] = $pane;
  $display->panels['middle'][0] = 'new-57e187e5-c1f0-4445-805b-75bc9acff40e';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['news'] = $page;

  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'price_list';
  $page->task = 'page';
  $page->admin_title = 'price list';
  $page->admin_description = '';
  $page->path = 'price-list';
  $page->access = array();
  $page->menu = array(
    'type' => 'normal',
    'title' => 'Our price',
    'name' => 'main-menu',
    'weight' => '0',
    'parent' => array(
      'type' => 'none',
      'title' => '',
      'name' => 'navigation',
      'weight' => '0',
    ),
  );
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_price_list__panel';
  $handler->task = 'page';
  $handler->subtask = 'price_list';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '78bc2a92-10d6-4afe-9a5d-4c4421c81dd3';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_price_list__panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-a5182919-f190-4d3f-a82a-c34b1257be09';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'price_list';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '0',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'a5182919-f190-4d3f-a82a-c34b1257be09';
  $display->content['new-a5182919-f190-4d3f-a82a-c34b1257be09'] = $pane;
  $display->panels['middle'][0] = 'new-a5182919-f190-4d3f-a82a-c34b1257be09';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['price_list'] = $page;

  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'reviews';
  $page->task = 'page';
  $page->admin_title = 'reviews';
  $page->admin_description = '';
  $page->path = 'reviews';
  $page->access = array();
  $page->menu = array(
    'type' => 'normal',
    'title' => 'Reviews',
    'name' => 'main-menu',
    'weight' => '0',
    'parent' => array(
      'type' => 'none',
      'title' => '',
      'name' => 'navigation',
      'weight' => '0',
    ),
  );
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_reviews__panel';
  $handler->task = 'page';
  $handler->subtask = 'reviews';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '3c1e3eee-a1b5-4887-a7b1-3ad14d0a387f';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_reviews__panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-2dd16867-b065-4816-a433-4c7da87f170c';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'reviews';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 1,
    'nodes_per_page' => '6',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => 'reviews',
  );
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '2dd16867-b065-4816-a433-4c7da87f170c';
  $display->content['new-2dd16867-b065-4816-a433-4c7da87f170c'] = $pane;
  $display->panels['middle'][0] = 'new-2dd16867-b065-4816-a433-4c7da87f170c';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['reviews'] = $page;

  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'services';
  $page->task = 'page';
  $page->admin_title = 'Services';
  $page->admin_description = '';
  $page->path = 'services';
  $page->access = array();
  $page->menu = array(
    'type' => 'normal',
    'title' => 'Services',
    'name' => 'main-menu',
    'weight' => '0',
    'parent' => array(
      'type' => 'none',
      'title' => '',
      'name' => 'navigation',
      'weight' => '0',
    ),
  );
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_services__panel';
  $handler->task = 'page';
  $handler->subtask = 'services';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '29f6a6d1-1512-489c-9c24-c61f9bc19b62';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_services__panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-2ad395e3-5727-48c1-ae4e-d7af47e4522d';
  $pane->panel = 'middle';
  $pane->type = 'views';
  $pane->subtype = 'services';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '9',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '2ad395e3-5727-48c1-ae4e-d7af47e4522d';
  $display->content['new-2ad395e3-5727-48c1-ae4e-d7af47e4522d'] = $pane;
  $display->panels['middle'][0] = 'new-2ad395e3-5727-48c1-ae4e-d7af47e4522d';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['services'] = $page;

  return $pages;

}
