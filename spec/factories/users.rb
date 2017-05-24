# FactoryGirl.define do
#   factory :user do
#     provider  'facebook'
#     uid { Faker::Number.hexadecimal(5) }
#     first_name { Faker::Name.first_name }
#     last_name { Faker::Name.last_name }
#     image_url  'https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg'
#     email { Faker::Internet.email }
#     home_city  'New York'
#     home_state  'NY'
#   end
# end



# user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: cities.sample, home_state: "OK", bio: Faker::Hipster.paragraph)
