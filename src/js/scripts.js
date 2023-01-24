// https://cdn.pixabay.com/photo/2022/11/10/20/12/dog-7583611_960_720.jpg

// Set up our array to store our data.
let images = [];

// Set up our references for our text fields and buttons.
const addButton = document.querySelector("header button");
const searchField = document.querySelector("#search");
const urlField = document.querySelector("#url");
const descField = document.querySelector("#description");
const tagField = document.querySelector("#tags");

addButton.addEventListener("click", (event) => {
    // Prevent the button from refresing the page.
    event.preventDefault();

    const newImageContainer = document.createElement("div");
    // Map our text fields into the array data for future reference.
    const newImageObj = {
        url: urlField.value, 
        renderedImage: newImageContainer, 
        description: descField.value, 
        tags: tagField.value.split(' ')
    };
    // Append the image with the src, title and alt attributes set.
    newImageContainer.appendChild(Object.assign(document.createElement("img"), {src: newImageObj.url, title:newImageObj.description, alt: newImageObj.description}));
    // Append the description with the inner text set.
    newImageContainer.appendChild(Object.assign(document.createElement("p"), {innerText: newImageObj.description}));
    // Create the span to house the tag links.
    newImageTagsContainer = document.createElement("span");
    // For each tag stored in the tags field of the object, create a new tag link.
    for (tag of newImageObj.tags)
    {
        newImageTagsContainer.appendChild(Object.assign(document.createElement("a"), {innerText: `#${tag}`, href:"#"}));
    }
    // Add the tag link container span to the div.
    newImageContainer.appendChild(newImageTagsContainer);

    // We're not handling removals this way anymore.
    /*
    newImage.addEventListener("click", (e) => {
        // Replace the images array with a copy that has been filtered to remove the item we just removed.
        images = images.filter((x) => x.renderedImage !== newImage);
        e.target.remove();
    });
    */

    // Clear the input fields.
    urlField.value = "";
    descField.value = "";
    tagField.value = "";

    // Add the object to the array.
    images.push(newImageObj);

    // Add the div to the page.
    document.querySelector("main").appendChild(newImageContainer);
});