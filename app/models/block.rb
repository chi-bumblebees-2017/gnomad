class Block < ApplicationRecord
  belongs_to :reporter, class_name: 'User'
  belongs_to :offender, class_name: 'User'
end
