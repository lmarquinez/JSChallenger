// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function myFunction6A(a, b) {
    let obj = new Object();
    obj[a] = b;
    return obj;
}

function myFunction6B(a, b) {
    return { [a]: b };
}

