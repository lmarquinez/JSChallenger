// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

function myFunction2A(a) {
    let res = [];
    for (let i = a.length - 1; i > 2; i--) {
        res.push(a[i]);
    }
    return res.reverse();
}

function myFunction2B(a) {
    return a.slice(3);
}