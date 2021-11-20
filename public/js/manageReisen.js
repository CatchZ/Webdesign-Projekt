var getReise = JSON.parse(localStorage.getItem('reisenArray'));
//var btnReiseLoeschen = document.createElement('button'); idk

function showReisen() {
    var table = document.getElementById("tabelleReiseuebersicht");

    for (let i=0; i<=getReise.length;i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = getReise[i].reisename;
        cell1.contentEditable = true;
        cell2.innerHTML = getReise[i].reiseziel;
        cell2.contentEditable = true;
        cell3.innerHTML = getReise[i].reisestart;
        cell3.contentEditable = true;
        cell4.innerHTML = getReise[i].reiseende;
        cell4.contentEditable = true;
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

    x-=1;
    alert(reisenAlt[x].reisename);

    reisenAlt.splice(x,1);

    localStorage.setItem('reisenArray', JSON.stringify(reisenAlt));

    var reisenArray = JSON.stringify(localStorage.getItem('reisenArray'));
}

function reiseAktualisieren(r){
    //soll neue Daten aufnehmen und speichern
}


