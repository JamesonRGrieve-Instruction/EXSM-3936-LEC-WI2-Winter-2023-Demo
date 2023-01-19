// Build an array of all of the buttons.
const buttons = document.querySelectorAll("main button");
const addButton = document.querySelector("header button");
// For each of them, add the event listener.
for (button of buttons)
{
    button.addEventListener("click", deleteSelf);
}

addButton.addEventListener("click", () => {
    const newButton = document.createElement("button");
    newButton.innerText = "Remove Me!";
    newButton.addEventListener("click", deleteSelf);
    document.querySelector("main").appendChild(newButton);
});

function deleteSelf(event) {
    // Based on where I clicked, remove the button I clicked on.
    event.target.remove();
}