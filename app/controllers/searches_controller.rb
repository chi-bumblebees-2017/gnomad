class SearchesController < ApplicationController
  def search
    location = search_params[:location].split(", ")
    p search_params[:likes_list][:art]
    city = location.first
    state = location.last
    localhosts =  User.localhosts.from_location(city, state)

    likes = []
    if (search_params[:likes_list][:art] == "undefined")
      likes = current_user.interests_while_traveling
    else
      likes = search_params[:likes_list].select { |like, bool| bool == "true" }
      likes = likes.keys.map(&:to_sym)
    end

    if search_params[:likes_all] == "true"
      @matches = localhosts.likes_all(likes)
    else
      @matches = localhosts.likes_any(likes)
    end
    render json: { matches: @matches, likes: likes.map {|i| [i,true] }.to_h }
  end

  private
  def search_params
    params.require(:searching).permit(:likes_all, :location, likes_list: [:restaurants, :sports, :museums, :bars, :music, :outdoors, :art, :fitness, :architecture, :family_fun, :zoo, :culture, :volunteer, :shopping, :history])
  end
end
