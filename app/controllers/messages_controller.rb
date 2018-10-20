class MessagesController < ApplicationController

  before_action :set_group

  @groupusernames = []
  @groupusers = []

  def index
    @groupusernames = []
    @message = Message.new
    @messages = @group.messages.includes(:user)
    respond_to do |format|
      format.html do

      end

      format.json
    end
  end

  def create
    @message = Message.new(message_params)
    if @message.save == false then
      window.alert("データの保存に失敗しました")
    end
    respond_to do |format|
      format.html{
        redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'
      }
      format.json
    end

  end

  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id, group_id: params[:group_id])
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
