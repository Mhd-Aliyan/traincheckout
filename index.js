
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0 
let saveEl = document.getElementById("save-el")
function increment()
{
    count += 1
    countEl.textContent = count
}

 function save()
{
    let savedcount =  count + " - "
    saveEl.textContent += savedcount 
    countEl.textContent = 0
    count = 0
}

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

function add() {
    let totalSum = num1 + num2 
    sumEl.textContent = "Sum: " + totalSum
}

function subtract() {
    let totalSum = num1 - num2
    sumEl.textContent = "Sum: " + totalSum
}
function divide() {
    let totalSum = num1 / num2
    sumEl.textContent = "Sum: " + totalSum
}
function multiply() {
    let totalSum = num1 * num2
    sumEl.textContent = "Sum: " + totalSum
}

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"