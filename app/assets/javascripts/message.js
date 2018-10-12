$(function(){

    function buildHTML(message){
        var html = `<div class="message">
                        <div class="upper-message">
                            <div class="upper-message__user-name">
                                <%= message.user.name %>
                            </div>
                            <div class="upper-message__date">
                                <%= message.created_at %>
                            </div>
                        </div>
                        <div class="lower-message">
                            <% if message.content.present? %>
                                <p class="lower-message__content">
                                    <%= message.content %>
                                </p>
                            <%= image_tag message.image.url, class=" lower-message__image" if message.image.present? %>
                        </div>`

        return html;
    }

    $('.form__submit').on('click', function(e) {
        e.preventDefault();

        var formData = new FormData(this);
        var url = $(this).attr('action');

        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        })
        .done(function(data){
            var html = buildHTML(data);
            $('.message').append(html)
            $('.form__message').val('')
        })
        .fail(function(){
            alert('error');
        })
    })
});
