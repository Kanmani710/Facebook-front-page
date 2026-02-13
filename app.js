document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");

    loginButton.addEventListener("click", function () {
        window.location.href = "https://www.facebook.com/login.php";
    });
});