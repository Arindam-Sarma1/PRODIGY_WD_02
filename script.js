let startTime, interval;
let isRunning = false;
let elapsedTime = 0;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const milliseconds = String(Math.floor(ms % 1000 / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
  document.getElementById('display').textContent = formatTime(elapsedTime);
}

document.getElementById('start').onclick = function() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now() - elapsedTime;
  interval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
};

document.getElementById('pause').onclick = function() {
  isRunning = false;
  clearInterval(interval);
};

document.getElementById('reset').onclick = function() {
  isRunning = false;
  clearInterval(interval);
  elapsedTime = 0;
  updateDisplay();
};
