

import $ from "jquery";

require('../bower_components/fitvids/jquery.fitvids');
require('../bower_components/waitForImages/dist/jquery.waitforimages');
require('../utils/pretty-embed');



$(()=>{
  const videoModule = (()=>{
    "use strict";


        // $().prettyEmbed({ useFitVids: true });
        $('.player').prettyEmbed({
            videoID: 'PsVUHOCvJ_4',
            // previewSize: 'hd',				// use either this option...
            // customPreviewImage: '',			// ...or this option
            // Embed controls
            showInfo: false,
            showControls: false,
            loop: false,

            colorScheme: 'dark',
            showRelated: false,

            useFitVids: true
        });
  })()
})