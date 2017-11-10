class CoachController < ApplicationController
  protect_from_forgery prepend: true

  def dashboard
    @web_view = true if params[:device].eql? 'web'
    @mob_view = true if params[:device].eql? 'mobile'
    @users = User.all
  end

  def submit_user_score
    raise 'user id is missing' unless params[:user_id].present?
    user_score_submitted = UserScore.submit_user_score(params)
    render :json => {:status => 'success', :msg => 'user score submitted successfully', :url => coach_dashboard_path(:device => 'web')} if user_score_submitted
    render :json => {:status => 'error', :msg => 'There is some error while submitting the user score', :url => coach_dashboard_path(:device => 'web')} if not user_score_submitted
  end
end