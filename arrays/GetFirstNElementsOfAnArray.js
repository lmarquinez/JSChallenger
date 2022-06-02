// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

function myFunction4A(a) {
    let res = [];

    for (let i = 0; i < 3; i++)
        res.push(a[i]);

    return res;
}

function myFunction4B(a) {
    return a.slice(0, 3);
}