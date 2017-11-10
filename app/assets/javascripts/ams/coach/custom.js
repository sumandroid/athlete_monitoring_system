/************ score submit form assessment select dropdown *************/
{
  $(document).on('change', 'select.coach_assessment_select_dropdown', function () {
    var self = $(this);
    if(self.val() == 'physical'){
      self.closest('form').find('select.coach_attribute_select_dropdown').html('');
      self.closest('form').find('select.coach_attribute_select_dropdown').html('<option value="agility" selected>Agility</option>\n' + '<option value="balance">Balance</option>\n' +'<option value="endurance">Endurance</option>\n' +'<option value="flexibility">Flexibility</option>\n' +'<option value="speed">Speed</option>');
    }
    if(self.val() == 'mental'){
      self.closest('form').find('select.coach_attribute_select_dropdown').html('');
      self.closest('form').find('select.coach_attribute_select_dropdown').html('<option value="attention_control" selected>Attention Control</option>\n' + '<option value="negative_energy_control">Negative Energy Control</option>\n' +'<option value="Positive Energy Control">Positive Energy Control</option>\n' +'<option value="motivation_level">Motivation Level</option>\n' +'<option value="attitude_control">Attitude Control</option>');
    }
    if(self.val() == 'nutrition'){
      self.closest('form').find('select.coach_attribute_select_dropdown').html('');
      self.closest('form').find('select.coach_attribute_select_dropdown').html('<option value="calories" selected>Calories</option>\n' + '<option value="carbohydrates">Carbohydrates</option>\n' +'<option value="protein">Protein</option>\n' +'<option value="fibre">Fibre</option>\n' +'<option value="vitamins_and_minerals">Vitamins and Minerals</option>');
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
        'justify-content' : 'space-around'
      });
      $('.score-input-parent .score-input').css({
        'width' : '180px'
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
