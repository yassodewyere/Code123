let seconds: number = 0;
let minutes: number = 0;
let hours: number = 0;

let running: boolean = false;
let timer: any;

function updateDisplay() {
  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");

  document.getElementById("time")!.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (!running) {
    running = true;

    timer = setInterval(() => {
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
  let lapTime = document.getElementById("time")!.innerText;
  let li = document.createElement("li");
  li.innerText = lapTime;

  document.getElementById("laps")!.appendChild(li);
}

function clearLaps() {
  document.getElementById("laps")!.innerHTML = "";
}

(window as any).start = start;
(window as any).stop = stop;
(window as any).reset = reset;
(window as any).lap = lap;
(window as any).clearLaps = clearLaps;