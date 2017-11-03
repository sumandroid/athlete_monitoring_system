Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #login routes
  match 'ams/login'                       => 'authentication#login',              :via => [:get],     :as => :login
end
