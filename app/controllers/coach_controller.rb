class CoachController < ApplicationController
  protect_from_forgery prepend: true

  def dashboard
    @web_view = true if params[:device].eql? 'web'
    @mob_view = true if params[:device].eql? 'mobile'
  end
end