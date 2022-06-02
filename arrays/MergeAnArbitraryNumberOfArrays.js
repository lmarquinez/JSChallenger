// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction15A(...arrays) {
    let res = [];
    for (let i = 0; i < arrays.length; i++) {
        res.push(...arrays[i]);
    }
    return res;
}

function myFunction15B(...arrays) {
    return [].concat(...arrays);
}

function myFunction15C(...arrays) {
    return arrays[0].concat(arrays[1]);
}

function myFunction15D(...arrays) {
    return arrays.flat();
}

