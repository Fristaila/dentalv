<?php

  $video_title = t('Video about clinic');
//Видео о&nbsp;клинике
?>

<section class="video-about player-wrapper">
  <div id="mainVideo" class="pretty-embed player" data-pe-videoid="<?php print $video_id ?>" ></div>
  <div class="video-text my-trigger">
    <span class="icon-play"></span>
    <span class="text"><?php print $video_title; ?></span>
  </div>
</section>
