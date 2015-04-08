Rails.application.routes.draw do
  root to: "sessions#new"

  resources :users, only: [:show, :new, :create]
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :rides, only: [:index, :show]
  end
end
