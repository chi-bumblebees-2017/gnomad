class UsersController < ApplicationController
  skip_before_action :authorize_request, only: [:create, :new]

  def create
    user = User.from_oauth(user_params)
    session[:user_id] = user.id
    auth_token = JsonWebToken.encode(user_id: user.id)
    p auth_token
    json_response(auth_token: auth_token)
  end

  def update
  end

  def show
  end

  def new
  end

  private
  def user_params
    params.permit(:first_name, :last_name, :uid, :email, :image_url)
  end
end
