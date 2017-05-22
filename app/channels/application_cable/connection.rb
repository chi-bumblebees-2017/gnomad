module ApplicationCable
  class Connection < ActionCable::Connection::Base
        identified_by :current_user

    def connect
      self.current_user = find_verified_user
      p self.current_user
    end

    private
      def find_verified_user
        p "Cookie jar is #{request.cookie_jar.signed[:user_id]}"
        p "Cookies.signed[:user_id] is #{cookies.signed[:user_id]}"
        if verified_user = User.find_by(id: cookies.signed[:user_id])
          verified_user
        else
          reject_unauthorized_connection
        end
      end
  end
end
