import './library/jquery.js';
import './library/jquery.md5.js';
import cookie from './library/cookie.js';

$('#submit').on('click', function() {
    // 省略1万字的表单验证环节
    alert('注册成功');
    let password = $.md5($('[name=password]').val());
    $.ajax({
        type: "post",
        url: "http://10.31.162.53:8888/users/reg",
        data: {
            username: $('[name=username]').val(),
            password: password,
            email: $('[name=email]').val(),
            phone: $('[name=phone]').val(),
            address: $('[name=address]').val(),
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
        }

    });
});
