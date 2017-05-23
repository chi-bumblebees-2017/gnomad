class UsersController < ApplicationController
  def search
    p search_params
    location = params[:location].split(", ")
    city = location.first
    state = location.last
    @matches = User.localhosts.from_location(city, state).likes_any(current_user.interests_while_traveling)
    render json: @matches
  end
end
