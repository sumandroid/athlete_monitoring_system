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