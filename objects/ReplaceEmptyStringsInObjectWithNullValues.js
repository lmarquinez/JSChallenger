// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction14A(obj) {
    Object.keys(obj).forEach(key => {
        if (obj[key] === '' || obj[key] === ' ') {
            obj[key] = null
        }
    });
    return obj;
}

function myFunction14B(obj) {
    const newObj = { ...obj };
    for (key in newObj) {
        if (newObj[key].trim() === '')
            newObj[key] = null;
    }
    return newObj;
}