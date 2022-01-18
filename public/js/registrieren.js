/*
const BASE_URL = "https://reisen-reisen.herokuapp.com";

const form = document.querySelector('form');
var username = document.getElementById('email');
var password = document.getElementById('passwort');
*/
function neuenUserRegistrieren() {
    document.getElementById("registrationSubmitted").innerHTML = "Bestätigungsmail versendet";
}


/*
const regist = async (username, password) => {
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

    regist(username.value, password.value)
        .then(wasSuccessfulLogin => {
            if (wasSuccessfulLogin) {
                window.location.replace("../map.html");
            } else {
                document.getElementById("loginFailed").innerHTML = "Username oder Passwort falsch";
            }
        })
});

 */