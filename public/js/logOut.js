const BASE_URL = "https://reisen-reisen.herokuapp.com";


const logOut = async () => {
    const logoutUrl = `${BASE_URL}/logout`;
    const res = await fetch(logoutUrl, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
       // body: JSON.stringify({username, password})
    });
    return res.status === 200;

}

logOut().then(loggingOut => {
    if (loggingOut) {
        window.location.replace("../index.html");
    }
})


/*
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