class AuthenticationController < ApplicationController
  protect_from_forgery prepend: true

  def login

  end

  def verify_login
    type = (params[:athlete].eql? 'on') ? 0 : ((params[:coach].eql? 'on') ? 1 : ((params[:admin].eql? 'on') ? 2 : '' ))
    user = User.find_by_email_and_password_and_user_type(params[:email], params[:password], type)
    redirect_to user_dashboard_path(:device => params[:device], :user_id => user.id) if user.present? and user.user_type.eql? 0
    redirect_to coach_dashboard_path(:device => params[:device], :user_id => user.id) if user.present? and user.user_type.eql? 1

  end
end
