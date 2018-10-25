json.array!(@messages) do |message|
  json.id  message.id
  json.content  message.content
  json.created_at  message.created_at.to_s(:created_at)
  json.image  message.image
  json.user_name  message.user.name
end
