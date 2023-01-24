const toDoList = document.querySelector("main>section>ul");
const toDoInput = document.querySelector("main>form>input");

// When the 'Submit' button is clicked:
document.querySelector("#submit").addEventListener("click", (e) => {
    // Because our button is inside a form, clicking the button will submit the form by default, refreshing the page.
    // To avoid that, we can take our event argument and prevent the default behaviour (the submission).
    e.preventDefault();

    if (toDoInput.value.trim() !== "")
    {
        // Generate our new item.
        const newToDoItem = document.createElement("li");
        // Create the checkbox. Assign the type attribute to "checkbox".
        const newToDoCheckbox = Object.assign(document.createElement("input"), {type: "checkbox"});

        // When the checkbox is clicked, remove the list item.
        newToDoCheckbox.addEventListener("click", (e) => {
            newToDoItem.remove();
            // Rather than using parentElement or parentNode, we can use newToDoItem since it's already a reference to the list item.
            // newToDoCheckbox.parentElement.remove();
        });
        // Add the checkbox to the item.
        newToDoItem.appendChild(newToDoCheckbox);

        // At this point, we should have this:
        // <li><input type="checkbox" /></li>

        newToDoItem.appendChild(document.createTextNode(toDoInput.value));

        // At this point, we should have this:
        // <li><input type="checkbox" />$INPUT_TEXT</li>

        toDoList.appendChild(newToDoItem);
    }
    // Clear the input.
    toDoInput.value = "";
});

// When the 'Clear' button is clicked:
document.querySelector("#clear").addEventListener("click", (e) => {
    e.preventDefault();
    // Remove everything inside the unordered list.
    toDoList.innerHTML = "";

    // If you want to remove the children programatically, you can do this instead:
    // (While there are still children, remove the first child)
    // while (toDoList.children.length > 0) toDoList.children[0].remove();

    // Clear the input.
    toDoInput.value = "";
});