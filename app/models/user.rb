class User < ApplicationRecord

  def self.from_oauth(userjson)
    user = User.find_or_create_by(userjson[:uid])
    user.first_name =|| userjson(:first_name)
    user.last_name =|| userjson(:last_name)
    user.email =|| userjson(:email)
    user.image_url =|| userjson(:image_url)
    user.uid =|| userjson(:uid)
    user.save
    user
  end
end
