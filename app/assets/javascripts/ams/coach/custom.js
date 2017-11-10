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
  });
}

/************ Card animation script ************/

$(function () {
  var card_height = $('.card').height();
  $('#view_data_form').on('click', function () {
    var self = $(this);
    var container_animating = self.closest('.animate_container');
    var add_data_card = $('.add_data_card')
    var view_data_card = $('.view_data_card');
    if (container_animating.hasClass('make-flex')) {
      container_animating.removeClass('make-flex');
      self.closest('.add_data_card').removeClass('col-sm-6');
      $('.view_data_card').removeClass('col-sm-6');
      $('.view_data_card').addClass('position-absolute');
      view_data_card.css({
        'position': 'absolute',
        'top': '0',
        'right': '0'
      });
      container_animating.css({
        'position': 'relative'
      });
      add_data_card.css({
        'position': 'absolute'
      });
      $('.add_data_card .data-card').css({
        'border': 'none'
      });
      $('.add_data_card').css({
        'border': '1px solid rgba(0,0,0,.125)'
      });
      add_data_card.animate({
        'top': card_height + 15,
        'width': '100%',
        'height': '560px'
      });
      $('.form-container').removeClass('d-none');
      view_data_card.animate({
        'width': '100%'
      });
      $('.score-input-parent').css({
        'justify-content': 'space-around'
      });
      $('.score-input-parent .score-input').css({
        'width': '180px'
      });
      view_data_card.addClass('view-shrink');
    }
  });

  $('#view_data_athlete').on('click', function () {
    var self = $(this);
    var container_animating = self.closest('.animate_container');
    var add_data_card = $('.add_data_card')
    var view_data_card = $('.view_data_card');
    if ($('.view_data_card').hasClass('view-shrink')) {
      view_data_card.removeClass('view-shrink');
      view_data_card.css({
        'width': 'unset'
      });
      $('.form-container').addClass('d-none')
      add_data_card.animate({
        'top': 0,
        'width': '100%',
        'height': card_height
      });

      $('.add_data_card .data-card').css({
        'border': '1px solid rgba(0,0,0,.125)'
      });

      $('.view_data_card .data-card').css({
        'border': 'none'
      });

      view_data_card.css({
        'border': '1px solid rgba(0,0,0,.125)'
      });

      view_data_card.css({
        'top': card_height + 15,
        'width': '100%',
        'height': '630px'
      });
      add_data_card.addClass('view-shrink');
    }
  })
});


/**************** user data form submit form **************/
{
  $(document).on('click', '.user_data_submit_button', function (e) {
    e.preventDefault();
    var form = $(this).closest('form');
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
      data: {user_id: user_id, assessment: assessment, aspect_scores: aspect_scores, assessment_date: assessment_date},
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
  });
}
