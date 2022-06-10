/* In this challenge, we create a dynamic input filter with JavaScript.
Extend the code below to interact with the displayed HTML elements. Type a search term in the input field. The displayed items in the list should match your search term. The rest of the list elements should be hidden.*/

<input type="text" id="input" placeholder="Filter..." />
    <ul id="list">
        <li>paris</li>
        <li>berlin</li>
        <li>new york</li>
        <li>sao paulo</li>
        <li>hong kong</li>
        <li>vienna</li>
    </ul>


const input = document.getElementById('input');
input.addEventListener('input', () => {
    // type in your code here

});
