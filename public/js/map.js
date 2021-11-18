
var mymap = L.map('map').setView([51.505, -0.09], 4);
myStorage = localStorage;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png	', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

let visitedCountries = localStorageSetUp();

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


/**
 * richtet Local Storage Variable reiseziel ein oder gibt aktuellen inhalt zurück
 * @returns {string}
 */
function  localStorageSetUp(){
  return ['DE', 'US', 'RU'];
}

/**
 * updated map mit Local Storage informationen
 * @constructor
 */
function UpdateMap(){
    const displayData = async () => {
        const geoJson = await loadData();
        const filteredData = {
            ...geoJson,
            features: geoJson.features.filter(feature =>
                !visitedCountries.includes(feature.properties.iso_a2))
        };
        L.geoJSON(filteredData).addTo(mymap);
    }
}