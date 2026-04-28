var seconds = 0;
var minutes = 0;
var hours = 0;
var running = false;
var timer;
function updateDisplay() {
    var h = hours.toString().padStart(2, "0");
    var m = minutes.toString().padStart(2, "0");
    var s = seconds.toString().padStart(2, "0");
    document.getElementById("time").innerText = "".concat(h, ":").concat(m, ":").concat(s);
}
function start() {
    if (!running) {
        running = true;
        timer = setInterval(function () {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}
function stop() {
    running = false;
    clearInterval(timer);
}
function reset() {
    stop();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}
function lap() {
    var lapTime = document.getElementById("time").innerText;
    var li = document.createElement("li");
    li.innerText = lapTime;
    document.getElementById("laps").appendChild(li);
}
function clearLaps() {
    document.getElementById("laps").innerHTML = "";
}
