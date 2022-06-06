// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function myFunction12A(a, b) {
    let res = {};

    Object.keys(a).forEach(key => {
        res[key] = a[key] * b;
    });

    return res;
}

function myFunction12B(a, b) {
    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
}