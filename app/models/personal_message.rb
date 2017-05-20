class PersonalMessage < ApplicationRecord
  belongs_to :conversation
  belongs_to :author, class_name: "User"


  validates :body, presence: true
end
