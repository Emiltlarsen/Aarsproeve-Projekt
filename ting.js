var BREDDE = 600;
var HOJDE = 400;
var time = 00;
var minutter = 00;
var sekunder = 00;



function setup() {
    frameRate(30);
    createCanvas(BREDDE, HOJDE);

}

function draw() {
    background(200);

    textSize(23);

    var decisek = sekunder.toFixed(3);

    sekunder =+ sekunder + 0.033333;

    if (sekunder >= 60) {
        sekunder = 0;
        minutter = minutter + 1;
    
        }

        if (minutter >= 60) {
            minutter = 0;
            time = time + 1;
        
            }

            text("Klokken er = " + time + ":" + minutter + ":" + decisek, 50, 175);

}