Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'

  get '/users' => "users#search"
  resources :users, only: [:create, :update, :show]
  resources :sessions, only: [:destroy]

  get '/auth/:provider/callback', to: 'sessions#create'
end
