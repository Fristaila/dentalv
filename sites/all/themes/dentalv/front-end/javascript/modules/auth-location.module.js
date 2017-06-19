import $ from 'jquery';

$(() => {
  const authLocation = (() => {
    // cache the DOM
    const $loggedIn      = $('.logged-in');
    const commentService = require('./modals/comment-modal.module');


    if (localStorage.getItem('logged') === null) {
      localStorage.setItem('logged', '1930');
    }

    if ($loggedIn.length > 0) {
      if (localStorage.getItem('logged') === '1930') {
        commentService();
        localStorage.setItem('logged', 'no');
      }
    } else {
      localStorage.removeItem('logged');
    }
  })();
});
