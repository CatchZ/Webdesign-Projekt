let main = document.querySelector('#navliste');
let main2 = document.querySelector('#navbar1');
let li = document.createElement('li');
let p1 = document.createElement('p');
let a = document.createElement('a');
let b = document.createElement("button");

appendChildren('Übersichtskarte', "mapUndFormular.html", `../lang/${locale}.json`);
appendChildren('Reiseverzeichnis', "tabelleReisen.html",`../lang/${locale}.json`);
b.setAttribute("LogOutButton", "logout()")
b.innerHTML = "Log out";
b.id = 'logOutButton';
b.onclick = function () {
    logout();
};

main.appendChild(li);
li.appendChild(b);
p1.id = "loggedInUser";
main2.appendChild(p1);


/**
 * Fügt Element mit der id navbar weitere Listenelemente hinzu mit dem aubau
 * <li>
 *     <a linl>text>
 * </li>
 * @param text Stringtext
 * @param link href link
 * @param jsonObj
 */
function appendChildren(text, link, jsonObj) {
    let main = document.querySelector('#navliste');
    let li = document.createElement('li');
    let p = document.createElement('p');
    let a = document.createElement('a');
    p.textContent = jsonObj['dateError'];

    a.setAttribute('href', link);
    a.innerHTML = text;
    main.appendChild(li);
    li.appendChild(p);
    p.appendChild(a);
}