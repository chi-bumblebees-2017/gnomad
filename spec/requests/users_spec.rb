require 'rails_helper'

RSpec.describe 'User API', type: :request do

  let!(:users) { create_list(:user, 10) }
  let(:header) { { 'Authorization' => JsonWebToken.encode(user_id: users.first.id) } }

  describe 'GET /users/:id' do
    describe "with a token" do
      before { get "/users/#{users.sample.id}", headers: header}

      it "Sends back a JSON with user data" do
        p json
        expect(json).not_to be_empty
        expect(json["user"]["provider"]).to eq ('facebook')
      end
    end

    describe "with NO token" do
      before { get "/users/#{users.sample.id}"}

      it "Sends back a JSON" do
        p json
        expect(json).not_to be_empty
        expect(json["message"]).to eq("Missing token")
      end
    end
  end



end
