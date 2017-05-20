class User < ApplicationRecord
  has_many :initiated_conversations, class_name: 'Conversation', foreign_key: 'initiator_id'
  has_many :received_conversations, class_name: 'Conversation', foreign_key: 'received_id'
  has_many :personal_messages, dependent: :destroy


end
