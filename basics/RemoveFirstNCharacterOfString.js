// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction5A(a) {
    let res = '';
    for (let i = 3; i < a.length; i++) {
        res += a[i];
    }
    return res;
}

function myFunction5B(a) {
    return a.slice(3);
}