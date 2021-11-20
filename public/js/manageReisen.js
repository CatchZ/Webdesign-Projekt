var getReise = JSON.parse(localStorage.getItem('reisenArray'));
//var btnReiseLoeschen = document.createElement('button'); idk

function showReisen() {
    var table = document.getElementById("tabelleReiseuebersicht");

    for (let i=0; i<=getReise.length;i++) {
    //for (let i=getReise.length-1; i>0;i--) {
        //var btnTest =  document.createElement('button'); keine ahnung mehr wofür ich das geschrieben hatte
        //btnTest.setAttribute('onclick','myFunction');

        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        //cell1.innerHTML = '<p id="pReisename" contenteditable="true"></p>';
        cell1.innerHTML = getReise[i].reisename;

        // document.getElementById("pReisename").innerHTML = getReise[i].reisename;
        cell2.innerHTML = getReise[i].reiseziel;
        cell3.innerHTML = getReise[i].reisestart;
        cell4.innerHTML = getReise[i].reiseende;
        cell5.innerHTML = '<button type="button" onclick="reiseAktualisieren(this)">Aktualisieren</button>';
        cell6.innerHTML = '<button type="button" onclick="reiseLoeschen(this)">Löschen</button>';
    }
}

function reiseLoeschen(r) {
    //löscht von der Tabelle
    var x = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabelleReiseuebersicht").deleteRow(x);

    //löscht aus dem localStorage
    var reisenAlt = JSON.parse(localStorage.getItem('reisenArray')) || [];

    x-=2;
    reisenAlt.splice(x,1);

    localStorage.setItem('reisenArray', JSON.stringify(reisenAlt));

    var reisenArray = JSON.stringify(localStorage.getItem('reisenArray'));
}

function reiseAktualisieren(r){
    //soll neue Daten aufnehmen und speichern
}


