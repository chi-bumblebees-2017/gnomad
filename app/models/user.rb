class User < ApplicationRecord
  # make models for and add associations to localhost or gnomad profiles
  has_one :gnomad_profile
  has_one :localhost_profile
  scope :from_location, ->(city, state) { where(home_city: city, home_state: state) }
  delegate :available, :suggestions, to: :localhost_profile, allow_nil: true
  scope :available, -> { where(available: true) }
  # make these scopes work, using delegate to pass profile booleans that this user owns
  # scope :as_traveler
  # scope :likes_any_while_traveling, ->(interests) { where("")}
  # scope :likes_any_while_hosting, ->(interests) { joins(:localhost_profile).where("restaurants = :restaurants OR sports = :sports OR museums = :museums OR bars = :bars OR music = :music OR outdoors = :outdoors OR art = :art OR fitness = :fitness OR history = :history OR architecture = :architecture OR family_fun = :family_fun OR zoo = :zoo OR culture = :culture OR volunteer = :volunteer OR shopping = :shopping", ) }
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
