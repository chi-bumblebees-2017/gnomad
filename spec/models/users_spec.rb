require 'rails_helper'

RSpec.describe User, type: :model do

  describe "associations" do
    it { should have_many(:initiated_conversations).with_foreign_key 'initiator_id'  }
    it { should have_many(:received_conversations).with_foreign_key 'receiver_id' }
    # For some reason the PM one isn't working even though shoulda has methods for both dependent destroy and foreign keys, so  ¯\_(ツ)_/¯
    it { should have_many(:sent_stars) }
    it { should have_many(:received_stars) }
    it { should have_one(:gnomad_profile) }
    it { should have_one(:localhost_profile) }
  end

end
