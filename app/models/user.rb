class User < ApplicationRecord
  POSSIBLE_INTERESTS = [:restaurants, :sports, :museums, :bars, :music, :outdoors, :art, :fitness, :history, :architecture, :family_fun, :zoo, :culture, :volunteer, :shopping]

  has_many :initiated_conversations, class_name: 'Conversation', foreign_key: 'initiator_id'
  has_many :received_conversations, class_name: 'Conversation', foreign_key: 'received_id'
  has_many :personal_messages, dependent: :destroy
  # make models for and add associations to localhost or gnomad profiles
  has_one :gnomad_profile
  has_one :localhost_profile

  has_many :sent_stars, class_name: 'Star', foreign_key: 'sender_id'
  has_many :received_stars, class_name: 'Star', foreign_key: 'recipient_id'
  scope :popular, -> {order("star_count DESC")}

  scope :from_location, ->(city, state) { where(home_city: city, home_state: state) }
  delegate :available, :suggestions, to: :localhost_profile, allow_nil: true
  scope :available, -> { joins(:localhost_profile).where(available: true) }
  scope :localhosts, -> { joins(:localhost_profile) }
  scope :gnomads, -> { joins(:gnomad_profile) }
  # TODO: refactor this algorithm scoping
  scope :likes_any, ->(interests) { where("restaurants = :restaurants OR sports = :sports OR museums = :museums OR bars = :bars OR music = :music OR outdoors = :outdoors OR art = :art OR fitness = :fitness OR history = :history OR architecture = :architecture OR family_fun = :family_fun OR zoo = :zoo OR culture = :culture OR volunteer = :volunteer OR shopping = :shopping", interests_hash(interests)) }

  # TODO: refactor this helper method along with the algorithm scoping
  def self.interests_hash(interests)
    results_hash = POSSIBLE_INTERESTS.map {|i| [i,nil] }.to_h
    interests.each do |interest|
      results_hash[interest] = true
    end
    results_hash
  end

  def self.from_oauth(user_params)
    user = User.find_or_create_by(uid: user_params[:uid], provider: "facebook")
    user.first_name ||= user_params[:first_name]
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

  def interests_while_traveling
    POSSIBLE_INTERESTS.select do |interest|
      gnomad_profile.try(interest)
    end
  end

  def interests_while_hosting
    POSSIBLE_INTERESTS.select do |interest|
      localhost_profile.try(interest)
    end
  end

  def send_star(recipient)
    star = recipient.received_stars.create(sender: self)
    recipient.star_count += 1
    star
  end

  def starred?(recipient)
    !(self.sent_stars.where(recipient_id: recipient.id).empty?)
  end
end
