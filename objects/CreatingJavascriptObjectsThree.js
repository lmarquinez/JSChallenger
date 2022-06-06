// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction7A(a, b) {
    let res = {};
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            res[a[i]] = b[i];
        }
    }
    return res;
}

function myFunction7B(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}
