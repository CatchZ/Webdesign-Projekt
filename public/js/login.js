const user =
    {
        username: "huehne@htw-berlin.de",
        password: "hunter2"
    };

myStorage = localStorage;

function logIn() {
    let username = document.getElementById('email').value;
    let password = document.getElementById('passwort').value;

    if (username === user.username && password === user.password) {
        window.location.replace("../public/map.html");
        localStorage.setItem("username", user.username);
        localStorage.setItem("password", user.password);
    } else {
        document.getElementById("loginFailed").innerHTML = "Username oder Passwort falsch";
    }
}
