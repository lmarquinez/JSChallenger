// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

function myFunction5A(a, n) {
    let res = [];

    if (n <= a.length - 1) {
        for (let i = a.length - n; i < a.length; i++)
            res.push(a[i]);

        return res;
    }
    else
        return a;
}

function myFunction5B(a, n) {
    return a.slice(-n);
}

function myFunction5C(a, n) {
    return a.slice(a.length - n);
}