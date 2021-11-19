/*var beispielreise1 = {
    'reisename': 'Thailandreise',
    'reiseziel': 'Thailand',
    'reisestart': 'start',
    'reiseende': 'ende'
}
var beispielreise2 = {
    'reisename': 'Party in Prague',
    'reiseziel': 'Tschechien',
    'reisestart': 'start',
    'reiseende': 'ende'
}
alleReisen.push(beispielreise1);
alleReisen.push(beispielreise2);

 */


var addReise = function (name, ziel, start, ende) {
    var alleReisen = JSON.parse(localStorage.getItem('reisenArray')) || [];

    var neueReise = {
        'reisename': name,
        'reiseziel': ziel,
        'reisestart': start,
        'reiseende': ende
    };

    alleReisen.push(neueReise);

    localStorage.setItem('reisenArray', JSON.stringify(alleReisen));

    document.getElementById("testForm").innerHTML = localStorage.getItem('reisenArray');
    myFunction();
};

function myFunction(){
    var getReise = JSON.parse(localStorage.getItem('reisenArray'));

    document.getElementById("testForm").innerHTML = getReise[getReise.length-1].reisename;

}

/*
function myFunction() {
var table = document.getElementById("tabelleReiseuebersicht");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
}

*/