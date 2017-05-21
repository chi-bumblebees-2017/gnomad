class LocalhostProfile < ApplicationRecord
  belongs_to :user, optional: true
end
