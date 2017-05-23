class StarsController < ApplicationController

  def create
    recipient = User.find(star_params[:recipient_id])
    current_user.send_star(recipient)
  end

  def destroy

  end

  private
    def star_params
      params.require(:star).permit(:recipient_id)
    end
end
