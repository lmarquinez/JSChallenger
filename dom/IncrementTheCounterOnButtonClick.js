/* Extend the JavaScript code below to interact with the displayed HTML elements.
On each button click, increase the value of the button by 1.
Confirm your code by clicking the button!*/

<button type="button" id="button">0</button>


const button = document.getElementById('button');
button.addEventListener('click', () => {
    // type in your code here
    //OPCIÓN 1:
    let cont = Number(button.innerText);
    cont++;
    button.innerText = cont;
    //OPCIÓN 2:
    const oldValue = parseInt(button.innerText, 10);
    button.innerText = oldValue + 1;
});
