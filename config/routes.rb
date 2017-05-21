Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'

  # root 'conversations#index'

  get "/users/:id/conversations" => "conversations#index"
  get "/conversations/:id" => "conversations#show"
  post "/conversations/:id/personal_messages" => "personal_messages#create"

end
