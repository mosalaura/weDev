import { login } from '../helpers/authentication.js';
import { getMe } from '../helpers/users.js';

// just to verify if user's logged in;
getMe(() => {
    localStorage.setItem('loginStatus', true);
    window.location.href = 'index.html';
})

$("form").submit((e) => {
    e.preventDefault();

    $("#login_btn").prop('disabled', true);
    var loginForm = {
        email: $("#email").val(),
        password: $("#password").val()
    }

    login(loginForm,
        success => {
            var { token } = success;
            localStorage.setItem('authToken', token);
            localStorage.setItem('loginStatus', true);

            window.location.href = 'index.html';
        },
        error => {
            console.log(error);
            $("#login_btn").prop('disabled', false);
        });

});

var passwordVisible = false;
var passwordInput = $("#password")
var passwordToggle = $("#password_toggle")

$("#password_toggle").click(() => {

    if (passwordVisible == true) {
        passwordToggle.text('visibility');
        passwordInput.prop('type', 'password');
        passwordVisible = false;
    } else {
        passwordToggle.text('visibility_off');
        passwordInput.prop('type', 'text');
        passwordVisible = true;
    }

})