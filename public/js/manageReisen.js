var getReise = JSON.parse(localStorage.getItem('reisenArray'));
var btnReiseLoeschen = document.createElement('button');


function showReisen() {
    var table = document.getElementById("tabelleReiseuebersicht");

    for (let i=1; i<getReise.length;i++) {
        var btnTest =  document.createElement('button');
        btnTest.setAttribute('onclick','myFunction');

        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        //var cell6 = row.insertCell(5);


        cell1.innerHTML = getReise[i].reisename;
        cell2.innerHTML = getReise[i].reiseziel;
        cell3.innerHTML = getReise[i].reisestart;
        cell4.innerHTML = getReise[i].reiseende;
        //cell5.innerHTML = '<input type="button" value="Löschen" onClick="reiseLoeschen(this)">';
        cell5.innerHTML = '<button type="button" onclick="reiseLoeschen(this)">Löschen</button>';
    }

}
function reiseLoeschen(r) {
    var x = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabelleReiseuebersicht").deleteRow(x);
}




