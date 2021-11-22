/*const dataGEO = async () => {
    const data = await fetch("https://datahub.io/core/country-list/r/0.html");
    return data.json()}

 */
const requestURL = "https://datahub.io/core/country-list/r/0.html";
const request =new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType= 'json';
request.send();
request.onload=function (){
    const test =request.response;
    laenderlisteErsteller(test);

}

//test =  dataGEO();
//displayDataiSO2();
//localStorage.setItem("Test",JSON.stringify(laenderliste));
function laenderlisteErsteller (x){
    let main = document.querySelector("#reiseziel");
    let o;
    let i;
    o =document.createElement('option');
    o.setAttribute('value',"test");
    o.innerText=x[0]["Code"];
    main.appendChild(o)
    for (i=0;i===160;i++){
        o =document.createElement('option');
        //o.setAttribute('value',x.[i]["Code"]+);
        o.innerText=x.name[i][["Code"]];
        main.appendChild(o)

    }

}
laenderlisteErsteller();

if("laender" in localStorage) {}
else{
let laender =[];
window.localStorage.setItem("laender",JSON.stringify(laender));}

/**
 * Kartenobjekt
 */
let mymap = L.map('map').setView([51.505, -0.09], 4);
geoMap(mymap);

function geoMap(mymap) {

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png	', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    } ).addTo(mymap);

let visitedCountries = JSON.parse(localStorage.getItem("laender"));

const loadData = async () => {
    const data = await fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson');
    return data.json();
}
// dynamisch gemacht
const displayData = async () => {
    const geoJson = await loadData();
    const filteredData = {
        ...geoJson,
        features: geoJson.features.filter(feature =>
            !visitedCountries.includes(feature.properties.iso_a2))
    };
    L.geoJSON(filteredData).addTo(mymap);
}

displayData();

}

/**
 * updated map mit Local Storage informationen
 * @constructor
 */
function UpdateMap(){
   landHinzufuegen(document.getElementById("reiseziel").value);
  mymap.off();
  mymap.remove();
  mymap = L.map('map').setView([51.505, -0.09], 4);
   geoMap(mymap);
}

/**
 * updatet laender Array aus localstorage um gewünschtes Land
 * @param land
 */
function landHinzufuegen(land){
    let temp =  JSON.parse(window.localStorage.getItem("laender"));
    temp.push(land);
   updateStorage("laender",temp);
}

/**
 *
 * @param key variable die geupdatet werden soll
 * @param data
 */
function updateStorage(key,data){
    window.localStorage.removeItem(key);
    window.localStorage.setItem(key,JSON.stringify(data));
}

/**
 * entfernt land anstelle x beginnend ab 1
 * @param index
 */
function landEntfernen(index){
    let temp =  JSON.parse(window.localStorage.getItem("laender"));
    temp.splice(index,1)//korrektur für array beginnend null
    updateStorage("laender",temp);

}

/**
 * ersetzt land an stelle x beginnend mit 1
 * @param index
 * @param land
 */
function landAendern(index,land){
    let temp =  JSON.parse(window.localStorage.getItem("laender"));
    temp[index]=land;
}
