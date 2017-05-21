class JsonWebToken
  #we're using the app's secret to generate a secret key
  HMAC_SECRET = Rails.application.secrets.secret_key_base

  #payload should be uid
  def self.encode(payload, expire = 24.hours.from_now)
    #current default is to set the token to expire in a day, we may want to play with this for demo/debugging reasons.

    payload[:exp] = expire.to_i

    JWT.encode(payload, HMAC_SECRET)
  end

  def self.decode(token)
    body = JWT.decode(token, HMAC_SECRET)[0]

    HashWithIndifferentAccess.new body

  rescue JWT::ExpiredSignature, JWT::VerificationError => error
    #Custom error, built in custom error handler
    raise ExceptionHandler::ExpiredSignature, error.message
  end
end
