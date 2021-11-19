var reisen = {};

myStorage = localStorage;


function addNewReise() {

    var neueReise = {
        reisename: document.getElementById('reisename').value,
        reiseziel: document.getElementById('reiseziel').value,
        startdatum: document.getElementById('startdatum').value,
        enddatum: document.getElementById('enddatum').value
    }
    window.localStorage.setItem('reise', JSON.stringify(neueReise));
}

