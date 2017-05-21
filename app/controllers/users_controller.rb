class UsersController < ApplicationController
  def create
    user = User.from_oauth(user_params)
    session[:user_id] = user.id
    render json: user
  end

  def update
  end

  def show
  end

  private
  def user_params
    params.permit(:first_name, :last_name, :uid, :email, :image_url)
  end
end
