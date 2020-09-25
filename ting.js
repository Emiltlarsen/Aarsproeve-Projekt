//bruges til størrelse af canvas
var BREDDE = 600;
var HOJDE = 400;

//reele værdier der viser hvad klokken er
var time = 0;
var minutter = 0;
var sekunder = 0;

//bruges til at få to cifre mellem hver ":" til fremvisning af klokken
var time0 = 0;
var minutter0 = 0;
var sekunder0 = 0;

//sætte hvor mange frames per sekund der køres med
//Variablen benyttes både i setup, til frameRate, og i draw, til at sekunder forløber sig med den rigtige hastighed
var framespersek = 30;

function setup() {
    frameRate(framespersek);
    createCanvas(BREDDE, HOJDE);


    slider = createSlider(0, 60, 0, 1);
    slider.position(20, 100);
    slider.style('width', '125px');

}

function draw() {
    background(200);

    let tidsataf = slider.value();
    text("Der er sat " + tidsataf + " minutter af til at nå din begivenhed", 20, 100)









//sekunder forløber sig med...
    sekunder =+ sekunder + 1/framespersek;

//sekunder overskrider ikke 60, hvis den gør tilføjes et minut
    if (sekunder >= 60) {
        sekunder = 0;
        minutter = minutter + 1;
        }
//minutter overskrider ikke 60, hvis den gør tilføjes en time
    if (minutter >= 60) {
        minutter = 0;
        time = time + 1;
        }
//timer overskrider ikke 24, hvis den gør går timer i nul og du har dermed en ny dag
    if (time = 24) {
        time = 0;
        }



    var decisek = sekunder.toFixed(1);
    textSize(23);

    if (sekunder >= 10, minutter >= 10, time >= 10){
            text("Klokken er = " + time + ":" + minutter + ":" + decisek, 50, 175);
            }

            else if (sekunder >= 10, minutter >= 10){
                text("Klokken er = " + time0 + time + ":" + minutter + ":" + decisek, 50, 175);
            }

            else if (sekunder >= 10, time >= 10){
                text("Klokken er = " + time + ":" + minutter0 + minutter + ":" + decisek, 50, 175);
            }

            else if (minutter >= 10, time >= 10){
                text("Klokken er = " + time + ":" + minutter + ":" + sekunder0 + decisek, 50, 175);
            }

            else if (sekunder >= 10){
                text("Klokken er = " + time0 + time + ":" + minutter0 + minutter + ":" + decisek, 50, 175);
            }

            else if (minutter >= 10){
                text("Klokken er = " + time0 + time + ":" + minutter + ":" + sekunder0 + decisek, 50, 175);
            }

            else if (time >= 10){
                text("Klokken er = " + time + ":" + minutter0 + minutter + ":" + sekunder0 + decisek, 50, 175);
            }

            else {
                text("Klokken er = " + time0 + time + ":" + minutter0 + minutter + ":" + sekunder0 + decisek, 50, 175);
            }

                
}