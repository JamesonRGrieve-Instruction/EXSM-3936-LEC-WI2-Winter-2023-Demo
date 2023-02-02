const toDoListPending = document.querySelector("#pending>ul");
const toDoListCompleted = document.querySelector("#completed>ul");
const toDoInput = document.querySelector("main>form>input");

// When the 'Submit' button is clicked:
document.querySelector("#submit").addEventListener("click", (e) => {
    // Because our button is inside a form, clicking the button will submit the form by default, refreshing the page.
    // To avoid that, we can take our event argument and prevent the default behaviour (the submission).
    e.preventDefault();
    generateToDo(toDoInput.value);
    // Clear the input.
    toDoInput.value = "";
});

function generateToDo(content) {
    if (content.trim() !== "")
    {
        const newToDoCheckbox = Object.assign(document.createElement("input"), {type: "checkbox"});
        const textContent = document.createTextNode(content);
        const newToDoEditInput = document.createElement("input");
        const newToDoEditButton = Object.assign(document.createElement("button"), {innerText: "Edit"});
        const newToDoSaveButton = Object.assign(document.createElement("button"), {innerText: "Save"});
        const newToDoCopyButton = Object.assign(document.createElement("button"), {innerText: "Copy"});
        newToDoCheckbox.addEventListener("click", (e) => {
            // If the target's parent's parent is the pending list, append it to the completed list and vice-versa.
            // This works because an element can only be in one place at a time, so re-appending implicitly removes it from the original location.
            (e.target.parentElement.parentElement===toDoListPending?toDoListCompleted:toDoListPending).appendChild(e.target.parentElement);
        });
        newToDoSaveButton.addEventListener("click", (e) => {
            textContent.textContent = newToDoEditInput.value;
            newToDoEditInput.replaceWith(textContent);
            newToDoSaveButton.replaceWith(newToDoEditButton);
        });
        newToDoEditButton.addEventListener("click", (e) => {
            newToDoEditInput.value = textContent.textContent;
            textContent.replaceWith(newToDoEditInput);
            newToDoEditButton.replaceWith(newToDoSaveButton);
        });
        newToDoCopyButton.addEventListener("click", (e) => {
            generateToDo(textContent.textContent);
        });

        const newToDoItem = document.createElement("li");
        newToDoItem.append(newToDoCheckbox, textContent, newToDoEditButton, newToDoCopyButton);
        toDoListPending.appendChild(newToDoItem);
    }
}

// When the 'Clear' button is clicked:
document.querySelector("#clear").addEventListener("click", (e) => {
    e.preventDefault();
    // Remove everything inside the unordered list.
    toDoListCompleted.innerHTML = "";

    // If you want to remove the children programatically, you can do this instead:
    // (While there are still children, remove the first child)
    // while (toDoList.children.length > 0) toDoList.children[0].remove();

    // Clear the input.
    toDoInput.value = "";
});