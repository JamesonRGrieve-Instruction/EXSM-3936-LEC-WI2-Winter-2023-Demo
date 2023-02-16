// https://cdn.pixabay.com/photo/2022/11/10/20/12/dog-7583611_960_720.jpg

// Set up our array to store our data.
let readJSON = localStorage.getItem("exsm3936_images");
let images = [];
if (readJSON)
{
    images = JSON.parse(readJSON);
    for (image of images)
    {
        generateImage(image);
    }
}


// Set up our references for our text fields and buttons.
const addButton = document.querySelector("header button");
const searchField = document.querySelector("#search");
const urlField = document.querySelector("#url");
const descField = document.querySelector("#description");
const tagField = document.querySelector("#tags");

addButton.addEventListener("click", (event) => {
    // Prevent the button from refresing the page.
    event.preventDefault();

    // Map our text fields into the array data for future reference.
    const newImageObj = {
        url: urlField.value, 
        description: descField.value, 
        tags: tagField.value.split(' ')
    };
   
    generateImage(newImageObj);
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
    localStorage.setItem("exsm3936_images", JSON.stringify(images));


});
function generateImage(newImageObj)
{
    const newImageContainer = document.createElement("div");
    newImageObj.renderedImage = newImageContainer; 
     // Append the image with the src, title and alt attributes set.
     newImageContainer.appendChild(Object.assign(document.createElement("img"), {src: newImageObj.url, title:newImageObj.description, alt: newImageObj.description}));

     // Alternative to Object.assign():
     /*
     const newImage = document.createElement("img");
     newImage.src = newImageObj.url;
     newImage.title = newImageObj.description;
     newImage.alt = newImageObj.description;
     newImageContainer.appendChild(newImage);
     */
 
     // Append the description with the inner text set.
     newImageContainer.appendChild(Object.assign(document.createElement("p"), {innerText: newImageObj.description}));
     // Create the span to house the tag links.
     const newImageTagsContainer = document.createElement("span");
     // For each tag stored in the tags field of the object, create a new tag link.
     for (tag of newImageObj.tags)
     {
         const newTag = Object.assign(document.createElement("a"), {innerText: `#${tag}`, href:"#"});
         newTag.addEventListener("click", (e) => {
             // Pull the hashtag off and set the search term.
             searchField.value = e.target.innerText.slice(1);
             // Force the search to occur.
             filterPage(searchField.value);
         });
         newImageTagsContainer.appendChild(newTag);
     }
     // Add the tag link container span to the div.
     newImageContainer.appendChild(newImageTagsContainer);
         // Add the div to the page.
     document.querySelector("main").appendChild(newImageContainer);
}


// Whenever the text in the input field is modified by keyboard input.
// We still have to fire this manually if we change the value directly.
searchField.addEventListener("input", (e) => {
    filterPage(e.target.value);
});

function filterPage(text) {
    // Create a copy of the images array including only images where the text is in the description or the tags.
    for (storedImage of images) {
        // If the image is included in the search term...
        if (storedImage.description.includes(text) || storedImage.tags.some(y => y.includes(text)))
        {
            // Unhide it.
            storedImage.renderedImage.classList.remove("hidden");
        }
        else
        {
            // Hide it.
            storedImage.renderedImage.classList.add("hidden");
        }
    }
    
}