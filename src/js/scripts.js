// https://cdn.pixabay.com/photo/2022/11/10/20/12/dog-7583611_960_720.jpg

/*
Breakout Room Tasks:

*/

let images = [];
const addButton = document.querySelector("header button");
const urlField = document.querySelector("header input:first-of-type");
const tagField = document.querySelector("header input:last-of-type");

addButton.addEventListener("click", (event) => {
    const newImage = document.createElement("img");
    newImage.addEventListener("click", (e) => {
        //3a) Also remove it from the array.
        // Replace the images array with a copy that has been filtered to remove the item we just removed.
        images = images.filter((x) => x.renderedImage !== newImage);
        //3) When you click an image, remove it (from the page).
        e.target.remove();
    });
    newImage.src = urlField.value;
    //2) When an image is added, store the url in the images array.
    //2a) Store the image in the array as a property of an object (either anonymous, or classed)
    //4) Add a second text field in which the user can add "tags" - single words separated by a space that will be stored as a "tags" field of the object in the array (as a string array).
    //e.g. tags: ["Cute", "Dog", "Funny"]
    images.push({url: urlField.value, renderedImage: newImage, tags: tagField.value.split(' ')});
    console.log(images);
    // 1) When we click the add button, clear the text field.
    urlField.value = "";
    document.querySelector("main").appendChild(newImage);
});

// Example of an anonymous object.
const myObject = {
    prop1: "Test",
    prop2: "Again"
};