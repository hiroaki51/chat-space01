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
                        <div class="upper-message" id=${message.id}>
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
                        </div>
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
        .fail(function() {
            $('.form__message').val('');
            $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, 500, "swing");
            $('.form__submit').attr('disabled', false);

            alert('ajax error!');
        })
    })

    function getlatestid(){
        var latest_id = "0";
        var elements = $.makeArray($('.upper-message'));
        console.log('elements',elements);
        $.each(elements, function(index, val){
            if (val.id != null){
                var current_id = val.id;
                if (latest_id < current_id) {
                    latest_id = current_id;
                }
            }
        })
        return latest_id;
    }

    function buildreloadHTML(messages){
        var htmls = "";
        var max_len = 0;

        latest_id = getlatestid();
        $.each(messages, function(index, val){
            if(val.id > latest_id){

                var lowerMessage = "";
                var lowerMessageImage = "";

                if(val.content != null){
                    lowerMessage = `<p class="lower-message__content">
                                        ${val.content}
                                    </p>`;
                }
                if(val.image.url != null){
                    lowerMessageImage = `<img src= ${val.image.url} class=" lower-message__image">`;
                }

                var html = `<div class="message">
                            <div class="upper-message" id=${val.id}>
                                <div class="upper-message__user-name">
                                    ${val.user_name}
                                </div>
                                <div class="upper-message__date">
                                    ${val.created_at}
                                </div>
                            </div>
                            <div class="lower-message">
                                ${lowerMessage}
                                ${lowerMessageImage}
                            </div>
                        </div>`
                htmls += html
            }
        })

        return htmls;
    }

    function reload(){
        $.ajax({
            url: "messages",
            type: "GET",
            dataType: 'json',
        })
        .done(function(data){
            var html = buildreloadHTML(data);
            $('.messages').append(html);

            $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, 500, "swing");
            $('.form__submit').attr('disabled', false);

        })
        .fail(function() {
            $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, 500, "swing");
            $('.form__submit').attr('disabled', false);

            alert('ajax error!');
        })
    }

    setInterval(reload,2000);

});
