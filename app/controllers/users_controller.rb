class UsersController < ApplicationController
  # TODO: add line below back in once we add back this before action. commented out for now in development/test mode.
  skip_before_action :authorize_request, only: [:create]

  def search
    location = params[:location].split(", ")
    city = location.first
    state = location.last
    @matches = User.localhosts.from_location(city, state).likes_any(current_user.interests_while_traveling)
    render json: @matches
  end

  def create
    user = User.from_oauth(user_params)
    session[:user_id] = user.id
    request.cookie_jar.signed[:user_id] = user.id
    auth_token = JsonWebToken.encode(user_id: user.id)
    # p auth_token
    json_response(auth_token: auth_token)
  end

  def update
  end

  def show
    user = User.find(params[:id])
    if user.localhost_profile
      suggestions = user.localhost_profile.suggestions
    else
      suggestions = nil
    end
    render json: { user: user, travel_interests: user.interests_while_traveling, host_interests: user.interests_while_hosting, suggestions: suggestions}
  end

  private
  def user_params
    params.permit(:first_name, :last_name, :uid, :email, :image_url)
  end
end
