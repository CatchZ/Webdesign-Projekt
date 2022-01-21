
const BASE_URL = "https://reisen-reisen.herokuapp.com";

const form = document.querySelector('form');
var username = document.getElementById('emailReg');
var password = document.getElementById('passwortReg');


//document.getElementById("registrationForm").addEventListener("submit", neuenUserRegistrieren);

const register = async (username, password) => {
    const regUrl = `${BASE_URL}/registrationRequest`;

    const response = await fetch(regUrl, {
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

    register(username.value, password.value)
        .then(wasSuccessful => {
            if (wasSuccessful) {
                alert("Klappt");
                window.location.replace("../map.html");
            } else {
               alert("Etwas hat nicht geklappt");
               console.log("Fehler");
            }
        })
});

function neuenUserRegistrieren() {
    alert("Bestätigungsmail versendet. Bitte besuche dein Mailfach und bestätige deine Anmeldung innerhalb von zwei Tagen, um deine Registrierung abzuschließen.");
    window.location.replace("../index.html");
    //document.getElementById("registrationSubmitted").innerHTML = "Bestätigungsmail versendet. <br>" +
      //  "Bitte besuche dein Mailfach und bestätige deine Anmeldung innerhalb von zwei Tagen, um deine Registrierung abzuschließen." ;
}

