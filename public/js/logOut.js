function displayLogOut() {
    let usernameLoggedIn = localStorage.getItem("username");
    document.getElementById("loggedInUser").innerHTML = "Eingeloggt als " + usernameLoggedIn;
}
function logout(){
    localStorage.clear();
    window.location.replace("../public/index.html");

}