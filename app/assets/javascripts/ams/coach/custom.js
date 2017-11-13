/************ score submit form assessment select dropdown *************/
{
  $(document).on('change', 'select.coach_assessment_select_dropdown', function () {
    var self = $(this);
    var form = self.closest('form');
    if (self.val() == 'physical') {
      form.find('div.physical_aspects_div').removeClass('d-none');
      form.find('div.mental_aspects_div').addClass('d-none');
      form.find('div.nutrition_aspects_div').addClass('d-none');

    }
    if (self.val() == 'mental') {
      form.find('div.physical_aspects_div').addClass('d-none');
      form.find('div.mental_aspects_div').removeClass('d-none');
      form.find('div.nutrition_aspects_div').addClass('d-none');
    }
    if (self.val() == 'nutrition') {
      form.find('div.physical_aspects_div').addClass('d-none');
      form.find('div.mental_aspects_div').addClass('d-none');
      form.find('div.nutrition_aspects_div').removeClass('d-none');
    }
    $('.score-input-parent input.form-control').css("border", "1px solid #f37736").animate({
      'borderWidth': '1px',
      'borderColor': '#f37736'
    }, 500);
    setTimeout(function () {
      $('.score-input-parent input.form-control').animate({
        'borderWidth': '1px',
        'borderColor': '1px solid rgba(0,0,0,.15)'
      }, 500).css("border", "1px solid rgba(0,0,0,.15)");
    }, 600)
  });
}

/************ Card animation script ************/

$(function () {
  if ($(window).width() <= 767) {
    $('.tab-content.coach-tab-mobile').css("height", "auto");
  }

  var card_height = $('.card').height();
  var card_width = $('.card').width();
  $('.view_data_form').on('click', function () {
    var self = $(this);
    var container_animating = self.closest('.animate_container');
    var add_data_card = $('.add_data_card')
    var view_data_card = $('.view_data_card');
    if (container_animating.hasClass('make-flex') === true) {
      container_animating.removeClass('make-flex');
      self.closest('.add_data_card').removeClass('col-sm-6');
      $('.view_data_card').removeClass('col-sm-6');
      $('.view_data_card').addClass('position-absolute');
      $('.add_data_card').addClass('position-absolute');
      view_data_card.css({
        'top': '0',
        'right': '0',
        'width': card_width
      });
      container_animating.css({
        'position': 'relative'
      });
      add_data_card.css({
        'width': card_width
      });
      $('.add_data_card .data-card').css({
        'border': '1px solid rgba(0,0,0,.325)'
      });
      $('.add_data_card').css({
        'border': 'none'
      });
      setTimeout(function () {
        add_data_card.animate({
          'top': card_height + 15
        }, 400, function () {
          add_data_card.animate({
            'width': '100%',
            'height': '600px'
          });
          view_data_card.animate({
            'width': '100%'
          }, 400, function () {
            $('.form-container').removeClass('d-none');
          });
        });
      }, 400);
      $('.score-input-parent').css({
        'justify-content': 'space-around'
      });
      $('.score-input-parent .score-input').css({
        'width': '180px'
      });
      view_data_card.addClass('view-shrink');
    }
  });

  $('.view_data_athlete').on('click', function () {
    var self = $(this);
    var container_animating = self.closest('.animate_container');
    var add_data_card = $('.add_data_card')
    var view_data_card = $('.view_data_card');
    if (container_animating.hasClass('make-flex') === true) {
      container_animating.removeClass('make-flex');
      self.closest('.view_data_card').removeClass('col-sm-6');
      $('.add_data_card').removeClass('col-sm-6');
      $('.add_data_card').addClass('position-absolute');
      $('.view_data_card').addClass('position-absolute');
      add_data_card.css({
        'width': card_width
      });
      container_animating.css({
        'position': 'relative'
      });
      view_data_card.css({
        'right': '0',
        'width': card_width
      });
      $('.view_data_card .data-card').css({
        'border': 'none'
      });
      $('.view_data_card').css({
        'border': '1px solid rgba(0,0,0,.325)'
      });
      // $('.form-container').removeClass('d-none');
      setTimeout(function () {
        view_data_card.animate({
          'top': card_height + 15
        }, 400, function () {
          view_data_card.animate({
            'width': '100%',
            'height': 'auto'
          });
          add_data_card.animate({
            'width': '100%'
          },400, function () {
            $('.athlete-list-container').removeClass('d-none');
          });
        });
      }, 400);
      add_data_card.addClass('view-shrink');
    }
  });

  $('.view_data_athlete').on('click', function () {
    var self = $(this);
    var container_animating = self.closest('.animate_container');
    var add_data_card = $('.add_data_card')
    var view_data_card = $('.view_data_card');
    if ($('.view_data_card').hasClass('view-shrink')) {
      view_data_card.removeClass('view-shrink');
      $('.form-container').animate({
        'opacity': 0
      });
      setTimeout(function () {
        add_data_card.animate({
          'height': card_height
        }, 400, function () {
          add_data_card.animate({
            'top': 0
          });
          $('.form-container').addClass('d-none');
        });
      }, 400);

      $('.add_data_card .data-card').css({
        'border-bottom': '1px solid rgba(0,0,0,.325)'
      });

      $('.view_data_card .data-card').css({
        'border-color': 'none'
      });

      // view_data_card.css({
      //   'border': '1px solid rgba(0,0,0,.325)'
      // });

      view_data_card.animate({
        'top': card_height + 15,
        'height': 'auto'
      },400, function () {
        setTimeout(function () {
          $('.athlete-list-container').css({
            'opacity': '0'
          });
          $('.athlete-list-container').removeClass('d-none');
          $('.athlete-list-container').animate({
            'opacity': 1
          }, 900)
        }, 400);
      });
      add_data_card.addClass('view-shrink');
    }
  });

  $('.view_data_form').on('click', function () {
    var self = $(this);
    var container_animating = self.closest('.animate_container');
    var add_data_card = $('.add_data_card')
    var view_data_card = $('.view_data_card');
    if ($('.add_data_card').hasClass('view-shrink')) {
      add_data_card.removeClass('view-shrink');
      view_data_card.animate({
        'height': card_height
      }, 400, function () {
        view_data_card.animate({
          'top': 0
        })
      });

      $('.view_data_card .data-card').css({
        'border-bottom': '1px solid rgba(0,0,0,.325)'
      });

      $('.add_data_card .data-card').css({
        'border': '1px solid rgba(0,0,0,.325)'
      });

      add_data_card.css({
        'border': 'none'
      });

      add_data_card.animate({
        'top': card_height + 15,
        'height': '600px'
      }, 400, function () {
        setTimeout(function () {
          $('.form-container').css({
            'opacity': '0'
          });
          $('.form-container').removeClass('d-none');
          $('.form-container').animate({
            'opacity': 1
          }, 900)
        }, 400);
      });
      view_data_card.addClass('view-shrink');
    }
  })
});


/**************** user data form submit form **************/
{
  $(document).on('click', '.user_data_submit_button', function (e) {
    e.preventDefault();
    var form = $(this).closest('form');
    var error = 0;
    var error_message = checkRequiredFields(form);
    if(error_message != ''){
      alert(error_message);
    }else{
      var user_id = form.find('.coach_student_select_dropdown').val();
      var assessment = form.find('.coach_assessment_select_dropdown').val();
      var assessment_date = form.find('input[name="assessment_date"]').val();
      if (assessment == 'physical') {
        var active_div = form.find('div.physical_aspects_div');
      }
      if (assessment == 'mental') {
        var active_div = form.find('div.mental_aspects_div');
      }
      if (assessment == 'nutrition') {
        var active_div = form.find('div.nutrition_aspects_div');
      }
      var aspect_scores = [];
      active_div.find('input[type="number"]').each(function () {
        var self = $(this);
        var name = self.attr('name');
        var score_obj = {};
        score_obj[name] = self.val();
        aspect_scores.push(score_obj);
      });
      $.ajax({
        url: form.attr('action'),
        type: 'post',
        dataType: 'json',
        data: {user_id: user_id, assessment: assessment, aspect_scores: aspect_scores, assessment_date: assessment_date, device: form.find('#ams_device').val()},
        error: function () {
          alert('There is some error, please try again later');
        },
        success: function (result) {
          if (result.status == 'success') {
            alert(result.msg);
            window.location.href = result.url;
          }
          else {
            alert(result.msg);
            window.location.href = result.url;
          }

        }
      })
    }
  });
}


/****** FUNCTION TO Check the REQUIRED FIELDS *****/
{
  function checkRequiredFields(form) {
    var errorMessage = "";
    form.find('.required-field').each(function () {
      if ($(this).val().trim() == "" && !$(this).closest('div.student-analysis').parent('div').hasClass("d-none")) {
        errorMessage += ($(this).attr('fieldDisplayName') ? $(this).attr('fieldDisplayName') : $(this).attr('name')) + " can't be blank.\n";
      }
    });
    return errorMessage;
  }
}

