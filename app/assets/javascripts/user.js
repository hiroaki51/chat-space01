$(function(){

    function buildHTML(user){
        var html = `<div class="chat-group-user clearfix">
                        <p class="chat-group-user__name">${user.name}</p>
                        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
                        ::after
                    </div>`
        return html;
    }

    $('#user-search-field').on('keyup', function(e) {
        e.preventDefault();
        var input = this.val();

        $.ajax({
            url: '/users/index',
            type: 'GET',
            data: { keyword: input },
            dataType: 'json',
            processData: false,
            contentType: false
        })
        .done(function(data){
            $('.js-user-search-result').empty();
            if (data.length !== 0) {
                data.forEach(function(data){
                    var html = buildHTML(data);
                    $('.js-user-search-result').append(html);
                });
            }
        })
        .fail(function() {
            alert('ajax error!');
        })
    })
});
