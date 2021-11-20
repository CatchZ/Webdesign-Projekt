var getReise = JSON.parse(localStorage.getItem('reisenArray'));
//var btnReiseLoeschen = document.createElement('button');

function showReisen() {
    var table = document.getElementById("tabelleReiseuebersicht");

    for (let i=0; i<=getReise.length;i++) {
    //for (let i=getReise.length-1; i>0;i--) {
        //var btnTest =  document.createElement('button');
        //btnTest.setAttribute('onclick','myFunction');

        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        //var cell6 = row.insertCell(5);

        cell1.innerHTML = getReise[i].reisename;
        //var reisenametemp = cell1.innerHTML;
        cell2.innerHTML = getReise[i].reiseziel;
        cell3.innerHTML = getReise[i].reisestart;
        cell4.innerHTML = getReise[i].reiseende;
        //cell5.innerHTML = '<input type="button" value="Löschen" onClick="reiseLoeschen(this)">';
        cell5.innerHTML = '<button type="button" onclick="reiseLoeschen(this)">Löschen</button>';
    }
}

function reiseLoeschen(r, reisename) {
    var x = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabelleReiseuebersicht").deleteRow(x);

    localStorage.removeItem(reisename);
    /*
    var reisen = JSON.parse(localStorage.getItem('reisenArray'));

    for (var j=0; j<reisen.length; j++) {
        var reisen = JSON.parse(reisen[i]);
        if (reisen.reisename === reisename) {
            reisen.splice(j, 1);
        }
    }
    reisen = JSON.stringify(reisen); //Restoring object left into items again
    localStorage.setItem("reisenArray", reisen);
     */

}




