class ChatChannel < ApplicationCable::Channel
  def subscribed
    mine = params[:me_id].to_i
    theirs = params[:other_id].to_i
    if mine > theirs
      stream_from "chat_#{theirs}_#{mine}"
    else
      stream_from "chat_#{mine}_#{theirs}"
    end
  end

  def add(message_data)
    new_message = PersonalMessage.create(body: message_data["message"], author_id: message_data["author_id"].to_i, conversation_id: message_data["conversation_id"].to_i)
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
