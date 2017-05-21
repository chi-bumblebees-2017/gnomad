# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

cities = ["Oklahoma City", "Tulsa", "Norman"]

20.times do
  user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: cities.sample, home_state: "OK", bio: Faker::Hipster.paragraph)
  if rand(0..1) == 0
    lp = LocalhostProfile.create!(restaurants: rand(0..1) == 0 ? true : false,
                                 sports: rand(0..1) == 0 ? true : false,
                                 museums: rand(0..1) == 0 ? true : false,
                                 bars: rand(0..1) == 0 ? true : false,
                                 music: rand(0..1) == 0 ? true : false,
                                 outdoors: rand(0..1) == 0 ? true : false,
                                 art: rand(0..1) == 0 ? true : false,
                                 fitness: rand(0..1) == 0 ? true : false,
                                 history: rand(0..1) == 0 ? true : false,
                                 architecture: rand(0..1) == 0 ? true : false,
                                 family_fun: rand(0..1) == 0 ? true : false,
                                 zoo: rand(0..1) == 0 ? true : false,
                                 culture: rand(0..1) == 0 ? true : false,
                                 volunteer: rand(0..1) == 0 ? true : false,
                                 shopping: rand(0..1) == 0 ? true : false,
                                 available: rand(0..1) == 0 ? true : false,
                                 suggestions: "We should visit #{Faker::LordOfTheRings.location}!")
    user.localhost_profile = lp
  end
  if rand(0..1) == 0
    gp = GnomadProfile.create(restaurants: rand(0..1) == 0 ? true : false,
                               sports: rand(0..1) == 0 ? true : false,
                               museums: rand(0..1) == 0 ? true : false,
                               bars: rand(0..1) == 0 ? true : false,
                               music: rand(0..1) == 0 ? true : false,
                               outdoors: rand(0..1) == 0 ? true : false,
                               art: rand(0..1) == 0 ? true : false,
                               fitness: rand(0..1) == 0 ? true : false,
                               history: rand(0..1) == 0 ? true : false,
                               architecture: rand(0..1) == 0 ? true : false,
                               family_fun: rand(0..1) == 0 ? true : false,
                               zoo: rand(0..1) == 0 ? true : false,
                               culture: rand(0..1) == 0 ? true : false,
                               volunteer: rand(0..1) == 0 ? true : false,
                               shopping: rand(0..1) == 0 ? true : false)
    user.gnomad_profile = gp
  end
end

initiator = User.first
receiver = User.last
convo = Conversation.create!(initiator: initiator, receiver: receiver)
convo.personal_messages.create!(body: Faker::ChuckNorris.fact, author_id: initiator.id)
19.times do
  if rand(0..1) == 0
    author_id = initiator.id
  else
    author_id = receiver.id
  end
  convo.personal_messages.create!(body: Faker::ChuckNorris.fact, author_id: author_id)
end
