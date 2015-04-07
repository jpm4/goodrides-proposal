Rails.application.routes.draw do
  get 'rides/show'

  get 'rides/index'

  root to: "sessions#new"

  resources :users
  resource :session
  resources :rides
end
