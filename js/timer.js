var myVar;
var timer = document.getElementById("userInput");
var countDownSeconds;
function startTime() {
    myVar = setInterval(start, 1000);
    document.getElementById("timerr").innerHTML = timer.value;
    countDownSeconds = timer.value;
}

function start() {
    countDownSeconds--;
    document.getElementById("timerr").innerHTML = countDownSeconds;
    if (countDownSeconds == 0) {
        stop();
        document.getElementById("timerr").innerHTML = "0";
        alert("Time is over");
    }
}

function stop() {
    clearInterval(myVar);
}