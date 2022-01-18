/*
const BASE_URL = "https://reisen-reisen.herokuapp.com";

const form = document.querySelector('form');
var username = document.getElementById('email');
var password = document.getElementById('passwort');
*/

document.getElementById("registrationForm").addEventListener("submit", neuenUserRegistrieren);

function neuenUserRegistrieren() {
    alert("Bestätigungsmail versendet. Bitte besuche dein Mailfach und bestätige deine Anmeldung innerhalb von zwei Tagen, um deine Registrierung abzuschließen.");
    window.location.replace("../index.html");
    //document.getElementById("registrationSubmitted").innerHTML = "Bestätigungsmail versendet. <br>" +
      //  "Bitte besuche dein Mailfach und bestätige deine Anmeldung innerhalb von zwei Tagen, um deine Registrierung abzuschließen." ;
}

