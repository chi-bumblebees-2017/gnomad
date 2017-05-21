Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'

  resources :users, only: [:create, :update, :show, :new]
  resources :sessions, only: [:destroy]

  get '/auth/:provider/callback', to: 'sessions#create'
end
