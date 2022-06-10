/* In this scenario, you need to query all list items that belong to the list with id 'list'. But, exclude the ones with id 'disabled'
Assign those items to the variable 'listItems' by using an appropriate selector method.
Once you have completed the code below, verify it by clicking the button. The respective items should change their text.*/

<ul id="list">
    <li>OFF</li>
    <li>OFF</li>
    <li>OFF</li>
    <li id="disabled">OFF</li>
    <li>OFF</li>
    <li>OFF</li>
    <li id="disabled">OFF</li>
    <li>OFF</li>
</ul>
    <button type="button" id="button">Click Me</button>

// assign the correct elements to the variable
const listItems = document.querySelectorAll('#list :not(li#disabled)');

const button = document.getElementById('button');

const handleClick = () => {
    listItems.forEach(item => {
        const oldText = item.innerText;
        return item.innerText = oldText === 'ON' ? 'OFF' : 'ON';
    })
};
if (listItems.length > 1) {
    button.addEventListener('click', handleClick);
}