class PersonalMessagesController < ApplicationController
  before_action :find_conversation!

  def create
    @conversation ||= Conversation.create(conversation_id: personal_message_params[:conversation_id], author_id: current_user.id, receiver_id: @receiver.id)

    @personal_message = PersonalMessage.create(body: personal_message_params[:body], author_id: current_user.id, conversation_id: personal_message_params[:conversation_id])
    @personal_message.save!

    if @conversation.receiver_id > @conversation.initiator_id
      channel = "chat_#{@conversation.initiator_id}_#{@conversation.receiver_id}"
    else
      channel = "chat_#{@conversation.receiver_id}_#{@conversation.initiator_id}"
    end

    ActionCable.server.broadcast(channel, @personal_message.as_json)

    render json: @personal_message
  end

  # def new
  #   redirect_to conversation_path(@conversation) and return if @conversation
  #   @personal_message = @current_user.personal_messages.build
  # end

  private

  def personal_message_params
    params.require(:personal_message).permit(:body, :receiver_id, :conversation_id)
  end

  def find_conversation!
    if personal_message_params[:receiver_id]
      @receiver = User.find_by(id: personal_message_params[:receiver_id])
      # redirect_to(root_path) and return unless @receiver
      @conversation = Conversation.between(current_user, @receiver.id)[0]
    else
      @conversation = Conversation.find_by(id: personal_message_params[:conversation_id])
      # redirect_to(root_path) and return unless @conversation && @conversation.participates?(@current_user)
    end
  end
end
