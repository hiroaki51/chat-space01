json.array!(@messages) do |message|
  json.id  message.id
  json.content  message.content
  json.created_at  message.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.image  message.image
  json.user_name  message.user.name
end