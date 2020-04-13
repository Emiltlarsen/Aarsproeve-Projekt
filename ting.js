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

console.log('Timer:' + ((returnToClock.getHours()*60)*60))
console.log('Timer:' + (returnToClock.getMinutes()*60))
console.log('Timer:' + returnToClock.getSeconds())


// Dammensætter en dag med random fag
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
