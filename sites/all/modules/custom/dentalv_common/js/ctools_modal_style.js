
Drupal.theme.prototype.dentavl_popup_template = function () {
  // var html = '';
  // html += '  <div id="ctools-modal">';
  // html += '  <div class="modal">';
  // html += '  <div class="form-inner">';
  //
  // html += '        <a class="close test-close" href="#">';
  // // html +=            Drupal.CTools.Modal.currentSettings.closeText + Drupal.CTools.Modal.currentSettings.closeImage;
  // html += '        </a>';
  // html += '    <div class="ctools-modal-content">' // panels-modal-content
  // // html += '      <div class="modal-header">';
  // html += '        <h3><span id="modal-title" class="modal-title"> </span></h3>';
  // // html += '      </div>';
  // html += '      <div id="modal-content" class="modal-content">';
  // html += '      </div>';
  // html += '      </div>';
  // html += '    </div>';
  // html += '  </div>';
  // return html;

  var html = ''
  html += '  <div id="ctools-modal">'
  html += '    <div class="ctools-modal-content">' // panels-modal-content
  html += '      <div class="modal-header">';
  html += '        <a class="close" href="#">';
  html +=            Drupal.CTools.Modal.currentSettings.closeText + Drupal.CTools.Modal.currentSettings.closeImage;
  html += '        </a>';
  html += '        <span id="modal-title" class="modal-title"> </span>';
  html += '      </div>';
  html += '      <div id="modal-content" class="modal-content">';
  html += '      </div>';
  html += '    </div>';
  html += '  </div>';
  return html;
}