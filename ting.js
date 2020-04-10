var tid = 0;
var start = 5;
var afspil = false;
var lyd;
var sluk;
var snoozeowo;

function preload(){
    lyd = loadSound('alarm.mp3');
} 

function setup(){
    createCanvas(200,200)
    sluk = createButton("stop");
    sluk.mousePressed(togglePlaying);
    snoozeowo = createButton("Snoozeowo");
    snoozeowo.mousePressed(uwu);
}

function uwu(){
    lyd.stop();
    lyd = lyd + //VI SLUTTER HER FRA, DE SEJE ARBJEDER VIDRE HERFRA ALTSÅ JONAS OG EMIL. IKKE RASMUS OG JENNER, DOG ER JENNER OGSÅ LIDT SEJ, BARE EN SMULE.
}

function togglePlaying(){
    lyd.stop();
}

function draw(){
/*
if (tid>=start){
    afspil = true;
    return afspil;
}*/

if (tid>=start) {
    lyd.setVolume(0.1);
    lyd.play();
    start = start + 1000000;
    //mySound.loop();
}

}