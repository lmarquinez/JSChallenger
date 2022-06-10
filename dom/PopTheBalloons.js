/* Make the balloons pop by hovering over them.
Extend the JavaScript code below to interact with the displayed HTML elements. Every time you hover over a balloon, it should become invisible.
Your goal is to pop all the balloons one after the other.
*/

<ul id="list">
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
</ul>


const list = document.getElementById('list');
// type in your code here
//OPCIÓN 1:
const ballons = list.querySelectorAll('li');
ballons.forEach(ballon => {
    ballon.addEventListener('mouseover', () => {
        ballon.style.visibility = 'hidden';
    });
});
//OPCIÓN 2:
const ballons = list.querySelectorAll('li');
ballonHoverHandler = event => event.target.style.visibility = 'hidden';
ballons.forEach(ballon => {
    ballon.addEventListener('mouseover', ballonHoverHandler);
});
//OPCIÓN 3:
const handleHover = event => {
    if (event.target !== list) {
        event.target.style.visibility = 'hidden';
    }
};
list.addEventListener('mouseover', handleHover);
