// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

function myFunction4A(a, b) {
    return a.hasOwnProperty(b);
}

function myFunction4B(a, b) {
    return b in a;
}

function myFunction4B(a, b) {
    return typeof a[b] !== 'undefined';
}