const countingNumber = document.querySelector("#countingNumber");
const numberInput = document.querySelector("#numberInput");
let loadedNumber;
if ((loadedNumber = localStorage.getItem("exsm3936_number")) !== null)
{
    countingNumber.innerText = loadedNumber;
}

document.querySelector("#buttonSubmit").addEventListener("click", (e) => {
    let newNumber = Number(countingNumber.innerText) + Number(numberInput.value);
    countingNumber.innerText = newNumber;
    localStorage.setItem("exsm3936_number", newNumber);
    numberInput.value = "";
    numberInput.focus();
});
document.querySelector("#buttonClear").addEventListener("click", (e) => {
    countingNumber.innerText = "0";
    localStorage.clear("exsm3936_number");
    numberInput.value = "";
    numberInput.focus();
});