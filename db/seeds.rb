# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

 20.times do
  User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: Faker::Internet.url, email: Faker::Internet.email, home_city: Faker::Address.city, home_state: Faker::Address.state_abbr, bio: Faker::Hipster.paragraph)
 end
