class Conversation < ApplicationRecord
  belongs_to :initiator, class_name: 'User'
  belongs_to :receiver, class_name: 'User'
  has_many :personal_messages, -> { order(created_at: :asc) }, dependent: :destroy

  validates :initiator, uniqueness: {scope: :receiver}

  scope :participating, -> (user) do
    where("(conversations.initiator_id = ? OR conversations.receiver_id = ?)", user.id, user.id)
  end

  scope :between, -> (sender_id, receiver_id) do
    where(initiator_id: sender_id, receiver_id: receiver_id).or(where(initiator_id: receiver_id, receiver_id: sender_id)).limit(1)
  end

  def last_message
    personal_messages.last
  end

  def last_snippet(limit = 100)
    personal_messages.last.body[0..limit]
  end

  def with(current_user)
    initiator == current_user ? receiver : initiator
  end
  # def participates?(user)
  #   initiator == user || receiver == user
  # end
end
