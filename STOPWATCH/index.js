// Get the time display element
let timeDisplay = document.querySelector(".time");
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;

// Start the stopwatch
function start() {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 10); // Update every 10ms for millisecond precision
    }
}

// Stop the stopwatch
function stop() {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
}

// Restart the stopwatch
function restart() {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    ms = 0;
    timeDisplay.textContent = "00:00:00:00";
}

// Update the time display
function updateTime() {
    elapsedTime = Date.now() - startTime;
    
    ms = Math.floor((elapsedTime % 1000) / 10);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    // Format time with leading zeros
    ms = ms < 10 ? "0" + ms : ms;
    secs = secs < 10 ? "0" + secs : secs;
    mins = mins < 10 ? "0" + mins : mins;
    hrs = hrs < 10 ? "0" + hrs : hrs;

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${ms}`;
}