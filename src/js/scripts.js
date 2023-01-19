// For each of them, add the event listener.
for (button of document.querySelectorAll("main button")) button.addEventListener("click", deleteSelf);

document.querySelector("header button").addEventListener("click", () => {
    const newButton = document.createElement("button");
    newButton.innerText = "Remove Me!";
    newButton.addEventListener("click", deleteSelf);
    document.querySelector("main").appendChild(newButton);
});

function deleteSelf(event) {
    // Based on where I clicked, remove the button I clicked on.
    event.target.remove();
}