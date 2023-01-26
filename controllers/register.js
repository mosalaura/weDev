
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