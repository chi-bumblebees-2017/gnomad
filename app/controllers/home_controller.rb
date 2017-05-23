class HomeController < ApplicationController
  skip_before_action :authorize_request, only: [:index]

  def index
    redirect_to '/'
  end
end
