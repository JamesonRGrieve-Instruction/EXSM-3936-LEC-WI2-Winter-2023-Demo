const toDoList = document.querySelector("main>section>ul");
const toDoInput = document.querySelector("main>form>input");

// When the 'Submit' button is clicked:
document.querySelector("main>form>button").addEventListener("click", (e) => {
    // Because our button is inside a form, clicking the button will submit the form by default, refreshing the page.
    // To avoid that, we can take our event argument and prevent the default behaviour (the submission).
    e.preventDefault();

    if (toDoInput.value.trim() !== "")
    {
        // Generate our new item.
        const newToDoItem = document.createElement("li");
        // Create the checkbox.
        const newToDoCheckbox = document.createElement("input");
        newToDoCheckbox.setAttribute("type", "checkbox");
        // Add the checkbox to the item.
        newToDoItem.appendChild(newToDoCheckbox);

        // At this point, we should have this:
        // <li><input type="checkbox" /></li>

        const newToDoItemText = document.createTextNode(toDoInput.value);
        newToDoItem.appendChild(newToDoItemText);

        // At this point, we should have this:
        // <li><input type="checkbox" />$INPUT_TEXT</li>

        toDoList.appendChild(newToDoItem);
    }

    toDoInput.value = "";
});