class ConversationsController < ApplicationController
  # before_action :set_conversation, except: [:index]
  # before_action :check_participating!, except: [:index]

  def index
    @conversations = Conversation.participating(User.find(session[:user_id])).order('updated_at DESC')
    render json: @conversations.as_json(include: [:initiator, :receiver, :last_message])
  end

  def show
    # @personal_message = PersonalMessage.new
    @conversation = Conversation.find_by(id: params[:id]) || Conversation.new
    render json: @conversation.as_json(include: [:personal_messages, :receiver, :initiator])
  end


  # private

  # def set_conversation
  #   @conversation = Conversation.find_by(id: params[:id])
  # end

  # def check_participating!
  #   redirect_to root_path unless @conversation && @conversation.participates?(current_user)
  # end
end
