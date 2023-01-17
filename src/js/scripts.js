const clickMe = document.querySelector(".listen");
const inputField = document.querySelector("input");

clickMe.addEventListener("click", (e) => {
    console.log(inputField.value);
    inputField.value = "Click!";
});

// NOT SYNTACTICALLY CORRECT - DOESN'T DEFINE Y
// PURELY FOR ILLUSTRATION
function nameDoesntMatter (x) {
    return y;
}

(x) => { return y; }


(x) => y;