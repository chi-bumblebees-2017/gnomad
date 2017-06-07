 FactoryGirl.define do
  factory :conversation do 
    association :initiator, factory: :user
    association :receiver, factory: :user
  end
end