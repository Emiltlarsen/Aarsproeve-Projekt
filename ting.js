var BREDDE = 600;
var HOJDE = 400;
var time = 0;
var minutter = 0;
var sekunder = 0;

var time0 = 0;
var minutter0 = 0;
var sekunder0 = 0;


function setup() {
    frameRate(30);
    createCanvas(BREDDE, HOJDE);

}

function draw() {
    background(200);

    textSize(23);

    var decisek = sekunder.toFixed(1);

    sekunder =+ sekunder + 1/30;

    if (sekunder >= 60) {
        sekunder = 0;
        minutter = minutter + 1;
        }

    if (minutter >= 60) {
        minutter = 0;
        time = time + 1;
            }

    if (time >= 24) {
        time = 0;
    }


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


/*
    if (minutter >= 10){

        } else {
            text("Klokken er = " + time0 + time + ":" + minutter0 + minutter + ":" + sekunder0 + decisek, 50, 175);
        }

    if (time >= 10){
        
        } else {
            text("Klokken er = " + time0 + time + ":" + minutter0 + minutter + ":" + sekunder0 + decisek, 50, 175);
        }
*/
}