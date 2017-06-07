require 'rails_helper'

RSpec.describe Star, type: :model do

  describe "associations" do
    it { should belong_to(:sender).class_name 'User'  }
    it { should belong_to(:recipient).class_name 'User' }
  end

end
