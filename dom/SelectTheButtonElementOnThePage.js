/* In this scenario, the existing code adds an eventListener for a click event on a variable 'buttonElem'. It expects 'buttonElem' to be the button element in the example UI. But, that element is not selected yet.
Assign the button element to the variable 'buttonElem' with one of the existing selector methods.
Click the button to verify that the code is working.
Hint: Make use of the unique id identifier of the button element.*/

<button type="button" id="button">OFF</button>


// assign the correct element to the variable
//OPCIÓN 1:
const buttonElem = document.getElementById("button");
//OPCIÓN 2:
const buttonElem = document.querySelector("#button");

buttonElem.addEventListener('click', () => {
    const oldText = buttonElem.innerText;
    return button.innerText = oldText === "ON" ? "OFF" : "ON";
});