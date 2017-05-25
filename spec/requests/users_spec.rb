require 'rails_helper'

RSpec.describe 'User API', type: :request do

  let!(:users) { create_list(:user, 10) }
  let (:sample_user) { users.last }
  let(:header) { { 'Authorization' => JsonWebToken.encode(user_id: users.first.id) } }
  let(:sample_user_header) { { 'Authorization' => JsonWebToken.encode(user_id: sample_user.id) } }

  describe 'GET /users/:id' do
    describe "with a token" do
      before { get "/users/#{users.sample.id}", headers: header}

      it "Sends back a JSON with user data" do
        expect(json).not_to be_empty
        expect(json["user"]["provider"]).to eq ('facebook')
      end
    end

    describe "with NO token" do
      before { get "/users/#{users.sample.id}"}

      it "Sends back a JSON" do
        expect(json).not_to be_empty
        expect(json["message"]).to eq("Missing token")
      end
    end
  end

    describe 'PUT /users/:id' do
      let(:params) { {profile_data: {city: "Chicago", state: "IL", user_bio: "Hi, I'm new", gnomad_profile: "true", gnomad_pref: {art: "true", bars: "false"}, localhost_profile: "true", localhost_pref: { art: "false", bars: "true", zoo: "true"} } } }
    describe "with the RIGHT token" do
      before { put "/users/#{sample_user.id}", params: params, headers: sample_user_header}

      it "Sends back a JSON with user data" do
        expect(json).not_to be_empty
        expect(json["first_name"]).to eq (sample_user.first_name.downcase)
      end

      it "Updates the user" do
        get "/users/#{sample_user.id}", headers: sample_user_header
        expect(json).not_to be_empty
        expect(json["user"]["home_city"]).to eq ("chicago")
      end

      it "Updates the user gnomad_profile" do
        get "/users/#{sample_user.id}", headers: sample_user_header
        expect(json).not_to be_empty
        expect(json["travel_interests"]).to match_array(["art"])
      end

      it "Updates the user localhost_profile" do
        get "/users/#{sample_user.id}", headers: sample_user_header
        expect(json).not_to be_empty
        expect(json["host_interests"]).to match_array(["zoo", "bars"])
      end

    end

    describe "with the WRONG token" do
      before { put "/users/#{sample_user.id}", params: params, headers: header}

      it "Sends back a JSON with user data" do
        expect(json).not_to be_empty
        expect(json["message"]).to eq ('Invalid credentials')
      end
    end

    describe "with NO token" do
      before { put "/users/#{sample_user.id}"}

      it "Sends back a JSON" do
        expect(json).not_to be_empty
        expect(json["message"]).to eq("Missing token")
      end
    end
  end
end
