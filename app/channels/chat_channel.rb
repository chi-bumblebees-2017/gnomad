class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:other_user]}"
  end
end
