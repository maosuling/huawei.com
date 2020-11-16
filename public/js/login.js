import './library/jquery.js';
import './library/jquery.md5.js';
import cookie from './library/cookie.js';

$('#submit').on('click', function() {
    // 省略1万字的表单验证环节
    alert('登录成功');
    // let pass = /.\{6-16}/;
    let password = $.md5($('[name=password]').val());
    $.ajax({
        type: "post",
        url: "http://10.31.162.53:8888/users/login",
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
