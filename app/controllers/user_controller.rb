class UserController < ApplicationController
  protect_from_forgery prepend: true

  include GetUserScore
  def dashboard
    @web_view = true if params[:device].eql? 'web'
    @mob_view = true if params[:device].eql? 'mobile'
    @user_scores = UserScore.where(:user_id => params[:user_id])
    @user_physical_scores = get_user_physical_aspect_scores(@user_scores)
    @user_nutrition_scores = get_user_nutrition_aspect_scores(@user_scores)
    @user_mental_scores = get_user_mental_aspect_scores(@user_scores)
  end
end