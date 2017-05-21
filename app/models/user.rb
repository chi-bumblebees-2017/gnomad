class User < ApplicationRecord
  has_many :initiated_conversations, class_name: 'Conversation', foreign_key: 'initiator_id'
  has_many :received_conversations, class_name: 'Conversation', foreign_key: 'received_id'
  has_many :personal_messages, dependent: :destroy

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
end
