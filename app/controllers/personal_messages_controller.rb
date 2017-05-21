class PersonalMessagesController < ApplicationController
  before_action :find_conversation!
  # TODO: update current_user, remove before_action

  def create
    @conversation ||= Conversation.create(conversation_id: personal_message_params[:conversation_id], author_id: session[:user_id], receiver_id: @receiver.id)

    @personal_message = PersonalMessage.create(body: personal_message_params[:body], author_id: session[:user_id], conversation_id: personal_message_params[:conversation_id])
    @personal_message.save!

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
      @conversation = Conversation.between(session[:user_id], @receiver.id)[0]
    else
      @conversation = Conversation.find_by(id: personal_message_params[:conversation_id])
      # redirect_to(root_path) and return unless @conversation && @conversation.participates?(@current_user)
    end
  end
end
