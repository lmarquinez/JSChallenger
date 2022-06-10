/*The Javascript function changeText changes the text inside the circle. But again, there is no code to execute this function.
Complete the existing code below such that the function is called when the cursor moves onto the circle. Verify that your code works by hovering over the circle.*/

<div id="element">
    Hover Me
</div>

const element = document.getElementById('element');

const changeText = () => {
    element.innerText = 'Thanks!';
};

// type in your code here
//OPCIÓN 1:
element.addEventListener('mouseenter', changeText);

//OPCIÓN 2:
element.addEventListener('mouseover', changeText);
