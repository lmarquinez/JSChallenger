/*Your first JavaScript DOM exercise. Let's start simple.
Extend the JavaScript code below to interact with the displayed HTML elements. Once you click the button, the checkbox should be checked.
Confirm your code by clicking the button!*/

<input id="checkbox" disabled />
    <label for="checkbox">checkbox</label>
    <button type="button" id="button">Verify Code</button>

    const button = document.getElementById('button');
button.addEventListener('click', () => {
    // type in your code here
    //OPCIÓN 1:
    const checkbox = document.querySelector('#checkbox')
    if (checkbox.hasAttribute('checked')) {
        checkbox.checked = false;
    } else {
        checkbox.checked = true;
    }
    //OPCIÓN 2:
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = true;
});