$(function(){

    function buildHTML(message){
        var lowerMessage = "";
        var lowerMessageImage = "";
        if(message.content != null){
            lowerMessage = `<p class="lower-message__content">
                                    ${message.content}
                                </p>`;
        }
        if(message.image.url != null){
            lowerMessageImage = `<img src= ${message.image.url} class=" lower-message__image">`;
        }
        var html = `<div class="message">
                        <div class="upper-message">
                            <div class="upper-message__user-name">
                                ${message.user_name}
                            </div>
                            <div class="upper-message__date">
                                ${message.created_at}
                            </div>
                        </div>
                        <div class="lower-message">
                            ${lowerMessage}
                            ${lowerMessageImage}
                        </div>`

        return html;
    }

    $('.new_message').on('submit', function(e) {
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
            $('.messages').append(html);
            $('.form__message').val('');

            $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, 500, "swing");
            $('.form__submit').attr('disabled', false);

        })
        .error(function(XMLHttpRequest, textStatus, errorThrown) {
            alert('error!!!');
            console.log("XMLHttpRequest : " + XMLHttpRequest.status);
            console.log("textStatus     : " + textStatus);
            console.log("errorThrown    : " + errorThrown.message);
        })
    })
});
