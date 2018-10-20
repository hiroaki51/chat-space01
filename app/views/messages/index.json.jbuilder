json.array!(@messages) do |message|
  json.id  message.id
  json.content  message.content
  json.created_at  message.created_at
  json.group_id  message.group.id
  json.image  message.image
  json.group_name  message.group.name
  json.user_name  message.user.name
end
