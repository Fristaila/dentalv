/* Implement custom javascript here */
(function($, Drupal) {
  Drupal.behaviors.dentalv_main_script = {
    attach:function(context, settings) {
        $(document).ready(function () {
          // webform-cur

          $('.feedback-submit').click(function(){
            if ($('input[name="submitted[name_feedback]"]').val().length != 0 &&
              $('input[name="submitted[phone_or_email_feedback]"]').val().length != 0
              &&  $('input[name="submitted[message_feedback]"]').val().length != 0){
              $('#feedback-form').style.display="none";
            }
          });

          $(function() {
            var feedback_cookie = 'success_feedback';

            if ($.cookie(feedback_cookie) != null) {
              $.cookie(feedback_cookie, "0", {path: '/', expires: -10});
              $('#feedback .form-wrap').hide();
              $('#feedback .thanx-block').show();
            }
          });

          $('#header-apointment').click(function () {
            $("#doctorWhoAppiontment .doctor-who-list").show();
            $("#doctorWhoAppiontment .doctor-who-divider").show();
          });
          $('#current-doctor-appointment').click(function () {
            $("#doctorWhoAppiontment .doctor-who-list").hide();
            $("#doctorWhoAppiontment .doctor-who-divider").hide();
          });
          $('#current-doctor-comment').click(function () {
            $('.modal-comment .doctor-who-wrap ').hide();
          });
          // var focus = 0;
          // $("#edit-submitted-what-is-your-name").focusout(function() {
          //     focus++;
          //     if (this).value
          //     console.log(focus);
          //     // $("#edit-submitted-email").text( focus + "x" );
          //   })

          $('#current-doctor-appointment').click(function () {
            $('#edit-choosen-doctors .form-item:first-child').addClass('active');
          });

          $('#doctorWhoAppiontment').each(function(){
            var form = $(this),
              btn = form.find('.doctor-who-divider'),
              btn2 = form.find('.form-btn'),
              // dc = form.find('.form-type-radio');
              dcradio = form.find('#edit-choosen-doctors');

            form.find('.form-text').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput(){
              form.find('.form-text').each(function(){
                if($(this).val() != ''){
                  $(this).removeClass('empty_field');
                } else {
                  $(this).addClass('empty_field');
                }
              });
            }

            setInterval(function(){
              checkInput();
              var sizeEmpty = form.find('.empty_field').size(),
                sizeRadio = dcradio.find('.active').size();
              if(sizeEmpty > 0){
                if(btn.hasClass('disabled')){
                  return false
                } else {
                  btn.removeClass('success');
                  btn2.removeClass('success');
                  btn.addClass('disabled')
                }
              } else if(sizeRadio > 0) {
                btn.removeClass('disabled');
                btn.addClass('success');
                btn2.addClass('success')
              }
            },500);

            btn.click(function(){
              if($(this).hasClass('disabled')){
                lightEmpty();
                return false
              } else {
                form.submit();
              }
            });

          });

          $('.all-doctors-comment').each(function(){
            var form = $(this),
              btn = form.find('.doctor-who-divider'),
              btn2 = form.find('.form-btn'),
              dcradio = form.find('#edit-submitted-doctors');

            form.find('.form-textarea').addClass('empty_field');

            function checkInput(){
              form.find('.form-textarea').each(function(){
                if($(this).val() != ''){
                  $(this).removeClass('empty_field');
                } else {
                  $(this).addClass('empty_field');
                }
              });
            }

            setInterval(function(){
              checkInput();
              var sizeEmpty = form.find('.empty_field').size(),
                sizeRadio = dcradio.find('.active').size();
              if(sizeEmpty > 0){
                if(btn.hasClass('disabled')){
                  return false
                } else {
                  btn.removeClass('success');
                  btn2.removeClass('success');
                  btn.addClass('disabled')
                }
              } else if(sizeRadio > 0) {
                btn.removeClass('disabled');
                btn.addClass('success');
                btn2.addClass('success')
              }
            },500);

            btn.click(function(){
              if($(this).hasClass('disabled')){
                lightEmpty();
                return false
              } else {
                form.submit();
              }
            });

          });

          // current-doctor-comment
          $('.current-doctor-comment').each(function(){
            var form = $(this),
              btn = form.find('.form-btn');
            form.find('.form-textarea').addClass('empty_field');

            function checkInput(){
              form.find('.form-textarea').each(function(){
                if($(this).val() != ''){
                  $(this).removeClass('empty_field');
                } else {
                  $(this).addClass('empty_field');
                }
              });
            }

            setInterval(function(){
              checkInput();
              var sizeEmpty = form.find('.empty_field').size();
              if(sizeEmpty > 0){
                if(btn.hasClass('dis')){
                  return false
                } else {
                  btn.removeClass('success');
                  // btn2.removeClass('success');
                  btn.addClass('dis')
                }
              } else {
                btn.removeClass('dis');
                btn.addClass('success');
                // btn2.addClass('success')
              }
            },500);

            btn.click(function(){
              if($(this).hasClass('dis')){
                lightEmpty();
                return false
              } else {
                form.submit();
              }
            });

          });

          $('#feedback-form').each(function(){
            var form = $(this),
              btn = form.find('.form-submit');

            form.find('.required').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput(){
              form.find('.required').each(function(){
                if($(this).val() != ''){
                  $(this).removeClass('empty_field');
                } else {
                  $(this).addClass('empty_field');
                }
              });
            }

            setInterval(function(){
              checkInput();
              var sizeEmpty = form.find('.empty_field').size();
              if(sizeEmpty > 0){
                if(btn.hasClass('disabled')){
                  return false
                } else {
                  btn.removeClass('feedback-btn');
                  btn.addClass('disabled')
                }
              } else {
                btn.removeClass('disabled');
                btn.addClass('feedback-btn');
              }
            },500);

            btn.click(function(){
              if($(this).hasClass('disabled')){
                lightEmpty();
                return false
              } else {
                form.submit();
              }
            });

          });

          $('#feedBack').each(function(){
            var form = $(this),
              btn = form.find('.form-submit');
            btn.addClass('form-btn');

            form.find('.required').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput(){
              form.find('.required').each(function(){
                if($(this).val() != ''){
                  $(this).removeClass('empty_field');
                } else {
                  $(this).addClass('empty_field');
                }
              });
            }

            setInterval(function(){
              checkInput();
              var sizeEmpty = form.find('.empty_field').size();
              if(sizeEmpty > 0){
                if(btn.hasClass('disabled')){
                  return false
                } else {
                  btn.removeClass('success');
                  btn.addClass('disabled')
                }
              } else {
                btn.removeClass('disabled');
                btn.addClass('success');
              }
            },500);

            btn.click(function(){
              if($(this).hasClass('disabled')){
                lightEmpty();
                return false
              } else {
                form.submit();
              }
            });

          });

        });

    }
  };
}(jQuery, Drupal));