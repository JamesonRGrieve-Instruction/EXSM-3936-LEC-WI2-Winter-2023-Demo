const clickMe = document.querySelector(".listen");
const inputField = document.querySelector("input");

clickMe.addEventListener("click", runThis);

function runThis(e) {
    console.log(inputField.value);
    inputField.value = "Click!";
}