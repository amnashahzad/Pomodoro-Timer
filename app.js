const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let totalTime = 25 * 60; // 25 minutes in seconds
let timerInterval;

function updateTimerDisplay() {
    const minutes = Math.floor(totalTime / 60).toString().padStart(2, '0');
    const seconds = (totalTime % 60).toString().padStart(2, '0');
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (totalTime > 0) {
                totalTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert('Time is up! Take a break.');
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    totalTime = 25 * 60;
    updateTimerDisplay();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Initial display
updateTimerDisplay();
