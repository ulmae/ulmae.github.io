var timerActive = false;
var totalSeconds = 0;
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var display = document.getElementsByClassName('display');

function timer() {
    console.log('sec', timerActive)
    if (timerActive) {
        // Convert to seconds
        var hh = hours.value ? hours.value * 3600 : 0;
        var mm = minutes.value ? minutes.value * 60 : 0;
        var ss = seconds.value ? parseInt(seconds.value) : 0;
        totalSeconds = hh + mm + ss;
        // Decrease one second
        totalSeconds = totalSeconds - 1;
        if (totalSeconds >= 0) {
            if (totalSeconds <= 10) {
                display[0].style.color = "red";
                display[1].style.color = "red";
                display[2].style.color = "red";
            }
            timerActive = true;
            // Reconvert to hh/mm/ss
            hours.value = Math.floor(totalSeconds / 3600);
            minutes.value = Math.floor(totalSeconds % 3600 / 60);
            seconds.value = Math.floor(totalSeconds % 3600 % 60);

        } else {
            timerActive = false;
        }

    }
}

function reset() {
    timerActive = false;
    totalSeconds = 0;
    hours.value = '';
    minutes.value = '';
    seconds.value = '';
    display[0].style.color = "greenyellow";
    display[1].style.color = "greenyellow";
    display[2].style.color = "greenyellow";
}

function start() {
    timerActive = true;
}

setInterval(timer, 1000);