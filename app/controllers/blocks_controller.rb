class BlocksController < ApplicationController

  def create
    offender = User.find(block_params[:offender_id])
    current_user.reported_users.create!(offender: offender)
    render json: {blocked_user: offender}
  end

  private
    def block_params
      params.require(:block).permit(:reason, :comment, :offender_id)
    end
end
