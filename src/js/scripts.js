// Build an array of all of the buttons.
const buttons = document.querySelectorAll("button");

// For each of them, add the event listener.
for (button of buttons)
{
    button.addEventListener("click", (event) => {
        // Based on where I clicked, remove the button I clicked on.
        event.target.remove();
    });
}

