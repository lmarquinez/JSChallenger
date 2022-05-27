// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction9A(a) {
    let res = '';
    for (let i = 0; i < a.length - 3; i++) {
        res += a[i];
    }
    return res;
}

function myFunction9B(a) {
    return a.slice(0, -3);
}