// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

function myFunction3A(a) {
    let res = [];

    for (let i = a.length - 3; i < a.length; i++)
        res.push(a[i]);

    return res;
}

function myFunction3B(a) {
    return a.slice(-3);
}