class User < ApplicationRecord
  # make models for and add associations to localhost or gnomad profiles
  scope :from, ->(city, state) { where(home_city: city, home_state: state) }
  # make these scopes work, using delegate to pass profile booleans that this user owns
  # e.g.   delegate :bars, :museums, to: :user, prefix: true
  # scope :available, { where()}
  # scope :likes_any, ->(interests) { where("")}
  def self.from_oauth(user_params)
    user = User.find_or_create_by(uid: user_params[:uid], provider: "facebook")
    user.first_name ||= user_params["first_name"]
    user.last_name ||= user_params[:last_name]
    user.email ||= user_params[:email]
    user.image_url ||= user_params[:image_url]
    user.uid ||= user_params[:uid]
    user.save
    user
  end

  def location
    "#{home_city}, #{home_state}"
  end


end
