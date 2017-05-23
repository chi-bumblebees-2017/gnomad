class ChatChannel < ApplicationCable::Channel
  def subscribed
    if params[:me_id] > params[:other_id]
      stream_from "chat_#{params[:other_id]}_#{params[:me_id]}"
    else
      stream_from "chat_#{params[:me_id]}_#{params[:other_id]}"
    end
  end

  def add(message_data)
    new_message = PersonalMessage.create(body: message_data["message"], author_id: message_data["author_id"], conversation_id: message_data["conversation_id"])
    conversation = new_message.conversation

    if conversation.receiver_id > conversation.initiator_id
      channel = "chat_#{conversation.initiator_id}_#{conversation.receiver_id}"
    else
      channel = "chat_#{conversation.receiver_id}_#{conversation.initiator_id}"
    end

    ActionCable.server.broadcast(channel, new_message.as_json)
  end

  def unsubscribed
    stop_all_streams
  end
end
