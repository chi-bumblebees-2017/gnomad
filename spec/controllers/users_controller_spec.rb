require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "POST #create" do
    it "returns a 200 ok status" do
      post :create, params: {uid: 1}
      expect(response).to have_http_status :ok
    end
    it "should update the users to add one" do
      expect{ post :create, params: {uid: 1} }.to change {User.count}.by 1
    end
  end

  describe "GET #show" do
    it "returns a 200 ok status" do
      user = User.create!(provider: "facebook", uid: 12345)
      get :show, params: {id: user.id}
      expect(response).to have_http_status :ok
    end
  end
end
