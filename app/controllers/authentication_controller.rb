class AuthenticationController < ApplicationController
  protect_from_forgery prepend: true

  def login

  end

  def verify_login
    user = User.find_by_email_and_password(params[:email], params[:password])
    redirect_to user_dashboard_path(:device => params[:device]) if user.present?
  end
end
