class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  # TODO: Temporarily commenting this out in order to POST to Rails API without needing CSRF authenticity token. Not secure, but fine for now.
  # protect_from_forgery with: :exception

  # TODO: Stubbing current user for all controllers so that we don't need to handle API keys for now.
  before_action :stub_current_user

  before_action :authorize_request
  attr_reader :current_user



  private
  def authorize_request
    @current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
  end

  def stub_current_user
    @current_user = User.find(20)
  end
end
