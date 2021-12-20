var addReise = function (name, ziel, start, ende) {
    var startdatum = new Date(start);
    var enddatum = new Date(ende);

    if (startdatum.getTime() > enddatum.getTime()) {
        alert("Enddatum muss nach Startdatum liegen!");
    }
    else {
        document.getElementById("addReiseFeedback").innerHTML = "Neue Reise hinzugefügt!";

        //todo
        var alleReisen = JSON.parse(localStorage.getItem('reisenArray')) || [];

        var neueReise = {
            'reisename': name,
            'reiseziel': ziel,
            'reisestart': start,
            'reiseende': ende
        };

        alleReisen.push(neueReise);

        //todo
        localStorage.setItem('reisenArray', JSON.stringify(alleReisen));

        myFunction();
    }
};

function myFunction(){
    var getReise = JSON.parse(localStorage.getItem('reisenArray'));
   // document.getElementById("testForm").innerHTML = getReise[getReise.length-1].reisename;
}