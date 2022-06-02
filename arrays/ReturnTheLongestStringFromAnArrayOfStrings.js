// Write a function that takes an array of strings as argument
// Return the longest string

function myFunction12A(arr) {
    let res = '';
    arr.forEach(elem => {
        if (elem.length > res.length)
            res = elem;
    });
    return res;
}

function myFunction12B(arr) {
    return arr.reduce((acc, elem) => {
        let res;
        if (elem.length > acc.length) {
            res = elem;
        } else {
            res = acc;
        }
        return res;
    }, '');
}

function myFunction12C(arr) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a);
}

function myFunction12D(arr) {
    return arr.reduce((acc, elem) => elem.length > acc.length ? elem : acc, '');
}