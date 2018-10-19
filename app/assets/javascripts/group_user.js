$(function(){
  var groupuser = $("#chat-group-users");

  function appendUser(user_id, user_name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value=${user_id}></input>
                  <p class='chat-group-user__name'>${user_name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    groupuser.append(html);
  }

  $(document).on("click", ".chat-group-user__btn--add", function(){
    var user_id = $(this).attr('data-user-id');
    var user_name = $(this).attr('data-user-name');
    appendUser(user_id, user_name);
    $(".js-user-search-result").empty();
  })

});
