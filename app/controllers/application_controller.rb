class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  # TODO: Temporarily commenting this out in order to POST to Rails API without needing CSRF authenticity token. Not secure, but fine for now.
  # protect_from_forgery with: :exception

  before_action :authorize_request
  attr_reader :current_user



  private
  def authorize_request
    @current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
  end

end
