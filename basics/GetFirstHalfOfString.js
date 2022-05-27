// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

function myFunction8A(a) {
    let res = '';
    for (let i = 0; i < a.length / 2; i++)
        res += a[i];
    return res;
}

function myFunction8B(a) {
    return a.slice(0, a.length / 2);
}