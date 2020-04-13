var tid = 0;
var start = 5;
var afspil = false;
var lyd;
var sluk;
var snooze1;

function preload(){
    lyd = loadSound('alarm.mp3');
} 

function setup(){
    createCanvas(200,200)
    sluk = createButton("Stop");
    sluk.mousePressed(togglePlaying);
    snooze1 = createButton("Snooze");
    snooze1.mousePressed(snooze);
}

function snooze(){
    lyd.stop();
    start = tid + 300; 
}

function togglePlaying(){
    lyd.stop();
}

function draw(){

if (tid>=start) {
    lyd.setVolume(0.1);
    lyd.play();
    start = start + 1000000;
    //mySound.loop();
}

}
