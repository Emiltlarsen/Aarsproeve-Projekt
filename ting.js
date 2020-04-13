var BREDDE = 600;
var HOJDE = 400;


var time = 7;
var minutter = 15;
var sekunder = 0;
var sekunder_alt; 

var time0 = 0;
var minutter0 = 0;
var sekunder0 = 0;


var start = 1;
var afspil = false;
var lyd;
var sluk;
var snooze1;


function preload(){
    lyd = loadSound('alarm.mp3');
} 


var todaysClasses = {
    0: {
        'timestamp': '04-01-2020-08:15:00',
        'name': 'Matematik',
        'description': 'Vi regner osv. ing'
    },
    1: {
        'timestamp': '04-01-2020-12:05:00',
        'name': 'Dansk',
        'description': 'Læser digte osv.'
    },
    2: {
        'timestamp': '04-01-2020-14:20:00',
        'name': 'Programmering',
        'description': 'Matrix ing'
    },
}


var returnToClock = getFirstClassStartTime(todaysClasses)
console.log(returnToClock)

console.log('Timer i sekunder:' + ((returnToClock.getHours()*60)*60))
console.log('Minutter i sekunder:' + (returnToClock.getMinutes()*60))
console.log('Sekunder:' + returnToClock.getSeconds())


// Sammensætter en dag med random fag
function getFirstClassStartTime(classes) {
    var count = Object.keys(classes).length
    var dayStarted

    console.log('Skema:')
    console.log('_______________')

    for (let index = 0; index < count; index++) {
        const currentClass = classes[index];

        // Fagets startidspunkt
        let classTime = new Date(currentClass.timestamp)

        console.log('Fag: ' + currentClass.name)
        console.log('Timen starter kl. ' + classTime.toLocaleTimeString() )
        console.log('Fag beskrivelse: ' + currentClass.name)
        console.log('_______________')
        
        // Skoledagen startede her fordi det er første entry i objektet
        if(index == 0) {
            dayStarted = classTime
        }
    }

    return dayStarted
}



function setup() {
    frameRate(30);
    createCanvas(BREDDE, HOJDE);
    sluk = createButton("Stop");
    sluk.mousePressed(togglePlaying);
    snooze1 = createButton("Snooze");
    snooze1.mousePressed(snooze);
}


    function snooze(){
        lyd.stop();
        start = sekunder_alt + 300; 
    }

    function togglePlaying(){
        lyd.stop();
    }


function draw() {
    background(200);

    textSize(23);

    var decisek = sekunder.toFixed(1);

    sekunder =+ sekunder + 1/30;

    sekunder_alt = (time * 3600) + (minutter * 60) + sekunder;

    
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


    if (sekunder_alt>=start) {
        lyd.setVolume(0.1);
        lyd.play();
        start = start + 1000000;
        //mySound.loop();
    }


    //herunder ses koden vis opgave er at vise hvad klokken er i form af text. If statements bruges 
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
