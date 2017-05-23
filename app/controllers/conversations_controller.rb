class ConversationsController < ApplicationController
  # before_action :set_conversation, except: [:index]
  # before_action :check_participating!, except: [:index]

  def index
    if request.headers.include?('Limit')
      @conversations = Conversation.participating(current_user).order('updated_at DESC').limit(request.headers['Limit'])
    else
      @conversations = Conversation.participating(current_user).order('updated_at DESC')
    end
      full_json = @conversations.map do |conversation|
        conversation.as_json(methods: :last_message).merge({other: conversation.with(current_user)})
      end
    render json: full_json
  end

  def show
    # @personal_message = PersonalMessage.new
    @conversation = Conversation.find_by(id: params[:id]) || Conversation.new
    full_json = @conversation.as_json(include: :personal_messages).merge({other: @conversation.with(current_user), me: current_user})
    render json: full_json
  end

  def create
    @conversation = Conversation.find_or_create_by(receiver_id: conversation_params[:receiver_id], initiator_id: current_user.id)
    @personal_message = PersonalMessage.create(body: conversation_params[:body], author_id: current_user.id, conversation_id: @conversation.id)
    @personal_message.save!


    receiver_id = conversation_params[:receiver_id].to_i
    if receiver_id > current_user.id
      channel = "chat_#{current_user.id}_#{receiver_id}"
    else
      channel = "chat_#{receiver_id}_#{current_user.id}"
    end
    ActionCable.server.broadcast(channel, @personal_message.as_json)


    render json: @conversation.as_json(include: [:personal_messages, :receiver, :initiator])
  end

  private

  def conversation_params
    params.require(:personal_message).permit(:body, :receiver_id)
  end

  # def set_conversation
  #   @conversation = Conversation.find_by(id: params[:id])
  # end

  # def check_participating!
  #   redirect_to root_path unless @conversation && @conversation.participates?(current_user)
  # end
end
