// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction9A(a) {
    return Object.values(a).reduce((acc, elem) => acc + elem);
}

function myFunction9B(a) {
    return Object.values(a).reduce((acc, elem) => acc + elem, 0);
}