module GetUserScore
  extend ActiveSupport::Concern

  def get_user_physical_aspect_scores(score_collection)
    user_scores = score_collection.where(:assessment => 'physical').group_by {|m| m.aspect }
  end

  def get_user_nutrition_aspect_scores(score_collection)
    user_scores = score_collection.where(:assessment => 'nutrition').group_by {|m| m.aspect }
  end

  def get_user_mental_aspect_scores(score_collection)
    user_scores = score_collection.where(:assessment => 'mental').group_by {|m| m.aspect }
  end

end