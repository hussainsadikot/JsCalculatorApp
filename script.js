const buttonsEl = document.querySelectorAll("button")
// console.log(buttonsEl) 
const inputFieldEl = document.getElementById("result")
let buttonValue = ""
for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        // console.log(buttonsEl[i].innerText)
        buttonValue = buttonsEl[i].textContent
        if (buttonValue === "C") {
            clearResult()
        }
        else if (buttonValue === "=") {
            calculateResult()
        }
        else {
            appendValue(buttonValue)
        }
    });
}
function appendValue() {
    // console.log(buttonValue)
    inputFieldEl.value += buttonValue
}
function clearResult() {
    inputFieldEl.value = "0"
}
function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value)
    // let expression = Math.eval(inputFieldEl.value)
    // inputFieldEl.value = expression

}