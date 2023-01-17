const clickMe = document.querySelector(".listen");
const inputField = document.querySelector("input");

clickMe.addEventListener("click", (e) => {
    console.log(inputField.value);
    inputField.value = "Click!";
});

