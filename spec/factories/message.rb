FactoryGirl.define do
  factory :personal_message do 
  	association :conversation, factory: :conversation, strategy: :build
  	association :author, factory: :user
  	body { Faker::HarryPotter.quote }
  end
end