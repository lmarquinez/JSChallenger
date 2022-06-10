/* You may not see it in the example UI, but underneath the red circle is a green circle. Extend the function removeRedCircle to remove the circle with id red from the DOM.
Make sure that you really remove the element instead of just hiding it. Confirm that your code works by clicking the button. */

<div id="green" />
    <div id="red" />
    <button type="button" id="button">Click Me</button>


const button = document.querySelector('#button');

const removeRedCircle = () => {
    // type in your code here
    //OPCIÓN 1:
    const redCircle = document.querySelector('#red');
    redCircle.remove();
    //OPCIÓN 2:
    const redCircle = document.querySelector('#red').remove();
    //OPCIÓN 3:
    const redCircle = document.querySelector('#red');
    redCircle.parentNode.removeChild(redCircle);
};

button.addEventListener('click', removeRedCircle);

