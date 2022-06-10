/* Extend the JavaScript code below to interact with the displayed HTML elements.
Enter a new todo in the input field. Once you click the button, the new todo item should appear at the bottom of the list.
Confirm your code by creating a new todo! */

<input type="text" id="input" placeholder="To do..." />
    <button type="button" id="button">Add</button>
    <ul id="list">
        <li>Read a book</li>
        <li>Lunch with Caro</li>
        <li>Feed the dog</li>
    </ul>

const button = document.getElementById('button');
button.addEventListener('click', () => {
    // type in your code here
    //OPCIÓN 1:
    const value = document.querySelector('#input').value;
    if (value !== '') {
        const list = document.querySelector('#list');
        const newli = document.createElement('li');
        newli.innerText = value;
        list.appendChild(newli);
    }
    //OPCIÓN 2:
    const input = document.getElementById('input');
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    list.append(newItem);

});