/*const dataGEO = async () => {
    const data = await fetch("https://datahub.io/core/country-list/r/0.html");
    return data.json()}*/
/**
 läd locales Jason
 */
const loadLeander =async ()=>
{
    const dataJ = await
        fetch("./js/LaenderData.json")
    return dataJ.json();
}

laenderlisteErsteller();
/**
 erstellt Länderliste für Selector im reisebuchenformuar
 */
async function laenderlisteErsteller (){

    const dataJ2 = await loadLeander();

    for (let i=0;i<=248;i++){
        let main = document.querySelector("#reiseziel");
        let p;

        p=document.createElement('option');
        p.setAttribute('value',dataJ2[i]["Code"]);
        p.innerText=dataJ2[i][["Name"]];
        main.appendChild(p);
    }
}
if("laender"in localStorage){} //todo
else{
    let leander=[];
    window.localStorage.setItem('laender',JSON.stringify(leander));
}
/**
 * Kartenobjekt
 */
let mymap = L.map('map').setView([51.505, -0.09], 4);
geoMap(mymap);

/**
 *befüllt map
 * @param mymap
 */
function geoMap(mymap) {

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png	', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    } ).addTo(mymap);

    let visitedCountries = JSON.parse(localStorage.getItem("laender"));
    //todo

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
function landHinzufuegen(land){ //todo
    let temp =  JSON.parse(window.localStorage.getItem("laender"));
    temp.push(land);
    updateStorage("laender",temp);
}

/**
 *
 * @param key variable die geupdatet werden soll
 * @param data
 */
function updateStorage(key,data){ //todo
    window.localStorage.removeItem(key);
    window.localStorage.setItem(key,JSON.stringify(data));
}

/**
 * entfernt land anstelle x beginnend ab 1
 * @param index
 */
function landEntfernen(index){ //todo
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