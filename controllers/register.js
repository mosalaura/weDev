import { register } from '../helpers/authentication.js';

var passwordVisible = false;

$("#password_toggle").click(() => {

    if (passwordVisible == true) {
        $("#password_toggle").text('visibility');
        $("#password").prop('type', 'password');
        passwordVisible = false;
    } else {
        $("#password_toggle").text('visibility_off');
        $("#password").prop('type', 'text');
        passwordVisible = true;
    }
})

$('#registerForm').submit((event) => {
    event.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var password = $('#password').val();

    var data = {
        name,
        email,
        phone,
        password
    }

    $("#registerButton").prop('disabled', true);

    register(data, (res) => {
        window.location.href='fazer_login.html'

    }, (error) => {
        $("#registerButton").prop('disabled', false);
    })
})
