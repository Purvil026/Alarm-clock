const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

// Function to play the alarm audio
function ringAlarm(){
    audio.play()
}

// Function to set alarm
function setAlarm(){
    console.log('setting alarm');
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value); 
    now = new Date();

    let timeToAlarm = alarmDate - now;
    if (timeToAlarm >= 0){
        setTimeout(() => {
            ringAlarm();
        }, 5000);
    } 
}

// Function to display current date and time
function t() {
    var dt = new Date();
    document.getElementById('currentTime').innerHTML = dt;
}
t();
window.setInterval(t, 1000);