// For each of them, add the event listener.
for (button of document.querySelectorAll("main button")) button.addEventListener("click", createTimer);

document.querySelector("header button").addEventListener("click", () => {
    const newButton = document.createElement("button");
    newButton.innerText = "Remove Me!";
    newButton.addEventListener("click", deleteSelf);
    document.querySelector("main").appendChild(newButton);
});

let activeInterval;

function createTimer(event) {
    // Clear the interval if it already exists.
    clearInterval(activeInterval);

    // A timeout runs once (like a timer). Once the timer ends, the associated method will run.
    setTimeout(() => {
        console.log("5 second timer has passed!");
    }, 5000);

    // An interval runs multiple times (like a stopwatch / laps). Every time the interval passes, the associated method will run.
    activeInterval = setInterval(() => {
        console.log("2 second interval has passed!");
    }, 2000);
}

// Modification of elements with intervals / timers.
setInterval(() => {
    document.querySelector("h1").innerText = Number(document.querySelector("h1").innerText)+1;
}, 1000);
