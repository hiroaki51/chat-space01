class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  validates :name, presence: true
  has_many :messages

  accepts_nested_attributes_for :group_users, allow_destroy: true

  def show_last_message
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end

end
