class SessionsController < ApplicationController
  def destroy
    session[:user_id] = nil
  end
end
