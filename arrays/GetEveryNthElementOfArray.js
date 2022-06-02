// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function myFunction21A(a, n) {
    let res = [];
    for (let i = n - 1; i < a.length; i += n) {
        res.push(a[i]);
    }
    return res;
}

function myFunction21B(a, n) {
    return a.filter((elem, i) => i % n === n - 1);
}

function myFunction21C(a, n) {
    let rest = [...a];
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (rest.length < n)
            break;
        result.push(rest[n - 1]);
        rest = rest.slice(n);
    }
    return result;
}