const BASE_URL = "https://reisen-reisen.herokuapp.com";

const form = document.querySelector('form');
var username = document.getElementById('email');
var password = document.getElementById('passwort');

const login = async (username, password) => {
    const loginUrl = `${BASE_URL}/login`;

    const response = await fetch(loginUrl, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });
    return response.status === 200;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    login(username.value, password.value)
        .then(wasSuccessfulLogin => {
            if (wasSuccessfulLogin) {
                window.location.replace("../map.html");
            } else {
                document.getElementById("loginFailed").style.visibility = "visible";
                //document.getElementById("loginFailed").innerHTML = "Username oder Passwort falsch";
            }
        })
});

const getUser = async () => {
    const loginUrl = `${BASE_URL}/loggedInUser`;
    const res = await fetch(loginUrl, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
};

getUser().then(res => {
    let loggedInUser = res.email;
    document.getElementById("loggedInUser").innerHTML = "Eingeloggt als " + loggedInUser; //wird ueberhaupt nicht aufgerufen...
})


/*Alt mit localstorage*/
/*
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
        window.location.replace("../map.html");
        localStorage.setItem("username", user.username);
        localStorage.setItem("password", user.password);
    } else {
        document.getElementById("loginFailed").innerHTML = "Username oder Passwort falsch";
    }
}

 */

/***********************/