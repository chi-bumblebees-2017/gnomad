class UsersController < ApplicationController
  def create
    user = User.from_oauth(userjson)
    session[:user_id] = user.id
    render json: user
  end

  def update
  end

  def show
  end
end
