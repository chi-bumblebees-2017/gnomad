class SearchesController < ApplicationController
  def search
    p "***********"
    p search_params
    p "++++++++++++"
    p search_params[:likes_list]
    p search_params[:likes_all]
    location = params[:location].split(", ")
    city = location.first
    state = location.last
    @matches = User.localhosts.from_location(city, state).likes_any(current_user.interests_while_traveling)
    render json: @matches
  end

  private
  def search_params
    params.require(:searching).permit(:likes_all, likes_list: [:restaurants, :sports, :museums, :bars, :music, :outdoors, :art, :fitness, :architecture, :family_fun, :zoo, :culture, :volunteer, :shopping, :history])
  end
end
