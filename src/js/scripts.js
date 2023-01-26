const messageBox = document.querySelector("#history");
const inputBox = document.querySelector("#message");
const timeouts = [];

document.querySelector("#send").addEventListener("click", sendMessage);
// Most web events tied to keys use keydown instead of keyup.
// When we tried keyup, we wound up with ghost events because the default keydown enter behaviour wasn't being prevented.
// Note that the prevent default had to be moved into the enter case, otherwise all keys stopped working.
window.addEventListener("keydown", (e) => {
    switch (e.key.toLowerCase())
    {
        case "enter":
            e.preventDefault();
            // Using activeElement, we can test to see if we have focus in the input box, otherwise enter shouldn't submit.
            if (document.activeElement === inputBox) sendMessage(e);
            break;
    }
});
document.querySelector("#clear").addEventListener("click", (e) => {
    e.preventDefault();
    messageBox.innerHTML = "";
    inputBox.value = "";
    for (timeout of timeouts) clearTimeout(timeout);
});

function sendMessage(event)
{
    event.preventDefault();
    postMessage("You", inputBox.value);
    inputBox.value = "";
    timeouts.push(setTimeout(() => {
        postMessage();
    }, genTimeout()));
}
function genTimeout(min = 10, max = 30)
{
    // Generate a random number between 0 and 1, multiply it by 20 (random number between 0 and 20), and add 10 (random number between 10 and 30).
    return Math.round(Math.random()*(max-min)+min)*1000;
}
function postMessage(from="AI", message="Lorem ipsum dolor sit amet.")
{
    // Append a paragraph containing our built message to the message box.
    messageBox.appendChild(Object.assign(document.createElement("p"), {innerText: `[${genTimestamp()}] ${from}: ${message}`}));
}
function genTimestamp() {
    const currentDate = new Date();
    // Grab the hour, minute and second count of the current time, convert those numbers to strings, and pad them with leading zeroes if required.
    return `${String(currentDate.getHours()).padStart(2, "0")}:${String(currentDate.getMinutes()).padStart(2, "0")}:${String(currentDate.getSeconds()).padStart(2, "0")}`;
}