const BASE_URL = "https://reisen-reisen.herokuapp.com";

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
    await res.json();
    return res.json();
};

getUser().then(res => {
    let loggedInUser = res;
    document.getElementById("loggedInUser").innerHTML = "Eingeloggt als " + loggedInUser;
})

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