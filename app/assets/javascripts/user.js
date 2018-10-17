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
        var input = $('#user-search-field').val();
        $.ajax({
            url: '/users',
            type: 'GET',
            data: { keyword: input },
            dataType: 'json'
        })
        .done(function(data){
            $('.js-user-search-result').empty();
            console.log("data:", data);
            if (data !== null) {
                data.forEach(function(data){
                    var html = buildHTML(data);
                    console.log("html:", html);
                    $('.js-user-search-result').append(html);
                });
            }
        })
        .fail(function() {
            alert('ajax error!');
        })
    })
});
