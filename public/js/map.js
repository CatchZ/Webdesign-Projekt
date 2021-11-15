
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossOrigin=""/>

const mymap = L.map('map').setView([51.505, -0.09], 4);
myStorage = localStorage;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png	', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

const visitedCountries = ['DE', 'US', 'RU']; <!--"localStorage.getIteam('reiseziel')"-->

const loadData = async () => {
    const data = await fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson');
    return data.json();
}

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


function formularFilterSelection(){
    const newElem = document.getElementsByName("reiseziel").value;
    visitedCountries.push(newElem)
    localStorage.setItem(reiseziel,)
    const obj = JSON.parse();

}