class UserScore < ApplicationRecord

  def self.submit_user_score(params)
    params[:aspect_scores].values.each do |map|
      user_score = self.new({
                             :user_id => params[:user_id],
                             :assessment => params[:assessment],
                             :aspect => map.keys.first,
                             :score => map.values.first,
                             :assessment_date => params[:assessment_date]
                            })
      user_score.save
    end
    return true
  end
end
