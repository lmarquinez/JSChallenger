// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

function myFunction7A(a) {
    let res = '';
    for (let i = 0; i < 3; i++) {
        res += a[i];
    }
    return res;
}

function myFunction7B(a) {
    return a.slice(0, 3);
}