

let laender = ['DE', 'US', 'RU'];


let mymap = L.map('map').setView([51.505, -0.09], 4);

myStorage = localStorage;
geoMap(laender,mymap);

function geoMap(laender,mymap) {
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png	', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


window.localStorage.setItem("laender",JSON.stringify(laender));
landHinzufuegen('FR');
const visitedCountries = JSON.parse(localStorage.getItem("laender"));

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
   window.localStorage.setItem("TEST",document.getElementById("reiseziel").value);
  geoMap(laender,mymap);
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
    temp.splice(index-1,1);//korrektur für array beginnend null
    updateStorage("laender",temp);

}

/**
 * ersetzt land an stelle x beginnend mit 1
 * @param index
 * @param land
 */
function landAendern(index,land){
    let temp =  JSON.parse(window.localStorage.getItem("laender"));
    temp[index-1]=land;
}
