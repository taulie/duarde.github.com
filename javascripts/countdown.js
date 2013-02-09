// -------------------------------------------------------------------
// ------------- Autor: Patrick Saar - www.patrick-saar.de -----------
// ---------------------- JS Countdown v. 1.1 ------------------------
// ------------------ Copyright 2012 Patrick Saar --------------------
// -------------------------------------------------------------------
 
function countdown() {
    var tage = 'Tage';
    var countdown_d, countdown_h, countdown_m, countdown_s;
    var ausgabe_s, ausgabe_m, ausgabe_h;
    var endTime = [];
    var text = [];
    var i = 0;
                 
                 
    // Hier alle Termine chronologisch(!) mit Datum und Text anlegen
    endTime[0] = new Date(2012, 4, 12, 20, 0, 0); //Jahr, Monat - 1 !!!!!!!, Tag, Stunden, Minuten, Sekunden
    text[0] = 'zum DFB Pokal Finale 2012 in Berlin';
    endTime[1] = new Date(2012, 4, 19, 20, 45, 0); //Jahr, Monat - 1 !!!!!!!, Tag, Stunden, Minuten, Sekunden
    text[1] = 'zum Championsleague Finale 2012 in München';
    endTime[2] = new Date(2012, 5, 8, 18, 0, 0); //Jahr, Monat - 1 !!!!!!!, Tag, Stunden, Minuten, Sekunden
    text[2] = 'zum Beginn der Fußball EM 2012';
    endTime[3] = new Date(2012, 6, 1, 20, 45, 0); //Jahr, Monat - 1 !!!!!!!, Tag, Stunden, Minuten, Sekunden
    text[3] = 'zum Fußball EM Finale 2012';
    endTime[4] = new Date(2012, 7, 24, 20, 30, 0); //Jahr, Monat - 1 !!!!!!!, Tag, Stunden, Minuten, Sekunden
    text[4] = 'zum Start in die 50. Bundesliga Saison';            
    endTime[5] = new Date(2013, 4, 18, 15, 30, 0); //Jahr, Monat - 1 !!!!!!!, Tag, Stunden, Minuten, Sekunden
    text[5] = 'zum letzten Spieltag der Bundesliga Saison 12/13';
    endTime[6] = new Date(2013, 5, 1, 20, 0, 0); //Jahr, Monat - 1 !!!!!!!, Tag, Stunden, Minuten, Sekunden
    text[6] = 'zum DFB Pokal Finale 2013 in Berlin';
                 
                 
    // Berechnung des nächsten Termins           
    var timeNow = new Date();
    while((endTime[i] - timeNow) < 0) {
        i++;
    }
    var diffTime = endTime[i] - timeNow; //in Millisekunden
    diffTime = Math.floor(diffTime/1000);
     
    //Berechnung der Tage, Stunden, Minuten, Sekunden
    if(diffTime >= 0) {
        countdown_d = Math.floor(diffTime / 86400);
        diffTime = diffTime % 86400;
        countdown_h = Math.floor(diffTime / 3600);
        diffTime = diffTime % 3600;
        countdown_m = Math.floor(diffTime / 60);
        countdown_s = diffTime % 60;
     
        if(countdown_s < 10) ausgabe_s = '0'+countdown_s;
        else ausgabe_s = countdown_s;
        if(countdown_m < 10) ausgabe_m = '0'+countdown_m;
        else ausgabe_m = countdown_m;
        if(countdown_h < 10) ausgabe_h = '0'+countdown_h;
        else ausgabe_h = countdown_h;
        if(countdown_d == 1) {
            tage = 'Tag';
        }   
         
        // verbleibende Zeit und Termintext schreiben
        document.getElementById('countdown').innerHTML = 'Noch <b>'+countdown_d+'</b> '+tage+' und <b>'+ausgabe_h+':'+ausgabe_m+':'+ausgabe_s+
        '</b> bis '+text[i];
    }
    else {
        document.getElementById('countdown').style.display = 'none'; 
    }
    setTimeout(countdown, 1000);
}
window.onload = countdown(); // Countdown anstoßen
