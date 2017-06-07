class UsersController < ApplicationController
  # TODO: add line below back in once we add back this before action. commented out for now in development/test mode.
  skip_before_action :authorize_request, only: [:create]
  def create
    user = User.from_oauth(user_params)
    session[:user_id] = user.id
    request.cookie_jar.signed[:user_id] = user.id
    auth_token = JsonWebToken.encode(user_id: user.id)
    # p auth_token
    json_response(auth_token: auth_token)
  end

  def update
    if current_user.id == params[:id].to_i
      user = User.find(params[:id])
      user.update_attributes(home_city: profile_params[:city], home_state: profile_params[:state], bio: profile_params[:user_bio])
      if profile_params[:localhost_profile] == "true"
        user.localhost_profile = LocalhostProfile.create(profile_params[:localhost_pref].merge(suggestions: profile_params[:suggestions], available: true))
      end

      if profile_params[:gnomad_profile] == "true"
        user.gnomad_profile = GnomadProfile.create(profile_params[:gnomad_pref])
      end
      render json: {first_name: user.first_name.downcase, id: user.id}
    else
      raise(ExceptionHandler::MissingToken, Message.invalid_credentials)
    end
  end

  def show
    if params[:id] == "a"
      user = current_user
    else
      user = User.find(params[:id])
      starred = current_user.starred?(user) ? true : false
      blocked = user.blocked?(current_user) ? true : false
    end

    if user.localhost_profile
      suggestions = user.localhost_profile.suggestions
    else
      suggestions = nil
    end
    if user != current_user
      conversation = Conversation.between(user, current_user).first
    end
    render json: { user: user, travel_interests: user.interests_while_traveling, host_interests: user.interests_while_hosting, suggestions: suggestions, bio: user.bio, starred: starred, star_count: user.star_count, conversation: conversation, blocked: blocked}
  end

  private
  def user_params
    params.permit(:first_name, :last_name, :uid, :email, :image_url)
  end

  def profile_params
    params.require(:profile_data).permit(:values, :city, :state, :user_bio, :gnomad_profile, :localhost_profile, :suggestions, gnomad_pref: [:restaurants, :sports, :museums, :bars, :music, :outdoors, :art, :fitness, :architecture, :family_fun, :zoo, :culture, :volunteer, :shopping], localhost_pref: [:restaurants, :sports, :museums, :bars, :music, :outdoors, :art, :fitness, :architecture, :family_fun, :zoo, :culture, :volunteer, :shopping])
  end
end
