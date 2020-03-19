Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :v1 do
    resources :posts
  end

  get '/signed_out' => 'home#signed_out'
  root 'home#index'
end
