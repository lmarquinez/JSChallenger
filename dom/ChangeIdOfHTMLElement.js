/* In this scenario the existing code listens to a click on the button. When the button is clicked, the function changeInput is triggered. changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. Add some Javascript code to add the id inputEl to the existing input field.
Verify that your code works by clicking the button.*/

<div id="wrapper">
    <input type="text" placeholder="Text" readonly />
    <button type="button">Click Me</button>
</div>


const button = document.querySelector('#wrapper button');

const changeInput = () => {
    const input = document.querySelector('#inputEl');
    if (input) {
        input.value = 'Hello World';
    }
};

button.addEventListener('click', changeInput);
// type in your code here
//OPCIÓN 1:
document.querySelector('input').setAttribute('id', 'inputEl');
//OPCIÓN 2:
document.querySelector('input').id = 'inputEl';