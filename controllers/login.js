import { login } from '../helpers/authentication.js';
import { getMe } from '../helpers/users.js';

// just to verify if user's logged in;
getMe(success => {
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

            window.location.href = 'index.html';
        },
        error => {
            console.log(error);
            $("#login_btn").prop('disabled', false);
        });

});