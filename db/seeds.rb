# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "I'm a foodie so I know where the best local restaurants are and I want to find where they are in your city too!")
user.localhost_profile = LocalhostProfile.create!(restaurants: true,
                               sports: false,
                               museums: false,
                               bars: true,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "I love watching the history channel and exploring local cultural landmarks")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: true,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: true,
                               architecture: true,
                               family_fun: false,
                               zoo: false,
                               culture: true,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "if ur looking for tacos and beer i know the best spots!!!!")
user.localhost_profile = LocalhostProfile.create!(restaurants: true,
                               sports: false,
                               museums: false,
                               bars: true,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "the local music scene is my jam")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: true,
                               music: true,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "Let me tell you about the St. Louis City Museum")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: true,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: true,
                               history: false,
                               architecture: false,
                               family_fun: true,
                               zoo: false,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "#1 Cardinals fan!")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: true,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: false,
                               volunteer: true,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "Architecture student here. I have an internship with the city and I give great tours.")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: true,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: true,
                               family_fun: false,
                               zoo: false,
                               culture: true,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "Always looking for jogging buddies and I know the BEST ramen shop!")
user.localhost_profile = LocalhostProfile.create!(restaurants: true,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: true,
                               art: false,
                               fitness: true,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "Off beat art scene is my thing. Vegan. Animal lover! Say no to fur!")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: true,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: true,
                               culture: true,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "If you're in town and want to donate your time, my community center is always open to volunteers")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: true,
                               volunteer: true,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "Parks & REC IN  REAL LIFE ST LOUIS")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: true,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "i know the best spot for an open mic and great chai tea")
user.localhost_profile = LocalhostProfile.create!(restaurants: true,
                               sports: false,
                               museums: false,
                               bars: true,
                               music: true,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: true,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: true,
                               volunteer: false,
                               shopping: true,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "lived here for 40 years! always looking to show off my favorite spots")
user.localhost_profile = LocalhostProfile.create!(restaurants: true,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: true,
                               architecture: true,
                               family_fun: true,
                               zoo: true,
                               culture: true,
                               volunteer: true,
                               shopping: true,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "donuts Donuts DONUTS!")
user.localhost_profile = LocalhostProfile.create!(restaurants: true,
                               sports: true,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "i know the best haunted cemetaries in the area - very cool very niche very goth")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: true,
                               art: false,
                               fitness: false,
                               history: true,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: true,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "Hiking around STL is severely underrated! Let me show you around")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: true,
                               art: false,
                               fitness: true,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "I think we have the BEST ZOO in the country!!!!")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: true,
                               zoo: true,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: "want the best open air market deals? i know the best spots for cute vintage things")
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: false,
                               bars: false,
                               music: false,
                               outdoors: true,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: false,
                               zoo: false,
                               culture: true,
                               volunteer: false,
                               shopping: true,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")


user = User.create(provider: 'facebook', uid: Faker::Number.hexadecimal(5), first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, image_url: "https://thumbs.dreamstime.com/x/garden-gnome-elf-22324178.jpg", email: Faker::Internet.email, home_city: "St. Louis", home_state: "MO", bio: 'my family is always welcoming to share our favorite child-friendly spots for out of town families')
user.localhost_profile = LocalhostProfile.create!(restaurants: false,
                               sports: false,
                               museums: true,
                               bars: false,
                               music: false,
                               outdoors: false,
                               art: false,
                               fitness: false,
                               history: false,
                               architecture: false,
                               family_fun: true,
                               zoo: true,
                               culture: false,
                               volunteer: false,
                               shopping: false,
                               available: false,
                               suggestions: "We should visit #{Faker::LordOfTheRings.location}!")

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

User.all.each do |sender|
  User.all.each do |recipient|
    if sender == recipient
      next
    else
      sender.send_star(recipient) if rand(0..2) == 0
    end
  end
end

