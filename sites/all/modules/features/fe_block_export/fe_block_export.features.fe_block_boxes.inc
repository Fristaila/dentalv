<?php
/**
 * @file
 * fe_block_export.features.fe_block_boxes.inc
 */

/**
 * Implements hook_default_fe_block_boxes().
 */
function fe_block_export_default_fe_block_boxes() {
  $export = array();

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'block contacts';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'block_contacts';
  $fe_block_boxes->body = '<ul class="block-contacts">
<li>Адрес<ul><li>ул. Канатная, 85,</li><li>г.Одесса, 65000, Украина</li></ul></li>
<li>Телефоны<ul><li>+38 048 780-18-19</li><li>+38 048 725-33-55</li></ul></li>
<li>Режим работы<ul><li>Пн-Пт: с 9:00 до 20:00</li><li>Сб: с 10:00 до 18:00</li><li>Вс: выходной</li></ul></li>
<li>Електронная почта<ul><li><a href="#"><span class="link link_green link_bordered_green">info@dental-clinic.od</span></a></li>
<li><a href="#"><span class="link link_green link_bordered_green">uanikadent@ukr.net</span></a></li></ul></li>
</ul>';

  $export['block_contacts'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'not found 404';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'not_found_404';
  $fe_block_boxes->body = 'Page not found';

  $export['not_found_404'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Standard clinics block';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'standard_clinics';
  $fe_block_boxes->body = '<h3>Standard clinics</h3>

<p>Nibh nulla pala quibus ulciscor vulpes. Autem duis humo jumentum qui. 
Esca fere gravis ideo oppeto quadrum tation vereor vindico volutpat.
 Amet aptent brevitas caecus commoveo consequat mos populus si tincidunt.
 Dolus duis inhibeo iusto patria praesent proprius uxor velit vereor.</p>';

  $export['standard_clinics'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Transport list';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'transport_list';
  $fe_block_boxes->body = '<div class="get-direcrions-block">
<h4 class="directions-heading">Вы можете добраться к нам таким транспортом:</h4>
<div class="transport-type-pair">
<sapn class="icon-bus"></sapn>
<h6 class="type-name">Маршрутка</h6>
</div>
<ul class="transport-list transport-list_yellow">
<li class="transport-item"><span>9</span></li>
<li class="transport-item"><span>137</span></li>
<li class="transport-item"><span>185</span></li>
<li class="transport-item"><span>208</span></li>
<li class="transport-item"><span>127</span></li>
<li class="transport-item"><span>175</span></li>
<li class="transport-item"><span>210</span></li>
<li class="transport-item"><span>223</span></li>
<li class="transport-item"><span>242</span></li>
</ul>
<div class="transport-type-pair">
<sapn class="icon-troll"></sapn>
<h6 class="type-name">Тролейбус</h6>
</div>
<ul class="transport-list transport-list_gray">
<li class="transport-item">
<span>5</span>
</li>
<li class="transport-item">
<span>7</span>
</li>
<li class="transport-item">
<span>9</span>
</li>
</ul>
<div class="transport-type-pair">
<sapn class="icon-tram"></sapn>
<h6 class="type-name">Трамвай</h6>
</div>
<ul class="transport-list transport-list_blue">
<li class="transport-item">
<span>17</span>
</li>
<li class="transport-item">
<span>18</span>
</li>
</ul>
</div>';

  $export['transport_list'] = $fe_block_boxes;

  return $export;
}
