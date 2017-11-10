Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #login routes
  match 'login'                       => 'authentication#login',              :via => [:get],     :as => :login
  match 'login-verify'                => 'authentication#verify_login',       :via => [:post],     :as => :login_verify


  #user routes
  match 'user/dashboard/(:device)'         => 'user#dashboard',                :via => [:get],     :as => :user_dashboard

  #coach_routes
  match 'coach/dashboard/(:device)'         => 'coach#dashboard',               :via => [:get],     :as => :coach_dashboard
  match 'coach/submit_user_score'           => 'coach#submit_user_score',       :via => [:post],    :as => :coach_submit_user_score
end
