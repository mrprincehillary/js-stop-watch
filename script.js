let timerInterval;
let isRunning = false;
let elapsedTime = 0; // in milliseconds

const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(value) {
    return String(value).padStart(2, '0');
}

function updateTimer() {
    elapsedTime += 100; // increment by 100 milliseconds
    const minutes = Math.floor((elapsedTime / 1000) / 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 100);

    const formattedTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    timerDisplay.textContent = formattedTime;
}

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Resume';
        startStopBtn.classList.add('resume'); // Add orange class
        startStopBtn.classList.remove('stop'); // Remove red class
    } else {
        timerInterval = setInterval(updateTimer, 100);
        startStopBtn.textContent = 'Stop';
        startStopBtn.classList.add('stop'); // Add red class
        startStopBtn.classList.remove('resume'); // Remove orange class
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerDisplay.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    isRunning = false;
});