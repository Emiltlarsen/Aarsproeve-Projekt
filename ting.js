var tid = 0;
var start = 5;
var afspil = false;



let mySound;
function preload(){
    soundFormats('mp3', 'ogg');
    mySound = loadSound('alarm.mp3');
} 

function setup(){

}

function draw(){
if (tid==5){
    afspil = true;
}

if (afspil = true) {
    mySound.setVolume(3.0);
    mySound.play();
    //mySound.loop();
    afspil = false;
}

}