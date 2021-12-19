const BASE_URL = "https://reisen-reisen.herokuapp.com";

const authorized = async (username, password) => {
    const loginUrl = `${BASE_URL}/journeys`;

    const response = await fetch(loginUrl, {
        method: 'GET',
        credentials: 'include',
    });
    return response.status === 200;
}
authorized().then(isAuth => {
    if(isAuth) {
        console.log("User eingeloggt");
    } else {
        window.location.replace("../index.html");
    }
})