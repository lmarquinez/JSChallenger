// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction13A(obj) {
    let res = {};

    for (let key in obj) {
        res[obj[key]] = key;
    }
    return res;
}

function myFunction13B(obj) {
    let res = {};

    Object.keys(obj).forEach(key => {
        res[obj[key]] = key;
    });
    return res;
}

function myFunction13C(obj) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        return { ...acc, [val]: key };
    }, {});
}