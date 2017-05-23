class SessionsController < ApplicationController
  def destroy
    session[:user_id] = nil
    request.cookie_jar.signed[:user_id] = nil
  end
end
