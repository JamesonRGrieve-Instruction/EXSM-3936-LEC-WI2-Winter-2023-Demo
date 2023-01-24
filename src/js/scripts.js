// https://cdn.pixabay.com/photo/2022/11/10/20/12/dog-7583611_960_720.jpg

let images = [];
const addButton = document.querySelector("header button");
const urlField = document.querySelector("header input:first-of-type");
const tagField = document.querySelector("header input:last-of-type");

addButton.addEventListener("click", (event) => {
    const newImage = document.createElement("img");
    newImage.addEventListener("click", (e) => {
        // Replace the images array with a copy that has been filtered to remove the item we just removed.
        images = images.filter((x) => x.renderedImage !== newImage);
        e.target.remove();
    });
    newImage.src = urlField.value;
    //e.g. tags: ["Cute", "Dog", "Funny"]
    images.push({url: urlField.value, renderedImage: newImage, tags: tagField.value.split(' ')});
    console.log(images);
    urlField.value = "";
    document.querySelector("main").appendChild(newImage);
});