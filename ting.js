var BREDDE = 600;
var HOJDE = 400;
var time = 0;
var minutter = 0;
var sekunder = 0;



function setup() {
    frameRate(30);
    createCanvas(BREDDE, HOJDE);

}

function draw() {
    background(200);

    textSize(23);
    text("Klokken er = " + time + ":" + minutter + ":" + sekunder, 50, 175);

    sekunder =+ sekunder + 0,033333;

    if (sekunder >= 60) {
        sekunder == 0;
        minutter =+ 1
    
        }

        if (minutter >= 60) {
            minutter == 0;
            time =+ 1
        
            }
}