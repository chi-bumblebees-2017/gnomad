Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server => '/cable'
  root 'home#index'

  # root 'conversations#index'
  get '/users' => "users#search"
  get "/conversations" => "conversations#index"
  post "/conversations" => "conversations#create"
  get "/conversations/:id" => "conversations#show"
  post "/conversations/:id/personal_messages" => "personal_messages#create"
  delete "/sessions" => "sessions#destroy"

  resources :stars, only: [:create]
  delete '/stars' => 'stars#destroy'
  resources :users, only: [:create, :update, :show]
  resources :sessions, only: [:destroy]

  get '/auth/:provider/callback', to: 'sessions#create'
  get '*path' => 'home#index'
end
