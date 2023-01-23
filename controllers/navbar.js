var loginStatus = localStorage.getItem('loginStatus');

if(loginStatus) {
    $("#btn_ad").show();
    $("#btn_cart").show();
} else {
    $("#btn_login").show();
}