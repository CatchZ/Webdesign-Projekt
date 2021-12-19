const BASE_URL = "https://reisen-reisen.herokuapp.com";

async function displayLogOut() {
    // let usernameLoggedIn = localStorage.getItem("username");
    const loginUrl = `${BASE_URL}/loggedInUser`;

    const response = await fetch(loginUrl, {
        method: 'GET',
        credentials: 'include',
        body: JSON.stringify({username})
    });
    document.getElementById("loggedInUser").innerHTML = "Eingeloggt als " + username;
    return response.status === 200;
}

function logout() {
    localStorage.clear();
    window.location.replace("../index.html");
}


/*
function displayLogOut() {
    // let usernameLoggedIn = localStorage.getItem("username");
    let usernameLoggedIn =

    document.getElementById("loggedInUser").innerHTML = "Eingeloggt als " + usernameLoggedIn;
}
function logout() {
    localStorage.clear();
    window.location.replace("../index.html");
}


 */